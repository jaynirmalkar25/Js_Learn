const accountId = 1212121
let accountEmail = "jai123@gmail.com"
var accountPassword= "123456"
let accountState; // undefined value

accountCity = "bengaluru"

// accountId = 2 // not allowed. we cant change the const  

accountEmail = "jai.nir@gmail.com"
accountPassword = "101010"
accountCity = "Jaipur"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

/* 
prefer not use var
because of issue in block scope or functional scope
*/


