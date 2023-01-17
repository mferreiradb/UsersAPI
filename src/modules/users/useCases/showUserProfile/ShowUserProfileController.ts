import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.showUserProfileUseCase.execute({ user_id: id as string });

    return response.send();
  }
}

export { ShowUserProfileController };
