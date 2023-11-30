import { LogBook } from "../domain/LogBook";
import { ILogBookRepository } from "./LogBookRepository";

// Input DTO
interface ICreateLogBookDto {
  name: string;
  userId: string;
}

// Output Result
interface ICreateLogBookResult {
  logBookId: string;
}

// Main Class (UseCase)
export class CreateLogBookUseCase {
  // Injecting LogBook Repository
  public constructor(private readonly _logBookRepository: ILogBookRepository) {}

  async execute(input: ICreateLogBookDto): Promise<ICreateLogBookResult> {
    const logBook = new LogBook(input.name, input.userId);
    const result = await this._logBookRepository.save(logBook);
    if (!result) {
      throw new Error("( Could Not Save LogBook )");
    }

    return {
      logBookId: logBook.id,
    };
  }
}
