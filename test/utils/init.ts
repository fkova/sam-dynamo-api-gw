'use strict';

import * as AWS from 'aws-sdk';
AWS.config.region = 'us-east-2';

//AWS.config.endpoint = 'http://localhost:8000';

function init(){
    process.env.MY_DYNAMODB_TABLE = 'myItems';
    process.env.BASE_URL = 'https://0o3g6rk56i.execute-api.us-east-2.amazonaws.com/Prod/items';
};

module.exports = init;