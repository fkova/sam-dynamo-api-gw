import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import constants from '../constants';
const tableName = constants['TABLE_NAME'];
import { v1 as uuid } from 'uuid';

export interface IItemService {
    createItem (name: string): Promise<any>;
    readItem (id: string): Promise<any>;
    updateItem (id: string, name: string): Promise<any>;
    deleteItem (id: string): Promise<any>;
}

export class ItemService {
    constructor (private dynamoDbClient: DocumentClient) {};

    async createItem ( name: String ): Promise<any> {
        let params = {
            TableName: tableName,
            Item: {
                item_id: uuid(),
                item_name: name
            }
        };

        return await this.dynamoDbClient.put(params).promise()
    }

    async readItem (id: string): Promise<any> {
        let params = {
            TableName: tableName,
            Key: {
                item_id: id
            }
        };

        return (await this.dynamoDbClient.get(params).promise()).Item
    }

    async updateItem (id: string, newName: string): Promise<any> {
        let params = {
            TableName: tableName,
            Key: {
                item_id: id
            },
            UpdateExpression: 'set item_name = :v',
            ExpressionAttributeValues: {
                ':v': newName
            },
            ReturnValues: 'UPDATED_NEW'
        };

        return await this.dynamoDbClient.update(params).promise()
    }

    async deleteItem (id: string): Promise<any> {
        let params = {
            TableName: tableName,
            Key: {
                item_id: id
            }
        };

        return await this.dynamoDbClient.delete(params).promise()
    }
};