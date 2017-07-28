var fs = require('fs');
var qcApi = require('qc').create();
//Timeout to connect to debugger
setTimeout(() => { debugger;
  console.log('\x1b[0m','debugging');


qcApi.login(JSON.parse(fs.readFileSync('conn_info.json')))
.then(
function(auth){

qcApi.post('/runs',{data: {  "type": "run",
                            "testcycl-id": 174322,
                            "cycle-id": 14202,
                            "test-id": 80043,
                            "subtype-id": "hp.qc.run.MANUAL",
                            "name": "Run_07-28_15-28-01",
                            "owner": "custodir",
                            "status": "No Run",
                             "comments": "Automated process"}} ).then(
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