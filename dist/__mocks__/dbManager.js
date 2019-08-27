'use strict';

module.exports = {
    saveItem: (id) => {
        return Promise.resolve(id);
    },
    getItem: (id) => {
        const item = {
            itemId: id,
            timestamp: Date.now()
        };
        return Promise.resolve(item);
    },
    updateItem: (id, key, value) => {
        return Promise.resolve(JSON.parse('{"itemId": "' + id + '", "' + key + '": "'+ value +'"}'));
    },
    deleteItem: id => {
        return Promise.resolve({});
    }
}

