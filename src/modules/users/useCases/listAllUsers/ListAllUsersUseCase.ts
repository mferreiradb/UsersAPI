import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string): User[] {
    const user = this.usersRepository.findById(user_id as string);

    if (!user.admin) {
      throw new Error("User is not admin");
    }
    if (!user) {
      throw new Error("User does not exist");
    }
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
