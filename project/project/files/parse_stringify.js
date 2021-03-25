const { json } = require("express");

//גייסון נקודה פארס הופך לי סטרינג לגייסון
const objstring = `{"name": "oshra", "family": "cohen"}`
const pars_to_json = JSON.parse(objstring)
console.log(pars_to_json)

//סטרינגיפיי הופך לי גייסול לסטרינג
const objjson = { name: 'shifra', family: 'cohen' }
const objson={
    "name":"hodaya",
    "family":"cohen"
}
const pars_to_string1 = JSON.stringify(objjson)
const pars_to_string2 = JSON.stringify(objson)

console.log(pars_to_string1)
console.log(pars_to_string2)