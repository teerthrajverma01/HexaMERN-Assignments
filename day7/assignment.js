import axios from "axios";
// 1.   Create a node program  to implement the following requirement:
// 		 a. Create a promise that will generate a random number between 1 to 50
// 		 b. If the number is 5 multiple,  resolve the send that number
// 		 c. Else, reject with error message.
// 		 d.Consume the promise object
// 		 e. run the application multiple times to observer the success/error message.

const mypromise = new Promise((resolve, reject) => {
  let randomNum = Math.floor(Math.random() * 50) + 1;
  if (randomNum % 5 == 0) {
    resolve(randomNum);
  } else {
    reject(`Number ${randomNum} not multiple of 5`);
  }
});

let response = mypromise
  .then(
    (data) => {
      console.log("INSIDE PROMISE RESOLVED CALLBACK");
      console.log(`Promise resolved and number is :${data}`);
    },
    (error) => {
      console.log("INSIDE PROMISE REJECTED CALLBACK");
      console.log("ERROR THROWN");
      throw new Error(error);
    }
  )
  .catch((error) => {
    console.log("INSIDE CATCH BLOCK : ", error);
  });

//   2.  Create a node program  to display users data.
// 		url :  https://reqres.in/api/users/

const secondprogram = () => {
  let url = "https://reqres.in/api/users/";
  let promiseobj = axios.get(url);

  promiseobj
    .then((dataobj) => {
      console.log(dataobj.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
secondprogram();

// 3.   Update the previous example using Async and Await.

let url = "https://reres.in/api/users/";
const thirdprogram = async () => {
  try {
    let promiseobj = await axios.get(url);
    console.log(promiseobj.data.data);
  } catch (error) {
    console.log("error generated :", error);
  }
};
thirdprogram();

// 4.   Create a function  called getCustomerByCountry() that takes the country name as parameter and should return customers data based on the given country.

// 		a.  Url :   https://www.w3schools.com/angular/customers.php
// 		b.  use async and await if required.

const getCustomerByCountry = async (inpCountry) => {
  let url = "https://www.w3schools.com/angular/customers.php";
  let promiseobj = await axios.get(url);
  let allCustomerData = promiseobj.data.records;
  let customerByCountry = allCustomerData.filter(
    (record) => record.Country == inpCountry
  );
  return customerByCountry;
};

let country = "Mexico";
let res = getCustomerByCountry(country).then((data) => {
  console.log(data);
});
