import { ILogBookRepository } from "../application/LogBookRepository";
import { LogBook } from "../domain/LogBook";

export class InMemoryLogBookRepository implements ILogBookRepository {
  private readonly _logBooks: LogBook[] = [];

  public async save(logBook: LogBook): Promise<boolean> {
    this._logBooks.push(logBook);
    return true;
  }
}
