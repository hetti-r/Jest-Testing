const CarStorage = require("../carStorage");
const jsondata = require("../datastorage.json");

describe("testing the constructor function", () => {
  test("missing data throws an exception", () => {
    expect(() => new CarStorage()).toThrow("data storage missing");
  });
});

describe('Testing get_All_cars_By_model', () => {

  test('return an array of cars with the given model', () => {
    const searchValue = 'GT';
    const cars = new CarStorage(jsondata); 
    const expectedResult = [
      {
        "ID": 1,
        "model": "GT",
        "price": 200,
        "rating": "*",
        "colors": [
          "black",
          "green",
          "red"
        ],
        "extras": {
          "comments": "old model",
          "powerSource": "electricity",
          "consumptionPer100km": 5
        }
      },
      {
        "ID": 3,
        "model": "GT",
        "price": 123,
        "rating": "*",
        "colors": [
          "black",
          "blue",
          "orange"
        ],
        "extras": {
          "comments": "low emission",
          "powerSource": "pushing",
          "consumptionPer100km": 2
        }
      }
    ]; 

    const result = cars.get_All_cars_By_model(searchValue); 

    expect(result).toEqual(expectedResult);
  });

  test('return an empty array if no car of the given model is found', () => {
    const searchValue = 'Toyota';
    const cars = new CarStorage(jsondata); 

    const result = cars.get_All_cars_By_model(searchValue);
    expect(result).toEqual([]);
  });

  test('throw an exception if searchValue is missing', () => {
    const cars = new CarStorage(jsondata);

    expect(() => {
      cars.get_All_cars_By_model();
    }).toThrow('missing parameter');
  });
});
