// imports 
var prototype = require('./prototype.json')
const {
    initialize,
    getActualKeyFromAlises,
    getAlisesFromKey,
    convertObjectToAlises,
    convertObjectToKeys
} = require('./index')
initialize(prototype)
const testObject = {
    name: 'test object',
    id: 'test123',
    slug: 'test-object'
}
//declaring collections to be used
const collection = 'testCollection'
const Key = getActualKeyFromAlises(collection, 'i')
const Alises = getAlisesFromKey(collection, 'id')
const convertedObject = convertObjectToAlises(collection, testObject)
const convertedObjectToKeys = convertObjectToKeys(collection, convertedObject)
console.log("getActualKeyFromAlises => ", Key);
console.log("getAlisesFromKey => ", Alises);
console.log("convertObjectToAlises => ", convertedObject);
console.log("convertObjectToKeys => ", convertedObjectToKeys);