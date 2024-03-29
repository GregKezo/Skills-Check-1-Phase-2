//+++++++++ Start Here! All problems are below. +++++++++//

///////////////////Problem 1//////////////////

//Create a promise and save it to a variable called 
//whereAreMyKeys. The promise should resolve after 1
//second (Hint: use setTimeout), with the value of "On the table!"

//Code here

var whereAreMyKeys = new Promise((resolve, reject) => {
    setTimeout(resolve("On the table!"), 1000)
}) 


///////////////////Problem 2//////////////////

//Within the function lostCityFinder, create a promise and save 
//it to a variable called findAtlantis. findAtlantis should check 
//the param lostCity (it will be an object). If the key 
//'location' has the value of 'under the sea', the 
//promise should resolve with the value of the key 'name'.
//If the value of 'location' is not 'under the sea', the promise should reject with the 
//reason "Can't find Atlantis!"

function lostCityFinder(lostCity){
    //CODE HERE
    let findAtlantis = new Promise((resolve, reject) => {
        lostCity.location === 'under the sea'
          ? resolve(lostCity.name)
          : reject("Can't find Atlantis!")
    })
    //DO NOT TOUCH THIS LINE
    return findAtlantis
}

///////////////////Problem 3//////////////////
//There is a promise called goodNight. Chain a .then 
//to the promise goodNight. The .then should assign the 
//resolved value to the variable night.

var night = ""

//CODE HERE
goodNight.then( resolveValueBecauseItsTrue => night = resolveValueBecauseItsTrue)


///////////////////Problem 4//////////////////
//There is a promise called goodDay. Chain a .then and a .catch
//to the promise goodDay. The .then should assign the resolved 
//value to the variable day; the .catch should assign the
//reason the Promise was rejected to the variable err.

var day = ""
var err = ""

//CODE HERE

goodDay.then(resolved => day = resolved)
    .catch(reject => err = reject)

