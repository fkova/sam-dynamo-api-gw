import { ItemService } from '../src/services/item-service';
import { DynamoDB } from 'aws-sdk';
import constants from '../src/constants';

const tableName = constants['TABLE_NAME'];
const dc = new DynamoDB.DocumentClient();
const mockDbPutMethod: jest.SpyInstance = jest.spyOn(dc, 'put');
const mockDbGetMethod: jest.SpyInstance = jest.spyOn(dc, 'get');
const mockDbUpdateMethod: jest.SpyInstance = jest.spyOn(dc, 'update');
const mockDbDeleteMethod: jest.SpyInstance = jest.spyOn(dc, 'delete');
const itemService= new ItemService(dc);

describe('Testing item service', () => {

    afterEach(() => {
        mockDbPutMethod.mockReset();
        mockDbGetMethod.mockReset();
        mockDbUpdateMethod.mockReset();
        mockDbDeleteMethod.mockReset();
    });

    it('should call put with correct params', async () => {
        const name = 'valami';

        mockDbPutMethod.mockReturnValue({
            promise() {
                return Promise.resolve({
                        "status": 200,
                        "message": "OK"
                });
            }
        });

        const result = await itemService.createItem(name);

        expect(result).toMatchObject({
                "status": 200,
                "message": "OK"
        });
    });

    it('should call get with correct params and return mocked values', async () => {
        const id = '1';
        const name = 'anyItem';
        const returnValues = {
            item_id: id,
            item_name: name
        }

        mockDbGetMethod.mockReturnValue({
            promise() {
                return Promise.resolve({
                    Item: returnValues
                });
            }
        });

        let result = await itemService.readItem(id);

        expect(result).toEqual(returnValues);
        expect(mockDbGetMethod).toHaveBeenCalledWith({
            TableName: tableName,
            Key: {
                item_id: id,
            }
        });
    });

    it('should call update with correct params', async () => {
        const id = '1';
        const name = 'akarmi'
  
        mockDbUpdateMethod.mockReturnValue({
            promise() {
                return Promise.resolve({});
            }
        });

        await itemService.updateItem(id, name);

        expect(mockDbUpdateMethod).toHaveBeenCalledWith({
            TableName: tableName,
            Key: {
                item_id: id
            },
            UpdateExpression: 'set item_name = :v',
            ExpressionAttributeValues: {
                ':v': name
            },
            ReturnValues: 'UPDATED_NEW'
        });
    });

    it('should call delete with correct params', async () => {
        const id = '1';

        mockDbDeleteMethod.mockReturnValue({
            promise() {
                return Promise.resolve({});
            }
        });

        await itemService.deleteItem(id);

        expect(mockDbDeleteMethod).toHaveBeenCalledWith({
            TableName: tableName,
            Key: {
                item_id: id,
            }
        });
    });
});