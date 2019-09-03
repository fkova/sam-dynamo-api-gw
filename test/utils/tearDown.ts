'use strict';

import * as AWS from 'aws-sdk';
AWS.config.region = 'us-east-2';
let dynamo = new AWS.DynamoDB.DocumentClient();

async function removeDataFromTable(id: string) {

    return await dynamo.delete({
        TableName: 'myItems',
        Key: {
            item_id: id
        }
    }).promise();
};

module.exports = {
    removeDataFromTable
};
