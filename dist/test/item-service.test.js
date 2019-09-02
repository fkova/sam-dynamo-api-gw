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
const item_service_1 = require("../src/services/item-service");
const aws_sdk_1 = require("aws-sdk");
const constants_1 = __importDefault(require("../src/constants"));
const tableName = constants_1.default['TABLE_NAME'];
const dc = new aws_sdk_1.DynamoDB.DocumentClient();
const mockDbPutMethod = jest.spyOn(dc, 'put');
const mockDbGetMethod = jest.spyOn(dc, 'get');
const mockDbUpdateMethod = jest.spyOn(dc, 'update');
const mockDbDeleteMethod = jest.spyOn(dc, 'delete');
const itemService = new item_service_1.ItemService(dc);
describe('Testing item service', () => {
    afterEach(() => {
        mockDbPutMethod.mockReset();
        mockDbGetMethod.mockReset();
        mockDbUpdateMethod.mockReset();
        mockDbDeleteMethod.mockReset();
    });
    it('should call put with correct params', () => __awaiter(void 0, void 0, void 0, function* () {
        const name = 'valami';
        mockDbPutMethod.mockReturnValue({
            promise() {
                return Promise.resolve({});
            }
        });
        yield itemService.createItem(name);
        expect(mockDbPutMethod).toHaveBeenCalledWith({
            TableName: tableName,
            Item: {
                item_name: name
            }
        });
    }));
    it('should call get with correct params and return mocked values', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '1';
        const name = 'anyItem';
        const returnValues = {
            item_id: id,
            item_name: name
        };
        mockDbGetMethod.mockReturnValue({
            promise() {
                return Promise.resolve({
                    Item: returnValues
                });
            }
        });
        let result = yield itemService.readItem(id);
        expect(result).toEqual(returnValues);
        expect(mockDbGetMethod).toHaveBeenCalledWith({
            TableName: tableName,
            Key: {
                item_id: id,
            }
        });
    }));
    it('should call update with correct params', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '1';
        const name = 'akarmi';
        mockDbUpdateMethod.mockReturnValue({
            promise() {
                return Promise.resolve({});
            }
        });
        yield itemService.updateItem(id, name);
        expect(mockDbUpdateMethod).toHaveBeenCalledWith({
            TableName: tableName,
            Key: {
                item_id: id
            },
            UpdateExpression: 'set item_name = :v',
            ExpressionAttributeValues: {
                ':v': name
            },
            ReturnValues: 'UPDATED_NEW'
        });
    }));
    it('should call delete with correct params', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '1';
        mockDbDeleteMethod.mockReturnValue({
            promise() {
                return Promise.resolve({});
            }
        });
        yield itemService.deleteItem(id);
        expect(mockDbDeleteMethod).toHaveBeenCalledWith({
            TableName: tableName,
            Key: {
                item_id: id,
            }
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zZXJ2aWNlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2l0ZW0tc2VydmljZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTJEO0FBQzNELHFDQUFtQztBQUNuQyxpRUFBeUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsbUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQyxNQUFNLEVBQUUsR0FBRyxJQUFJLGtCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDekMsTUFBTSxlQUFlLEdBQXFCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sZUFBZSxHQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRSxNQUFNLGtCQUFrQixHQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN0RSxNQUFNLGtCQUFrQixHQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN0RSxNQUFNLFdBQVcsR0FBRSxJQUFJLDBCQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFdkMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtJQUVsQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ1gsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVCLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QixrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFTLEVBQUU7UUFDakQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBRXRCLGVBQWUsQ0FBQyxl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