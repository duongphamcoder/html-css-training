export default class ObjectEx {
  constructor() {}

  // list the properties of a JavaScript object
  toString(object) {
    console.log(object);
  }

  // delete key from a JavaScript object
  deteleKey(object, key) {
    delete object[key];
    this.toString(object);
  }

  // get the length of a JavaScript object
  getLength(object) {
    return Object.keys(object).length;
  }
}
