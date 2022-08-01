import { ScanCommandInput, ScanCommand } from '@aws-sdk/lib-dynamodb';
import client from '../client';

const getUsers = async () => {
  const getUsersParams: ScanCommandInput = {
    TableName: 'Users',
  };

  const command = new ScanCommand(getUsersParams);
  return await client.send(command);
};

export default getUsers;
