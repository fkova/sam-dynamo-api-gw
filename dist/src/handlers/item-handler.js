"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_factory_1 = require("../factories/response-factory");
exports.default = (itemService) => {
    return (event) => __awaiter(void 0, void 0, void 0, function* () {
        switch (event.httpMethod) {
            case 'DELETE':
                if (!event.pathParameters)
                    return response_factory_1.ResponseFactory.generateBadRequestResponse('Missing id!');
                try {
                    yield itemService.deleteItem(event.pathParameters.id);
                    return response_factory_1.ResponseFactory.generateSuccessResponse({});
                }
                catch (err) {
                    return response_factory_1.ResponseFactory.generateErrorResponse(err.statusCode, err.message);
                }
            case 'GET':
                if (!event.pathParameters)
                    return response_factory_1.ResponseFactory.generateBadRequestResponse('Missing id!');
                try {
                    let result = yield itemService.readItem(event.pathParameters.id);
                    let responseBody = {
                        item_id: result.item_id,
                        item_name: result.item_name
                    };
                    return response_factory_1.ResponseFactory.generateSuccessResponse(responseBody);
                }
                catch (err) {
                    return response_factory_1.ResponseFactory.generateErrorResponse(err.statusCode, err.message);
                }
            case 'POST':
                if (!event.body)
                    return response_factory_1.ResponseFactory.generateBadRequestResponse('Missing body!');
                try {
                    yield itemService.createItem(JSON.parse(event.body).item_name);
                    return response_factory_1.ResponseFactory.generateSuccessResponse({});
                }
                catch (err) {
                    return response_factory_1.ResponseFactory.generateErrorResponse(err.statusCode, err.message);
                }
            case 'PUT':
                if (!event.pathParameters || !event.body)
                    return response_factory_1.ResponseFactory.generateBadRequestResponse('Missing id or body!');
                try {
                    yield itemService.updateItem(event.pathParameters.id, JSON.parse(event.body).item_name);
                    return response_factory_1.ResponseFactory.generateSuccessResponse({});
                }
                catch (err) {
                    return response_factory_1.ResponseFactory.generateErrorResponse(err.statusCode, err.message);
                }
            default:
                return response_factory_1.ResponseFactory.generateBadRequestResponse(`Unsupported method "${event.httpMethod}"`);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhbmRsZXJzL2l0ZW0taGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLG9FQUFnRTtBQUloRSxrQkFBZSxDQUFDLFdBQXlCLEVBQXdELEVBQUU7SUFDL0YsT0FBTyxDQUFNLEtBQUssRUFBRSxFQUFFO1FBQ2xCLFFBQU8sS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNyQixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjO29CQUFFLE9BQU8sa0NBQWUsQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFNUYsSUFBRztvQkFDQyxNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdEQsT0FBTyxrQ0FBZSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtnQkFBQSxPQUFNLEdBQUcsRUFBQztvQkFDUCxPQUFPLGtDQUFlLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdFO1lBQ0wsS0FBSyxLQUFLO2dCQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYztvQkFBRSxPQUFPLGtDQUFlLENBQUMsMEJBQTBCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRTVGLElBQUc7b0JBQ0MsSUFBSSxNQUFNLEdBQUcsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pFLElBQUksWUFBWSxHQUFHO3dCQUNmLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTzt3QkFDdkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO3FCQUM5QixDQUFDO29CQUNGLE9BQU8sa0NBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDaEU7Z0JBQUEsT0FBTSxHQUFHLEVBQUM7b0JBQ1AsT0FBTyxrQ0FBZSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM3RTtZQUNMLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQUUsT0FBTyxrQ0FBZSxDQUFDLDBCQUEwQixDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUVwRixJQUFHO29CQUNDLE1BQU0sV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDL0QsT0FBTyxrQ0FBZSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtnQkFBQSxPQUFNLEdBQUcsRUFBQztvQkFDUCxPQUFPLGtDQUFlLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdFO1lBQ0wsS0FBSyxLQUFLO2dCQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFHLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQUUsT0FBTyxrQ0FBZSxDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBRWxILElBQUc7b0JBQ0MsTUFBTSxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN4RixPQUFPLGtDQUFlLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3REO2dCQUFBLE9BQU0sR0FBRyxFQUFDO29CQUNQLE9BQU8sa0NBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDN0U7WUFDTDtnQkFDSSxPQUFPLGtDQUFlLENBQUMsMEJBQTBCLENBQUMsdUJBQXVCLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3JHO0lBQ0wsQ0FBQyxDQUFBLENBQUE7QUFDTCxDQUFDLENBQUMifQ==