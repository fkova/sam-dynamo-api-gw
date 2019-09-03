import { isNullOrUndefined } from "util";

const init = require('./utils/init');
const tearDown = require('./utils/tearDown');
const axios = require('axios');

describe('Test request/response API > Lambda > API', () => {  
    var my_item_id : string; 

    beforeAll(() => {
        init();
    });

    test('With valid POST', async () => {
        const response = await axios.post(process.env.BASE_URL,
                {
                    item_name: "valami"
                }
            );
        expect(response.status).toBe(200);
        expect(response.data.item_id).not.toBe(isNullOrUndefined);
        expect(response.data.item_name).toBe("valami");

        my_item_id = response.data.item_id;
    });

    
    test('With valid GET', async () => {
        const response = await axios.get(process.env.BASE_URL + '/'+ my_item_id);
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({ 
            item_id: my_item_id, 
            item_name: "valami"
        });
    });


    test('With valid PUT', async () => {
        const response = await axios.put(process.env.BASE_URL + '/'+my_item_id,
            {
                item_name: "new_name"
            }
        );
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({ 
            message: "OK",
            status: 200
        });
    });
    
    test('With valid DELETE', async () => {
        const response = await axios.delete(process.env.BASE_URL + '/'+my_item_id);
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({});
    });
    
    afterAll(async () => {
        await tearDown.removeDataFromTable(my_item_id);
    })
});

describe('When we invoke the LAMBDA', () => {  
    /*
    beforeAll(() => {
        init();
    });

    test('With POST', async () => {
        const response = await axios.post(process.env.BASE_URL,
                {
                    itemId: "123",
                    item_name: "valami"
                }
            );
        expect(response.status).toBe(200);
        expect(response.data).toBe('123');
    });

    
    test('With GET', async () => {
        const response = await axios.get(process.env.BASE_URL + '/123');
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({ 
            itemId: "123", 
            item_name: "valami"
        });
    });

    test('With PUT', async () => {
        const response = await axios.put(process.env.BASE_URL + '/123',
            {
                paramName: "item_name",
                paramValue: "más_valami"
            }
        );
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({ 
            itemId: "123", 
            item_name: "más_valami"
        });
    });
    
    test('With DELETE', async () => {
        const response = await axios.delete(process.env.BASE_URL + '/123');
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({});
    });

    afterAll(async () => {
        await tearDown.removeDataFromTable('123');
    })
    */
});