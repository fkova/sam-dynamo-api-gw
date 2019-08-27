'use strict';

module.exports.saveItem = (id) => {
    return Promise.resolve(id);
}

module.exports.getItem = (id) => {
    const item = {
        itemId: id,
        timestamp: Date.now()
    };
    return Promise.resolve(item);
}
