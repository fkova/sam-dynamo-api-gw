'use strict';

const AWS = require('aws-sdk');
AWS.config.region = 'us-east-2';
let dynamo = new AWS.DynamoDB.DocumentClient();

function removeDataFromTable(id) {
    const params = {
        Key: {
            itemId: id
        },
        TableName: process.env.MY_DYNAMODB_TABLE
    };

    return dynamo
        .delete(params)
        .promise();
};

module.exports = {
    removeDataFromTable
};
