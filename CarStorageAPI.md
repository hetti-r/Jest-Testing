# CarStorage API

## Constructor

### **constructor(jsondata)**
Initializes CarStorage object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`


## Methods


### **get_All_cars_By_model(searchValue)**
searches cars with given model

>Parameters:
>>searchValue is the model of the car to be searched

>Returns:
>>Returns an array of car objects of given model. If no car of given model is found, returns an empty array.

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_a_car_matching_ID(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key ID of the car

>Returns:
>>returns the car object matching the ID or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`

### **get_rating_of_car_by_name(searchKey)**
returns the rating of the car matching the name

>Parameters:
>>searchKey is the name of the car

>Returns:
>>returns the rating of car matching the searchKey name or null if no match is found

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_car_colors(searchKey)**
Returns an array of car colors. If none found, returns an empty array.

>Parameters:
>>searchKey is the ID of the car

>Returns:
>>colors of the car as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

>Throws:
>>

### **get_total_price_of_cars_by_model(searchValue)**
returns the total price of all cars that have the same model than the given searchValue

>Parameters:
>>searchValue is the model of the car to be searched

>Returns:
>>total cumulative price of cars matching the searchValue

>Throws:
>>if no car with the given searchValue is  found throws an exeption `'nothing found with given searchValue'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown
