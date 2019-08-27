'use strict';

const AWS = require('aws-sdk');
AWS.config.region = 'us-east-2';

//AWS.config.endpoint = 'http://localhost:8000';

function init(){
    process.env.MY_DYNAMODB_TABLE = 'myItems';
    process.env.BASE_URL = 'https://d0lu1b0q4d.execute-api.us-east-2.amazonaws.com/Prod/api';
};

module.exports = init;