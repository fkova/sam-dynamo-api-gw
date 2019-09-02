import { Handler, APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';
import { ResponseFactory } from '../factories/response-factory';
import { IItemService } from '../services/item-service';
 

export default (itemService: IItemService): Handler<APIGatewayProxyEvent, APIGatewayProxyResult> => {
    return async(event) =>{        
        switch(event.httpMethod) {
            case 'DELETE':
                if (!event.pathParameters) return ResponseFactory.generateBadRequestResponse('Missing id!');

                try{
                    await itemService.deleteItem(event.pathParameters.id);
                    return ResponseFactory.generateSuccessResponse({});
                }catch(err){
                    return ResponseFactory.generateErrorResponse(err.statusCode, err.message);
                }	
            case 'GET':
                if (!event.pathParameters) return ResponseFactory.generateBadRequestResponse('Missing id!');

                try{
                    let result = await itemService.readItem(event.pathParameters.id);
                    let responseBody = {
                        item_id: result.item_id,
                        item_name: result.item_name
                    };
                    return ResponseFactory.generateSuccessResponse(responseBody);
                }catch(err){
                    return ResponseFactory.generateErrorResponse(err.statusCode, err.message);
                }
            case 'POST':
                if (!event.body) return ResponseFactory.generateBadRequestResponse('Missing body!');

                try{
                    await itemService.createItem(JSON.parse(event.body).item_name);
                    return ResponseFactory.generateSuccessResponse({});
                }catch(err){
                    return ResponseFactory.generateErrorResponse(err.statusCode, err.message);
                }
            case 'PUT':
                if (!event.pathParameters|| !event.body) return ResponseFactory.generateBadRequestResponse('Missing id or body!');

                try{
                    await itemService.updateItem(event.pathParameters.id, JSON.parse(event.body).item_name);
                    return ResponseFactory.generateSuccessResponse({});
                }catch(err){
                    return ResponseFactory.generateErrorResponse(err.statusCode, err.message);
                }
            default:
                return ResponseFactory.generateBadRequestResponse(`Unsupported method "${event.httpMethod}"`);
        }
    }
};