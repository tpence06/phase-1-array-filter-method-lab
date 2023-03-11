function findMatching(array, string) {
    return array.filter(function(el) {
        return el.toLowerCase().indexOf(string.toLowerCase())!== -1
    })
}

function fuzzyMatch(array, string){
    return array.filter(function(el) {
        return el.startsWith(string)
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  