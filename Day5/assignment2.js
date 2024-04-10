import { Queue } from "@datastructures-js/queue";
import { Stack } from "@datastructures-js/stack";

// a.  Create a node program to implement the following requirement using queue:
// 			--  program need to handle customer requests
// 			--  each request should contain customer name, customer id , contact number, request description, requet date and time
// 			--  use queue concept to add, remove, display the requests
let customerReq1 = {
  name: "ram",
  id: 1,
  contactNumber: "123456789",
  reqDesc: "description by ram",
  reqDate: "2019-03-08",
  time: "12-44-22",
};
let customerReq2 = {
  name: "raj",
  id: 2,
  contactNumber: "123546789",
  reqDesc: "description by raj",
  reqDate: "2020-05-08",
  time: "09-55-22",
};

const coustomerQueue = new Queue();

// add at end
coustomerQueue.enqueue(customerReq1);
coustomerQueue.enqueue(customerReq2);

// remove from start
coustomerQueue.dequeue();

// display
let customerArray = coustomerQueue.toArray();
customerArray.forEach((element) => {
  console.log(element);
});

// *************************************************

// b.    Create a node program to implement the following requirement using stack:

// 			---  program need to handle browser history details
// 			--  each entry should contain url, date and time,
// 			--  perform add, remove, display the request details

let browserHistoryDetail1 = {
  url: "www.google.com",
  reqDate: "2020-05-08",
  time: "09-55-22",
};
let browserHistoryDetail2 = {
  url: "www.facebook.com",
  reqDate: "2020-05-08",
  time: "09-55-22",
};

const HistoryStack = new Stack();

// add at top
HistoryStack.push(browserHistoryDetail1);
HistoryStack.push(browserHistoryDetail2);

// remove from top
HistoryStack.pop();

// display
let HistoryArray = HistoryStack.toArray();
HistoryArray.forEach((element) => {
  console.log(element);
});
