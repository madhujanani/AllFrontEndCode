// we can work on our features even if we depend on other people's work
// by using the mocks until other features are PR'd and Merged
// just import { whatYouNeed } from here, in the component you need it in

export const getTicketMockData = {
  "pnr": "BDE8A49",
  "firstName": "Alice",
  "lastName": "Leopold",
  "fromStation": "Los Angeles",
  "toStation": "San Diego",
  "trainNo": "SF123456",
  "bookedOn": "2024-02-02T16:28:01.713026",
  "travelDate": "2024-01-12",
  "lastUpdated": "2024-02-02T16:32:24.090516",
  "status": "confirmed",
  "fare": 84.0
};

export const postMockData = {
  "firstName": "Alice",
  "lastName": "Leopold",
  "fromStation": "Los Angeles",
  "toStation": "San Diego",
  "travelDate": "2024-01-12",
  "trainNo": "SF123456"
};

// axios mocks
  // implementation example
    // const ticket = await axiosGetTicketMock("BDE8A49");
    // console.log("Ticket info: ", ticket);

export const axiosGetTicketMock = async (pnr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pnr === "BDE8A49") {
        resolve(getTicketMockData);
      } else {
        reject(new Error("Error: please provide PNR: 'BDE8A49' for mock to work"));
      }
    }, 750);
  });
};

export const axiosPostTicketMock = (passenger) => {
  const expected = Object.keys(postMockData);
  const actual = Object.keyes(passenger);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (expected.every((key, i) => key === actual[i])) {
        const dummyData = { ...getTicketMockData };
        dummyData.successMessage = "Successful post!"
        resolve(dummyData);
      } else {
        reject(new Error("Error: your form inputs may be formatted incorrectly..."));
      }
    }, 750);
  });
};

export const axiosPutTicketMock = (ticket, pnr) => {
  console.log("PNR is: ", pnr);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const original = Object.keys(getTicketMockData);
      const updated = Object.keys(ticket);

      if (original.every((key, i) => key === updated[i])) {
        resolve({ ...ticket });
      } else {
        reject(new Error("Error: your form inputs may be formatted incorrectly..."));
      }
    }, 750);
  });
};

// TODO: implement some more mock data & mock APIs as needed
