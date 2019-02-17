// 1
function findTypes() {
  let arrayArg = [];

  for (let i = 0; i < arguments.length; i++) {
    arrayArg[i] = typeof arguments[i];
  }

  return arrayArg;
}
findTypes(7, null, 'hello world');

// 2
function executeforEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}
executeforEach([1,2,3], function(el) {
  console.log(el);
});

// 3
function mapArray(array, func) {
  let mappedArr = [];

  executeforEach(array, function(el) {
    mappedArr.push(func(el));
  });

  return mappedArr;
}
mapArray ([2, 5, 8], function(el) {
  return el + 3;
});

// 4
function filterArray(array, func) {
  let filteredArr = [];

  executeforEach(array, function(el) {
    if (func(el)) {
      filteredArr.push(el);
    }
  });

  return filteredArr;
}
filterArray([2, 5, 8], function(el) {
  return el > 3;
});

let data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]

// 5
function getAmountOfAdultPeople(array) {
  let adults = [];

  filterArray(array, function(el) {
    if (el.age > 18) {
      adults.push(el);
    }
  })

  return adults.length;
}
getAmountOfAdultPeople(data);

// 6
function getGreenAdultBananaLovers(array) {
  let filteredAdults = [];

  filterArray(array, function(el) {
    if (el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green' ) {
      filteredAdults.push(el);
    }
  });

  return mapArray(filteredAdults, function(el) {
    return el.name;
  });
}
getGreenAdultBananaLovers(data);

// 7
function keys(object) {
  let keysArray = [];

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keysArray.push(key);
    }
  }

  return keysArray;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

// 8
function values(object) {
  let valuesArray = [];

  for (let value in object) {
    if (object.hasOwnProperty(value)) {
      valuesArray.push(object[value]);
    }
  }

  return valuesArray;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

// 9
function showFormattedDate(date) {
  let day = date.getDate();
  let month = date.toLocaleString('en-US', {month: 'short'});
  let year = date.getFullYear();

  return 'Date: ' + day + ' of ' + month + ', ' + year;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

// 10
function isEvenYear(date) {
  let year = date.getFullYear();
  return !(year % 2);
}
isEvenYear(new Date('2019-01-27T01:10:00'));

// 11
function isEvenMonth(date) {
  let month = date.getMonth() + 1;
  return !(month % 2);
}
isEvenMonth(new Date('2019-02-27T01:10:00'));
