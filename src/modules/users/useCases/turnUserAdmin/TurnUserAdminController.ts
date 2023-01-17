import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.turnUserAdminUseCase.execute({ user_id: id as string });

    return response.status(201).send();
  }
}

export { TurnUserAdminController };
