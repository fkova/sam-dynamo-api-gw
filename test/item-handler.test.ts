import { default as handler } from '../src/handlers/item-handler';
import { IItemService } from '../src/services/item-service';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Callback } from 'aws-lambda';
jest.mock('../src/services/item-service');


describe('CRUD API Event inputs for Lambda', () => {
    describe('SaveItem',() => {
        test('SaveItem with valid event should return valid object', async () => {

            /*
            const event: IItemService = {
                httpMethod: 'POST',
                body: '{ "name": "ablak" }'
            }
          

            const result = await handler(event);
    
            expect(result).toMatchObject({name: 'alma'});
            expect(result).toHaveProperty("itemId");
  */
        });


        test('SaveItem with null should return "no event"', async () => {
            /*
            const result = await handler.saveItem(null);
            expect(result).toBe("no event");
            */
        });
    });


    /*
    describe('SaveItem',() => {
        test('SaveItem with valid event should return valid object', async () => {
            const event = {
                httpMethod: 'POST',
                body: '{ "name": "alma" }'
            }

            const result = await handler.saveItem(event);
    
            expect(result).toMatchObject({name: 'alma'});
            expect(result).toHaveProperty("itemId");
        });

        test('SaveItem with null should return "no event"', async () => {
            const result = await handler.saveItem(null);

            expect(result).toBe("no event");
        });
    });

    describe('GetItem',() => {
        test('GetItem with valid event should return valid object', async () => {
            const event = {
                httpMethod: 'GET',
                pathParameters: {
                    itemId: '1'
                },
                body: {}
            };
            const result = await handler.getItem(event);
    
            expect(result).toHaveProperty("itemId");
        });

        test('GetItem with null should return "no event"', async () => {
            const result = await handler.getItem(null);
            expect(result).toBe("no event");
        });
    });

    describe('UpdateItem',() => {
        test('UpdateItem with valid event should return valid object', async () => {
            const event = {
                httpMethod: 'PUT',
                pathParameters: {
                    itemId: 1
                },
                body: '{ "paramName": "item_name", "paramValue": "new_name" }'
            };
            const result = await handler.updateItem(event);
    
            expect(result).toHaveProperty("itemId");
        });
    });

    describe('DeleteItem',() => {
        test('DeleteItem with valid event should return valid object', async () => {
            const event = {
                httpMethod: 'DELETE',
                pathParameters: {
                    itemId: 1
                },
                body: {}
            };
            const result = await handler.deleteItem(event);
    
            expect(result).toMatchObject({});
        });
    });

    */
});
