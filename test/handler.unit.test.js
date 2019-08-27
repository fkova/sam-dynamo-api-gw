'use strict';

var rewire = require('rewire');
var app = rewire('../dist/handler.js');

const sendResponse = app.__get__('sendResponse');
const saveItem = app.__get__('saveItem');

describe('sendResponse', () => {
    test('sendresponse should response with object', () => {
        expect(sendResponse(404,"error occured")).toEqual({statusCode: 404,body: "\"error occured\""});
    });
});

describe('saveItem', () => {
    test('with empty event', async () => {
       console.log(saveItem({}));
    });
});
/*
describe('GET', () => {
    test('sendresponse should response with object', () => {
        expect(sendResponse(404,"error occured")).toEqual({statusCode: 404,body: "\"error occured\""});
    });
});
*/