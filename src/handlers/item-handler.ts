import { Handler, APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';
import { ResponseFactory } from '../factories/response-factory';
import { IItemService } from '../services/item-service';
import { ISchemaValidatorService } from '../services/schema-validator-service';
import ItemCreateSchemaJson from '../schemas/ItemCreate.schema.json';

export default (itemService: IItemService, validator: ISchemaValidatorService): Handler<APIGatewayProxyEvent, APIGatewayProxyResult> => {
    return async (event) => {

        try {
            switch (event.httpMethod) {
                case 'DELETE':
                    if (!event.pathParameters) {
                        return ResponseFactory.generateBadRequestResponse('Missing id!');
                    }

                    await itemService.deleteItem(event.pathParameters.id);
                    return ResponseFactory.generateSuccessResponse({});

                case 'GET':
                    if (!event.pathParameters) {
                        return ResponseFactory.generateBadRequestResponse('Missing id!');
                    }

                    let result = await itemService.readItem(event.pathParameters.id);
                    let responseBody = {
                        item_id: result.item_id,
                        item_name: result.item_name
                    };

                    return ResponseFactory.generateSuccessResponse(responseBody);

                case 'POST':
                    if (!event.body) {
                        return ResponseFactory.generateBadRequestResponse('Missing body!');
                    }

                    let body = JSON.parse(event.body);
                    let validationError = validator.validate(body, ItemCreateSchemaJson);

                    if (validationError) {
                        return ResponseFactory.generateErrorResponse(400, validationError);
                    }


                    let res = await itemService.createItem(JSON.parse(event.body).item_name);
                    return ResponseFactory.generateSuccessResponse(res);

                case 'PUT':
                    if (!event.pathParameters || !event.body) {
                        return ResponseFactory.generateBadRequestResponse('Missing id or body!');
                    }
                    await itemService.updateItem(event.pathParameters.id, JSON.parse(event.body).item_name);
                    return ResponseFactory.generateSuccessResponse({});

                default:
                    return ResponseFactory.generateBadRequestResponse(`Unsupported method "${event.httpMethod}"`);
            }
        } catch (err) {
            return ResponseFactory.generateErrorResponse(err.statusCode, err.message);
        }
    }
};