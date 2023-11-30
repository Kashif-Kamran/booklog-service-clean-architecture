import { LogBook } from "../domain/LogBook";

export interface ILogBookRepository {
  save(logBook: LogBook): Promise<boolean>;
}
