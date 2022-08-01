import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';
import { v4 as uuidv4 } from 'uuid';
import putUser from './db/users/putUser';
import getUsers from './db/users/getUsers';

@Injectable()
export class AppService {
  getAll() {
    return getUsers();
  }

  create(user: CreateUserDto) {
    const id = uuidv4();

    const newUser = new User(id, user.name, user.email);
    putUser(newUser);
    return id;
  }
}
