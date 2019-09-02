"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const response_factory_1 = require("../src/factories/response-factory");
describe('Testing response factory', () => {
    it('should return with success response without additional data', () => {
        const statusCode = 200;
        const expectedResult = {
            statusCode: statusCode,
            body: JSON.stringify({
                status: statusCode,
                message: http_1.STATUS_CODES[statusCode]
            })
        };
        const result = response_factory_1.ResponseFactory.generateSuccessResponse({});
        expect(result).toEqual(expectedResult);
    });
    it('should return with success response with additional data', () => {
        const statusCode = 200;
        const expectedResult = {
            statusCode: statusCode,
            body: JSON.stringify({
                item_id: '1',
                item_name: 'something',
                status: statusCode,
                message: http_1.STATUS_CODES[statusCode]
            })
        };
        const result = response_factory_1.ResponseFactory.generateSuccessResponse({ item_id: '1', item_name: 'something' });
        expect(result).toEqual(expectedResult);
    });
    it('should return with error response with the given status code', () => {
        const statusCode = 403;
        const message = 'Error!';
        const expectedResult = {
            statusCode: statusCode,
            body: JSON.stringify({
                status: statusCode,
                message: http_1.STATUS_CODES[statusCode],
                description: message
            })
        };
        const result = response_factory_1.ResponseFactory.generateErrorResponse(statusCode, message);
        expect(result).toEqual(expectedResult);
    });
    it('should return with error response with status code 500 by default', () => {
        const statusCode = 500;
        const message = 'Error!';
        const expectedResult = {
            statusCode: statusCode,
            body: JSON.stringify({
                status: statusCode,
                message: http_1.STATUS_CODES[statusCode],
                description: message
            })
        };
        const result = response_factory_1.ResponseFactory.generateErrorResponse(0, message);
        expect(result).toEqual(expectedResult);
    });
    it('should return with bad request response', () => {
        const statusCode = 400;
        const message = 'Error!';
        const expectedResult = {
            statusCode: statusCode,
            body: JSON.stringify({
                status: statusCode,
                message: http_1.STATUS_CODES[statusCode],
                description: message
            })
        };
        const result = response_factory_1.ResponseFactory.generateBadRequestResponse(message);
        expect(result).toEqual(expectedResult);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UtZmFjdG9yeS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9yZXNwb25zZS1mYWN0b3J5LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBb0M7QUFDcEMsd0VBQW9FO0FBRXBFLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLEVBQUU7SUFDdEMsRUFBRSxDQUFDLDZEQUE2RCxFQUFFLEdBQUcsRUFBRTtRQUNuRSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdkIsTUFBTSxjQUFjLEdBQUc7WUFDbkIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixPQUFPLEVBQUUsbUJBQVksQ0FBQyxVQUFVLENBQUM7YUFFcEMsQ0FBQztTQUNMLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRyxrQ0FBZSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMERBQTBELEVBQUUsR0FBRyxFQUFFO1FBQ2hFLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN2QixNQUFNLGNBQWMsR0FBRztZQUNuQixVQUFVLEVBQUUsVUFBVTtZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakIsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixPQUFPLEVBQUUsbUJBQVksQ0FBQyxVQUFVLENBQUM7YUFDcEMsQ0FBQztTQUNMLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRyxrQ0FBZSxDQUFDLHVCQUF1QixDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUMvRixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhEQUE4RCxFQUFFLEdBQUcsRUFBRTtRQUNwRSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdkIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLE1BQU0sY0FBYyxHQUFHO1lBQ25CLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixNQUFNLEVBQUUsVUFBVTtnQkFDbEIsT0FBTyxFQUFFLG1CQUFZLENBQUMsVUFBVSxDQUFDO2dCQUNqQyxXQUFXLEVBQUUsT0FBTzthQUN2QixDQUFDO1NBQ0wsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLGtDQUFlLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUVBQW1FLEVBQUUsR0FBRyxFQUFFO1FBQ3pFLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN2QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUE7UUFDeEIsTUFBTSxjQUFjLEdBQUc7WUFDbkIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixPQUFPLEVBQUUsbUJBQVksQ0FBQyxVQUFVLENBQUM7Z0JBQ2pDLFdBQVcsRUFBRSxPQUFPO2FBQ3ZCLENBQUM7U0FDTCxDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUcsa0NBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLEVBQUU7UUFDL0MsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQTtRQUN4QixNQUFNLGNBQWMsR0FBRztZQUNuQixVQUFVLEVBQUUsVUFBVTtZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakIsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE9BQU8sRUFBRSxtQkFBWSxDQUFDLFVBQVUsQ0FBQztnQkFDakMsV0FBVyxFQUFFLE9BQU87YUFDdkIsQ0FBQztTQUNMLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRyxrQ0FBZSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9