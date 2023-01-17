import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
    this.users.push({
      id: "1",
      name: "test",
      admin: false,
      email: "test@test.com",
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user: User = new User();
    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User {
    const existUser = this.users.find((user) => user.id === id);

    return existUser;
  }

  findByEmail(email: string): User {
    const existUser = this.users.find((user) => user.email === email);

    return existUser;
  }

  turnAdmin(receivedUser: User): User {
    const user = receivedUser;
    user.admin = true;
    user.updated_at = new Date();

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
