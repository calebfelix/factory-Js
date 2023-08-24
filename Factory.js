const typeChecker = (checkArray) => {
  for (let index = 0; index < checkArray.length; index++) {
    if (typeof checkArray[index] !== "number") {
      return false;
    }
  }
  return true;
};

const addition = (...inputList) => {
  if (typeChecker(inputList)) {
    sum = 0;
    for (let index = 0; index < inputList.length; index++) {
      sum = sum + inputList[index];
    }
    return ["success", sum];
  } else {
    return ["error", NaN];
  }
};

const multiplication = (...inputList) => {
  if (typeChecker(inputList)) {
    product = 1;
    for (let index = 0; index < inputList.length; index++) {
      product = product * inputList[index];
    }
    return ["success", product];
  } else {
    return ["error", NaN];
  }
};

const subtraction = (...inputList) => {
  if (typeChecker(inputList)) {
    difference = inputList[0];
    for (let index = 1; index < inputList.length; index++) {
      difference -= inputList[index];
    }
    return ["success", difference];
  } else {
    return ["error", NaN];
  }
};

const division = (...inputList) => {
  divisionResult = inputList[0]
  if (typeChecker(inputList)) {
    for (let index = 1; index < inputList.length; index++) {
      divisionResult /= inputList[index];
    }
    return ["success", divisionResult];
  } else {
    return ["error", NaN];
  }
};

const floorConvert = (...inputList) => {
  if (typeChecker(inputList)) {
    floorList = []
    for (let index = 0; index < inputList.length; index++) {
      floorList.push(Math.floor(inputList[index]))
    }
    return ["success", floorList];
  } else {
    return ["error", NaN];
  }
};

const ceilConvert = (...inputList) => {
  if (typeChecker(inputList)) {
    ceilList = []
    for (index = 0; index < inputList.length; index++) {
      ceilList.push(Math.ceil(inputList[index]))
    }
    return ["success", ceilList];
  } else {
    return ["error", NaN];
  }
};

const factory = (key)=>{
  switch (key) {
    case "addition":
      return addition
    case "subtraction":
      return subtraction
    case "multiplication":
      return multiplication
    case "division":
      return division
      case "floorConvert":
        return floorConvert
      case "ceilConvert":
        return ceilConvert
    default:
      return (() => {
        return "invalid input"
     })();
  }
}

////////////////////////////// Driver Code //////////////////////////////

console.log(addition(1, 2, "3", 4));
console.log(subtraction(4, 3, 2, 1));
console.log(multiplication(1, 3, 2, 5));
console.log(division(1, 3, 2, 5));
console.log(floorConvert(2.9,2.5,10.0));
console.log(ceilConvert(2.9,2.5,8.9,10.0));

console.log(factory("addition"))
console.log(factory("subtraction"))
console.log(factory("d"))
factory("multiplication")
factory("division")
factory("floorConvert")
factory("ceilConvert")