"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
class ResponseFactory {
    static generateSuccessResponse(data) {
        return {
            statusCode: 200,
            body: JSON.stringify(Object.assign(Object.assign({}, data), { status: 200, message: http_1.STATUS_CODES[200] }))
        };
    }
    static generateErrorResponse(statusCode, errorMessage) {
        return {
            statusCode: statusCode || 500,
            body: JSON.stringify({
                status: statusCode || 500,
                message: http_1.STATUS_CODES[statusCode || 500],
                description: errorMessage
            })
        };
    }
    static generateBadRequestResponse(errorMessage) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                status: 400,
                message: http_1.STATUS_CODES[400],
                description: errorMessage
            })
        };
    }
}
exports.ResponseFactory = ResponseFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mYWN0b3JpZXMvcmVzcG9uc2UtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFvQztBQVFwQyxNQUFhLGVBQWU7SUFDeEIsTUFBTSxDQUFDLHVCQUF1QixDQUFFLElBQXlCO1FBQ3JELE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxpQ0FDYixJQUFJLEtBQ1AsTUFBTSxFQUFFLEdBQUcsRUFDWCxPQUFPLEVBQUUsbUJBQVksQ0FBQyxHQUFHLENBQUMsSUFDNUI7U0FDTCxDQUFBO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBRSxVQUFrQixFQUFFLFlBQW9CO1FBQ2xFLE9BQU87WUFDSCxVQUFVLEVBQUUsVUFBVSxJQUFJLEdBQUc7WUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxVQUFVLElBQUksR0FBRztnQkFDekIsT0FBTyxFQUFFLG1CQUFZLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztnQkFDeEMsV0FBVyxFQUFFLFlBQVk7YUFDNUIsQ0FBQztTQUNMLENBQUE7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLDBCQUEwQixDQUFFLFlBQW9CO1FBQ25ELE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixNQUFNLEVBQUUsR0FBRztnQkFDWCxPQUFPLEVBQUUsbUJBQVksQ0FBQyxHQUFHLENBQUM7Z0JBQzFCLFdBQVcsRUFBRSxZQUFZO2FBQzVCLENBQUM7U0FDTCxDQUFBO0lBQ0wsQ0FBQztDQUNKO0FBakNELDBDQWlDQyJ9