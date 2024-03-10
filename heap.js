


// const v8 = require('v8');
// const pid = 79577; // replace with your process id

// const heapStatistics = v8.getHeapStatistics();
// console.log(heapStatistics);
// if (process.pid === pid) {
// } else {
//   console.log('No process found with the provided PID');
// }

var heapdump = require('heapdump');

heapdump.writeSnapshot('/heapdump/' + Date.now() + '.heapsnapshot');