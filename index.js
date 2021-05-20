const prototype = require('./prototype.json')

function getActualKeyFromAlises(collectionToBeSearched, alises) {
    const collection = prototype[collectionToBeSearched]
    for (let document of Object.entries(collection)) {
        if (document[1] == alises) return document[0]
    }
}

function getAlisesFromKey(collectionToBeSearched, key) {
    const collection = prototype[collectionToBeSearched]
    for (let document of Object.entries(collection)) {
        if (document[0] == key) return document[1]
    }
}

function convertObjectToAlises(collection, object) {
    collection = prototype[collection]
    var temporayObject = {}
    for (var key in object) {
        for (let document of Object.entries(collection)) {
            if (document[0] == key) {
                temporayObject[document[1]] = object[key]
                break;
            }
        }
    }
    return temporayObject
}

function convertObjectToKeys(collection, object) {
    collection = prototype[collection]
    var temporayObject = {}
    for (var key in object) {
        for (let document of Object.entries(collection)) {
            if (document[1] == key) {
                temporayObject[document[0]] = object[key]
                break;
            }
        }
    }
    return temporayObject
}
module.exports.getActualKeyFromAlises = getActualKeyFromAlises
module.exports.getAlisesFromKey = getAlisesFromKey
module.exports.convertObjectToAlises = convertObjectToAlises
module.exports.convertObjectToKeys = convertObjectToKeys