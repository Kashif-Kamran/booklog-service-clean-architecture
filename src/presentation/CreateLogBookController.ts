import { Request, Response } from "express";
import { CreateLogBookUseCase } from "../application/CreateLogBookUseCase";

export class CreateLogBookController {
  public constructor(private readonly _useCase: CreateLogBookUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    let tempUserId = "Kashif Kamran";

    let response = await this._useCase.execute({
      name: req.body.name,
      userId: tempUserId,
    });
    return res.status(201).send({ id: response.logBookId });
  }
}
