'use strict';

const databaseManager = require('./dbManager');
const uuidv1 = require('uuid/v1');

exports.dbManagerLambda = async event => {
	//console.log(event);

	switch (event.httpMethod) {
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

async function saveItem(event) {
	
	var item;

	try{
		item = JSON.parse(event.body);
	}catch(e){
		item = event.body;
	}
	
	item.itemId = uuidv1();

	return await databaseManager.saveItem(item);
}

async function getItem(event) {
	const itemId = event.pathParameters.itemId;
	
	return await databaseManager.getItem(itemId);
}

async function deleteItem(event) {
	const itemId = event.pathParameters.itemId;

	return await databaseManager.deleteItem(itemId)
}

async function updateItem(event) {
	const itemId = event.pathParameters.itemId;

	const body = JSON.parse(event.body);
	const paramName = body.paramName;
	const paramValue = body.paramValue;

	return await databaseManager.updateItem(itemId, paramName, paramValue);
}

function sendResponse(statusCode, message){
	return {
		statusCode: statusCode,
		body: JSON.stringify(message)
	}
}