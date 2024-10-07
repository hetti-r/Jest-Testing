"use strict";

module.exports = class CarStorage {
  #storage;
  constructor(data) {
    if (!data) {
      throw new Error("data storage missing");
    }
    this.#storage = data;
  }
  
  get_All_cars_By_model(searchValue) {
    if (!searchValue) {
      throw new Error('missing parameter');
    }
    const carsByModel = this.data.filter(car => car.model === searchValue);
    return carsByModel;
  }

}; 
