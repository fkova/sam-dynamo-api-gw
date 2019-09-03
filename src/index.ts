import { DynamoDB } from 'aws-sdk';
import { default as itemHandlerLambda } from './handlers/item-handler';
import { ItemService } from './services/item-service';

const dynamoDbClient = new DynamoDB.DocumentClient({region: 'us-east-2'});
const itemService = new ItemService(dynamoDbClient);

export const itemHandler = itemHandlerLambda(itemService);