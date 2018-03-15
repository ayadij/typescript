"use strict";

// Start mowing -> Pending
// Complete mowing process -> Resolve
// Did not complete mowing process -> Reject
let performUpload = function(imgStatus : string) : Promise<{imgStatus : string}> {
  return new Promise((resolve) => {
    console.log(`Status: ${imgStatus}`);
    setTimeout(() => {
      resolve({ imgStatus: imgStatus });
    }, 1000);
  });
}

var upload;
var compress;
var transfer;

performUpload('uploading...')
.then((res) => {
  upload = res;
  return performUpload('compressing...');
})
.then((res) => {
  compress = res;
  return performUpload('transferring...');
})
.then((res) => {
  transfer = res;
  return performUpload('Image upload completed.');
});


/*

uploading and image to a server
force a number of processes to happen in a certain order

first function: performUpload 
anonuymous function
returns a promise
also pass in a key value pair in the promise
that will return a promise that contains a status when perform upload is called

inside promise, pass in what will happen when the item is successful- resolve argument
when succesful: console log status
use set timeout funcion and pass out another function
inside of fat arrow, pass resolve

resolve works like a function
return the image status as a key value pair





*/