const CarStorage = require("../carStorage");
const jsondata = require("../datastorage.json");

describe("testing the constructor function", () => {
  test("missing data throws an exception", () => {
    expect(() => new CarStorage()).toThrow("data storage missing");
  });
});

describe('Testing get_All_cars_By_model', ()=>{

  test('return an array of cars with the given model', ()=>{
      const searchValue = 'GT';
      const cars = new CarStorage;
      const expectedResult = ["GT"];

      const result = get_All_cars_By_model(searchValue, cars);

      expect(result).toEqual(expectedResult);
  });

  test('return an empty array if no car of the given model is found', () => {
      const searchValue = 'Toyota';
  
      const result = get_All_cars_By_model(searchValue, cars);
      expect(result).toEqual([]);
    });

  test('throw an exception if searchValue is missing', () => {

    expect(() => {
        get_All_cars_By_model();
    }).toThrow('missing parameter');
    });
}); 