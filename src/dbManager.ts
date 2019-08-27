
import AWS from 'aws-sdk';
AWS.config.region = 'us-east-2';

const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'myItems';

module.exports.saveItem = async (item: any) => {
	const params = {
		TableName: TABLE_NAME,
		Item: item
	};

	return dynamo
		.put(params)
		.promise()
		.then(() => {
			return item.itemId;
		}).catch(e => e);
};

module.exports.getItem = async (itemId: string) => {
	const params = {
		Key: {
			itemId: itemId
		},
		TableName: TABLE_NAME
	};
	
	return dynamo
		.get(params)
		.promise()
		.then(result => {
			return result.Item;
		});
};


module.exports.deleteItem = async (itemId: string) => {
	const params = {
		Key: {
			itemId: itemId
		},
		TableName: TABLE_NAME
	};

	return dynamo.delete(params).promise();
};

module.exports.updateItem = async (itemId: string, paramsName: any, paramsValue: any) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			itemId
		},
		ConditionExpression: 'attribute_exists(itemId)',
		UpdateExpression: 'set ' + paramsName + ' = :v',
		ExpressionAttributeValues: {
			':v': paramsValue
		},
		ReturnValues: 'ALL_NEW'
	};

	return dynamo
		.update(params)
		.promise()
		.then(response => {
			return response.Attributes;
		});
};