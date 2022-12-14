import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const dynamoClient = new DynamoDBClient({
  region: 'us-east-2',
});

const docClient = DynamoDBDocumentClient.from(dynamoClient);

export default docClient;
