var octo = require('@octopusdeploy/octopackjs');

octo.pack('targz', { version: process.argv[process.argv.length - 1]})    
  .append('./package.json')
  .append('./server/**')
  .append('./public/**')
  .append('./lib/**')
  .append('./client/**')  
  .toFile('./bin/', function (err, data) {
    console.log("Package Saved: "+ data.name);
  });

