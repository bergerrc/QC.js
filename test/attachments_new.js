var fs = require('fs');
var qcApi = require('qc').create();
//Timeout to connect to debugger
setTimeout(() => { debugger;
  console.log('\x1b[0m','debugging');


qcApi.login(JSON.parse(fs.readFileSync('conn_info.json')))
.then(
function(auth){


qcApi.get('/runs/161431/run-steps/2987670').then(
function(runStep) { 
    console.log( "RunStep:" + runStep.id);
    var attachment = { data: fs.readFileSync('example_data.txt','utf8'), name: "example_data.txt" };
    console.log( attachment.name );
    qcApi.attach(runStep, { data: attachment.data,
                            filename: attachment.name} ).then(
    function(attached) { 
    console.log("[OK] " + JSON.stringify(attached)); 
    },
    function(err) { 
    console.log("[ERROR] " + JSON.stringify(err)); 
    });
    
    },function(err) { 
    console.log("[ERROR] " + JSON.stringify(err)); 
    });

},
function(err) { 
console.log("[ERROR] " + JSON.stringify(err)); 
});



}, 10000); //end debuging