"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const tableName = constants_1.default['TABLE_NAME'];
const uuid_1 = require("uuid");
class ItemService {
    constructor(dynamoDbClient) {
        this.dynamoDbClient = dynamoDbClient;
    }
    ;
    createItem(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                TableName: tableName,
                Item: {
                    item_id: uuid_1.v1(),
                    item_name: name
                }
            };
            return yield this.dynamoDbClient.put(params).promise();
        });
    }
    readItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                TableName: tableName,
                Key: {
                    item_id: id
                }
            };
            return (yield this.dynamoDbClient.get(params).promise()).Item;
        });
    }
    updateItem(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                TableName: tableName,
                Key: {
                    item_id: id
                },
                UpdateExpression: 'set item_name = :v',
                ExpressionAttributeValues: {
                    ':v': name
                },
                ReturnValues: 'UPDATED_NEW'
            };
            return yield this.dynamoDbClient.update(params).promise();
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                TableName: tableName,
                Key: {
                    item_id: id
                }
            };
            return yield this.dynamoDbClient.delete(params).promise();
        });
    }
}
exports.ItemService = ItemService;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2VzL2l0ZW0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDZEQUFxQztBQUNyQyxNQUFNLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFDLCtCQUFrQztBQVNsQyxNQUFhLFdBQVc7SUFDcEIsWUFBcUIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUFBLENBQUM7SUFFbEQsVUFBVSxDQUFHLElBQVk7O1lBQzNCLElBQUksTUFBTSxHQUFHO2dCQUNULFNBQVMsRUFBRSxTQUFTO2dCQUNwQixJQUFJLEVBQUU7b0JBQ0YsT0FBTyxFQUFFLFNBQUksRUFBRTtvQkFDZixTQUFTLEVBQUUsSUFBSTtpQkFDbEI7YUFDSixDQUFDO1lBRUYsT0FBTyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzFELENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBRSxFQUFVOztZQUN0QixJQUFJLE1BQU0sR0FBRztnQkFDVCxTQUFTLEVBQUUsU0FBUztnQkFDcEIsR0FBRyxFQUFFO29CQUNELE9BQU8sRUFBRSxFQUFFO2lCQUNkO2FBQ0osQ0FBQztZQUVGLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFBO1FBQ2pFLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBRSxFQUFVLEVBQUUsSUFBWTs7WUFDdEMsSUFBSSxNQUFNLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLEdBQUcsRUFBRTtvQkFDRCxPQUFPLEVBQUUsRUFBRTtpQkFDZDtnQkFDRCxnQkFBZ0IsRUFBRSxvQkFBb0I7Z0JBQ3RDLHlCQUF5QixFQUFFO29CQUN2QixJQUFJLEVBQUUsSUFBSTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsYUFBYTthQUM5QixDQUFDO1lBRUYsT0FBTyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzdELENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBRSxFQUFVOztZQUN4QixJQUFJLE1BQU0sR0FBRztnQkFDVCxTQUFTLEVBQUUsU0FBUztnQkFDcEIsR0FBRyxFQUFFO29CQUNELE9BQU8sRUFBRSxFQUFFO2lCQUNkO2FBQ0osQ0FBQztZQUVGLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM3RCxDQUFDO0tBQUE7Q0FDSjtBQXBERCxrQ0FvREM7QUFBQSxDQUFDIn0=