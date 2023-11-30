import { PrismaClient } from "@prisma/client";
import { ILogBookRepository } from "../application/LogBookRepository";
import { LogBook } from "../domain/LogBook";

export class PrismaLogBookRepository implements ILogBookRepository {
  public constructor(private readonly _client: PrismaClient) {}

  public async save(logBook: LogBook): Promise<boolean> {
    const result = this._client.logbook.create({
      data: {
        id: logBook.id,
        name: logBook.name,
        userId: logBook.userId,
      },
    });
    return true;
  }
}
