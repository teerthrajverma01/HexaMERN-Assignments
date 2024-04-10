// ************************************************************
// Assignment-3
// ~~~~~~~~~~~~
// 	--> Create a node program to process flight details using Map collections.

// 		a.  need to store the details :		flight numbers and corresponding details :   source, destination, date, time
// 		b.  take a variable that holds the flight number and  find the status of the flight.

// 		Eg:      input variable hold the flight number:  'AR456'
// 					Output :   The Flight AR456 is leaving at 18.00 from Hyderabad to Bangalore

// 					Hint :  If flight already left, display the corresponding message
// 								If invalid flight, display the corresponding message.

let flightDetails = new Map();
flightDetails.set("AR234", {
  source: "hyderabad",
  destination: "pune",
  date: "04-03-2019",
  time: "12.24.00",
});
flightDetails.set("VI154", {
  source: "mumbai",
  destination: "lucknow",
  date: "14-12-2023",
  time: "01.15.00",
});
flightDetails.set("TA294", {
  source: "darjeling",
  destination: "srinagar",
  date: "07-05-204",
  time: "04.30.00",
});
flightDetails.set("KF588", {
  source: "kolkata",
  destination: "goa",
  date: "23-10-2014",
  time: "05.45.00",
});

function statusOfFlight(flightNumber) {
  if (flightDetails.has(flightNumber)) {
    const flightDetail = flightDetails.get(flightNumber);
    const flightDateWithTime = new Date(
      `${flightDetail.date} ${flightDetail.time}`
    );
    if (flightDateWithTime <= new Date()) {
      console.log(`The Flight ${flightNumber} has already left.`);
    } else {
      console.log(
        `The Flight ${flightNumber} is leaving at ${flightDetail.time} from ${flightDetail.source} to ${flightDetail.destination}.`
      );
    }
  } else {
    console.log(`Invalid flightNumber: ${flightNumber}.`);
  }
}

const flightNumber = "AR232"; //valid
// const flightNumber = "AR22";//invalid

// function to find status of flight
statusOfFlight(flightNumber);
