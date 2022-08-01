import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { User } from 'src/entities/users.entity';
import client from '../client';

const putUser = (user: User) => {
  const putUserParams: PutCommandInput = {
    TableName: 'Users',
    Item: {
      PK: 'USERS',
      SK: user.id,
      name: user.name,
      email: user.email,
    },
  };

  const command = new PutCommand(putUserParams);
  return client.send(command);
};

export default putUser;
