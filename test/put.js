var fs = require('fs');
var qcApi = require('qc').create();
//Timeout to connect to debugger
setTimeout(() => { debugger;
  console.log('\x1b[0m','debugging');


qcApi.login(JSON.parse(fs.readFileSync('conn_info.json')))
.then(
function(auth){

qcApi.put('/runs/164074',{data: {  "Type": "run",
                            "id": 164074,
                            "status": "Passed"}} ).then(
function(added) { 
console.log("[OK] " + JSON.stringify(added)); 
},
function(err) { 
console.log("[ERROR] " + JSON.stringify(err)); 
});

},function(err) { 
console.log("[ERROR] " + JSON.stringify(err)); 
});

}, 10000); //end debuging