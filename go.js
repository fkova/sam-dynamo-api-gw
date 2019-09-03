//const ItemService =require('./dist/src/services/item-service').ItemService;
//const AWS = require('aws-sdk');
//const dynamoDbClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
const tearDown = require('./test/utils/tearDown');

/*
(new ItemService(dynamoDbClient)).createItem("sajt").then(
    (res) => {
        console.log({...res,statusCode: 200});
    }
);
*/

tearDown.removeDataFromTable('123');