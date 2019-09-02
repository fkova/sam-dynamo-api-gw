"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const item_handler_1 = __importDefault(require("./handlers/item-handler"));
const item_service_1 = require("./services/item-service");
const dynamoDbClient = new aws_sdk_1.DynamoDB.DocumentClient({ region: 'us-east-2' });
const itemService = new item_service_1.ItemService(dynamoDbClient);
exports.itemHandler = item_handler_1.default(itemService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBbUM7QUFDbkMsMkVBQXVFO0FBQ3ZFLDBEQUFzRDtBQUV0RCxNQUFNLGNBQWMsR0FBRyxJQUFJLGtCQUFRLENBQUMsY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFDMUUsTUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXZDLFFBQUEsV0FBVyxHQUFHLHNCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDIn0=