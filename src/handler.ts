//export interface Event { name: string;}

import { v1 as uuid } from 'uuid';
const databaseManager = require('./dbManager');

export const dbManagerLambda = async (event: any = {}): Promise<any> => {

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

async function saveItem(event: any) {
	var item;

	try{
		item = JSON.parse(event.body);
	}catch(e){
		item = event.body;
	}
	
	item.itemId = uuid();

	return await databaseManager.saveItem(item);
}

async function getItem(event: any) {
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