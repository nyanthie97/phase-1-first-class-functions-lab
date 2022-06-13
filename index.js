// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    let newArr = [];
    for (let i = 0; i < 2; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  function returnLastTwoDrivers(arr) {
    let newArr = [];
    for (let i = arr.length - 2; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(fare) {
    return () => {
      return fare * fare;
    }
  }
  
  function fareDoubler(fare) {
    return fare * 2;
  }
  
  function fareTripler(fare) {
    return fare * 3;
  }
  
  function selectDifferentDrivers(arrayOfDrivers, f) {
    return f(arrayOfDrivers);
  }