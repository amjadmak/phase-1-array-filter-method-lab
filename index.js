const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const findMatching = (arr, name) => {
  return arr.filter(driver => driver.toLowerCase().includes(name.toLowerCase()))
}
const fuzzyMatch = (arr, name) => {
    return arr.filter(
        (result) =>
          result.toLowerCase().indexOf(name.toLowerCase()) === 0
      );
    }

const matchName= (arr, name) =>{ 
     return arr.filter((result) => result.name === name);
}   
