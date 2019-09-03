import { default as handler } from '../src/handlers/item-handler';
import { IItemService, ItemService } from '../src/services/item-service';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Callback } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
const documentClient = new DynamoDB.DocumentClient();
let mockItemService: IItemService;

describe('Lambda unit testing', () => {
    beforeAll(()=>{
        jest.spyOn(ItemService.prototype,'createItem').mockImplementation(() => Promise.resolve()); 
        jest.spyOn(ItemService.prototype,'updateItem').mockImplementation((id, name) => Promise.resolve());  
        jest.spyOn(ItemService.prototype,'deleteItem').mockImplementation((id) => Promise.resolve({}));  
        jest.spyOn(ItemService.prototype,'readItem').mockImplementation((id) => Promise.resolve({
            item_id: id,
            item_name: 'anything'
        }));  
        
        mockItemService = new ItemService(documentClient);
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });
    
    test('handler called with valid POST event', async () => {
        const event = {
            httpMethod: 'POST',
            body: JSON.stringify({
                item_name: "alma"
            })
        } as APIGatewayProxyEvent ;

        const response = await callLambda(event);

        expect(mockItemService.createItem).toHaveBeenCalledWith('alma');
        expect(mockItemService.createItem).toHaveBeenCalledTimes(1);
        expect(response.statusCode).toBe(200);
    });


    test('handler called with POST event without body should give an error response', async () => {
        const event = {
            httpMethod: 'POST'
        } as APIGatewayProxyEvent ;

        const result = await callLambda(event);

        expect(result).toMatchObject({
            statusCode: 400,
            body: JSON.stringify({
                status: 400,
                message: "Bad Request",
                description: "Missing body!"
            })
        });
    });

    test('handler called with valid GET event', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                id: '123'
            }
        } as unknown as APIGatewayProxyEvent;

        const response = await callLambda(event);

        expect(mockItemService.readItem).toHaveBeenCalledWith('123');
        expect(mockItemService.readItem).toHaveBeenCalledTimes(1);
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body).item_id).toBe('123');
    });

    test('handler called with GET event without pathParameters should give an error response', async () => {
        const event = {
            httpMethod: 'GET'
        } as APIGatewayProxyEvent ;

        const result = await callLambda(event);

        expect(result).toMatchObject({
            statusCode: 400,
            body: JSON.stringify({
                status: 400,
                message: "Bad Request",
                description: "Missing id!"
            })
        });
    });
    
    test('handler called with valid DELETE event', async () => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                id: '123'
            }
        } as unknown as APIGatewayProxyEvent;

        const response = await callLambda(event);

        expect(mockItemService.deleteItem).toHaveBeenCalledWith('123');
        expect(mockItemService.deleteItem).toHaveBeenCalledTimes(1);
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body).message).toBe('OK');
    });

    test('handler called with DELETE event without pathParameters should give an error response', async () => {
        const event = {
            httpMethod: 'DELETE'
        } as APIGatewayProxyEvent ;

        const result = await callLambda(event);

        expect(result).toMatchObject({
            statusCode: 400,
            body: JSON.stringify({
                status: 400,
                message: "Bad Request",
                description: "Missing id!"
            })
        });
    });

    test('handler called with valid PUT event', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                id: '123'
            },
            body: JSON.stringify({
                item_name: 'something_else'
            })
        } as unknown as APIGatewayProxyEvent;

        const response = await callLambda(event);

        expect(mockItemService.updateItem).toHaveBeenCalledWith('123','something_else');
        expect(mockItemService.updateItem).toHaveBeenCalledTimes(1);
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body).message).toBe('OK');
    });

    test('handler called with PUT event without pathParameters or body should give an error response', async () => {
        const event = {
            httpMethod: 'PUT'
        } as APIGatewayProxyEvent ;

        const result = await callLambda(event);

        expect(result).toMatchObject({
            statusCode: 400,
            body: JSON.stringify({
                status: 400,
                message: "Bad Request",
                description: "Missing id or body!"
            })
        });
    });
});

const callLambda = async (event: APIGatewayProxyEvent) => {
    return await handler(mockItemService)(
        event,
        undefined as unknown as Context, 
        undefined as unknown as Callback<APIGatewayProxyResult>
    ) as APIGatewayProxyResult;
}
