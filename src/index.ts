import { DynamoDB } from 'aws-sdk';
import ajv from 'ajv';
import { default as itemHandlerLambda } from './handlers/item-handler';
import { ItemService } from './services/item-service';
import { SchemaValidatorService } from './services/schema-validator-service';

const jsonSchemaValidatorService = new SchemaValidatorService(
    new ajv({
        allErrors: true,
        format: 'full'
    }));

const dynamoDbClient = new DynamoDB.DocumentClient({ region: 'us-east-2' });
const itemService = new ItemService(dynamoDbClient);

export const itemHandler = itemHandlerLambda(itemService, jsonSchemaValidatorService);