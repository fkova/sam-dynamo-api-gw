const handler = require('../dist/handler');
jest.mock('../dist/dbManager');

describe('sendResponse', () => {
    test('sendresponse with code and text should return object', () => {
        expect(handler.sendResponse(404,"error occured")).toEqual({statusCode: 404,body: "\"error occured\""});
    });
});

describe('CRUD Functions', () => {
    describe('SaveItem',() => {
        test('SaveItem with valid event should return valid object', async () => {
            const event = {
                body: {
                    "name": "alma"
                }
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
});


/*
describe('GET', () => {
    test('sendresponse should response with object', () => {
        expect(sendResponse(404,"error occured")).toEqual({statusCode: 404,body: "\"error occured\""});
    });
});
*/