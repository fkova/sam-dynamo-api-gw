import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import constants from '../../constants';
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
        return Promise.resolve();
    }

    async readItem (id: string): Promise<any> {
        return Promise.resolve({
            item_id: id,
            item_name: "item_name"
        });
    }

    async updateItem (id: string, name: string): Promise<any> {
        return Promise.resolve();
    }

    async deleteItem (id: string): Promise<any> {
        return Promise.resolve();
    }
};