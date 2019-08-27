import { v1 as uuid } from 'uuid';
const databaseManager = require('./dbManager');

interface apiEventValidator {
	body: string
	httpMethod: string,
	pathParameters: {
		itemId: string
	}
}

const dbManagerLambda = async (event: apiEventValidator): Promise<any> => {

    switch(event.httpMethod) {
		case 'DELETE':
			const delResult = await deleteItem(event);
			return sendResponse(200,delResult);
		case 'GET':
			const getResult = await getItem(event);
			return sendResponse(200,getResult);
		case 'POST':
			const saveResult = await saveItem(event);
			return sendResponse(200,saveResult);
		case 'PUT':
			const updateResult = await updateItem(event);
			return sendResponse(200, updateResult);
		default:
			return sendResponse(404,`Unsupported method "${event.httpMethod}"`);
    }
};

async function saveItem(event: apiEventValidator) {
	if(!event)return "no event";

	var responseBody = JSON.parse(event.body);

	if(!responseBody.itemId){
		responseBody.itemId = uuid();
	}	

	return await databaseManager.saveItem(responseBody);
}

async function getItem(event: apiEventValidator) {
	if(!event) return "no event";

	const itemId = event.pathParameters.itemId;
	return await databaseManager.getItem(itemId);
}

async function deleteItem(event: any) {
	const itemId = event.pathParameters.itemId;
	return await databaseManager.deleteItem(itemId)
}

async function updateItem(event: any) {
	const itemId = event.pathParameters.itemId;
	const body = JSON.parse(event.body);
	const paramName = body.paramName;
	const paramValue = body.paramValue;

	return await databaseManager.updateItem(itemId, paramName, paramValue);
}

function sendResponse(statusCode: any, message: any){
	return {
		statusCode: statusCode,
		body: JSON.stringify(message)
	}
}

module.exports = {
	dbManagerLambda,
	saveItem,
	getItem,
	deleteItem,
	updateItem,
	sendResponse
}