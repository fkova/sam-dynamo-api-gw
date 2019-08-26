'use strict';

var rewire = require('rewire');
var app = rewire('../handler.js');

const sendResponse = app.__get__('sendResponse');

describe('dbManagerLambda', () => {
    test('sendresponse should response with object', () => {
        expect(sendResponse(404,"error occured")).toEqual({statusCode: 404,body: "\"error occured\""});
    });
});

describe('dbManager', () => {
    test('not specified',  () => {
        //const greet = await greeter.sayHelloAndRecord('Marcia');
    });
});