import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.headers;

    this.listAllUsersUseCase.execute({ user_id: id as string });

    return response.send();
  }
}

export { ListAllUsersController };
