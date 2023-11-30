import { CreateLogBookUseCase } from "./application/CreateLogBookUseCase";
import { InMemoryLogBookRepository } from "./infrastructure/InMemoryLogBookRepository";
import { CreateLogBookController } from "./presentation/CreateLogBookController";
import { ApiServer } from "./presentation/ApiServer";
import { PrismaClient } from "@prisma/client";
import { PrismaLogBookRepository } from "./infrastructure/PrismaLogBookRepository";

export async function main(): Promise<void> {
  /*
  This Application is A Demo of Clean Architecture. The Main component is responsible for
  creating all the dependencies and running the application. The Main component is also
  responsible for creating the dependencies of the outer layers and passing them to the
  inner layers.
  */
  const prismaClient = new PrismaClient();
  const prismaRepo = new PrismaLogBookRepository(prismaClient);

  const inMemoryRepo = new InMemoryLogBookRepository();
  const useCase = new CreateLogBookUseCase(prismaRepo);
  const controller = new CreateLogBookController(useCase);
  await ApiServer.run(3000, controller);
}

main();
