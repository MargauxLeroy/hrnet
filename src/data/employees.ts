import { Employee } from "../store/reducers/employeeManagement";

export const employees: Employee[] = [
  {
    firstName: "Liam",
    lastName: "Johnson",
    dateBirth: new Date("1980-05-23"),
    startDate: new Date("2021-01-15"),
    adress: {
      street: "123 Main St",
      city: "Los Angeles",
      state: {
        name: "California",
        abbreviation: "CA",
      },
      zipCode: 90001,
    },
    department: "Sales",
  },
  {
    firstName: "Olivia",
    lastName: "Brown",
    dateBirth: new Date("1985-02-12"),
    startDate: new Date("2020-09-01"),
    adress: {
      street: "456 Elm St",
      city: "San Francisco",
      state: {
        name: "California",
        abbreviation: "CA",
      },
      zipCode: 94103,
    },
    department: "Marketing",
  },
  {
    firstName: "Noah",
    lastName: "Garcia",
    dateBirth: new Date("1991-11-17"),
    startDate: new Date("2022-02-01"),
    adress: {
      street: "789 Oak St",
      city: "San Diego",
      state: {
        name: "California",
        abbreviation: "CA",
      },
      zipCode: 92101,
    },
    department: "Engineering",
  },
  {
    firstName: "Emma",
    lastName: "Martinez",
    dateBirth: new Date("1978-08-08"),
    startDate: new Date("2019-05-15"),
    adress: {
      street: "234 Cedar St",
      city: "Sacramento",
      state: {
        name: "California",
        abbreviation: "CA",
      },
      zipCode: 95814,
    },
    department: "Human Resources",
  },
  {
    firstName: "William",
    lastName: "Hernandez",
    dateBirth: new Date("1989-04-01"),
    startDate: new Date("2021-11-15"),
    adress: {
      street: "567 Pine St",
      city: "San Jose",
      state: {
        name: "California",
        abbreviation: "CA",
      },
      zipCode: 95110,
    },
    department: "Legal",
  },
  {
    firstName: "Ava",
    lastName: "Smith",
    dateBirth: new Date("1995-07-10"),
    startDate: new Date("2022-01-01"),
    adress: {
      street: "345 Maple St",
      city: "San Diego",
      state: {
        name: "California",
        abbreviation: "CA",
      },
      zipCode: 92109,
    },
    department: "Sales",
  },
  {
    firstName: "James",
    lastName: "Jones",
    dateBirth: new Date("1983-12-25"),
    startDate: new Date("2018-04-02"),
    adress: {
      street: "678 Walnut St",
      city: "Los Angeles",
      state: {
        name: "California",
        abbreviation: "CA",
      },
      zipCode: 90028,
    },
    department: "Marketing",
  },
  {
    firstName: "Samantha",
    lastName: "Cruz",
    dateBirth: new Date(1991, 7, 15),
    startDate: new Date(2020, 2, 5),
    adress: {
      street: "123 Main St",
      city: "Albany",
      state: { name: "New York", abbreviation: "NY" },
      zipCode: 12205,
    },
    department: "Marketing",
  },
  {
    firstName: "Benjamin",
    lastName: "Garcia",
    dateBirth: new Date(1989, 4, 20),
    startDate: new Date(2015, 8, 1),
    adress: {
      street: "456 Elm St",
      city: "Buffalo",
      state: { name: "New York", abbreviation: "NY" },
      zipCode: 14202,
    },
    department: "Engineering",
  },
  {
    firstName: "Julia",
    lastName: "Robinson",
    dateBirth: new Date(1985, 11, 3),
    startDate: new Date(2016, 6, 14),
    adress: {
      street: "789 Oak St",
      city: "Syracuse",
      state: { name: "New York", abbreviation: "NY" },
      zipCode: 13210,
    },
    department: "Sales",
  },
  {
    firstName: "Oscar",
    lastName: "Stewart",
    dateBirth: new Date(1992, 2, 12),
    startDate: new Date(2021, 1, 3),
    adress: {
      street: "1010 Maple Ave",
      city: "Rochester",
      state: { name: "New York", abbreviation: "NY" },
      zipCode: 14608,
    },
    department: "Legal",
  },
  {
    firstName: "Lila",
    lastName: "Rivera",
    dateBirth: new Date(1990, 9, 28),
    startDate: new Date(2018, 11, 10),
    adress: {
      street: "555 Pine St",
      city: "New York",
      state: { name: "New York", abbreviation: "NY" },
      zipCode: 10001,
    },
    department: "Human Resources",
  },
  {
    firstName: "Emily",
    lastName: "Williams",
    dateBirth: new Date("1988-07-13"),
    startDate: new Date("2017-08-21"),
    adress: {
      street: "245 Main St",
      city: "Columbus",
      state: {
        name: "Ohio",
        abbreviation: "OH",
      },
      zipCode: 43215,
    },
    department: "Engineering",
  },

  {
    firstName: "Daniel",
    lastName: "Cruz",
    dateBirth: new Date("1995-05-18"),
    startDate: new Date("2020-06-01"),
    adress: {
      street: "321 Elm St",
      city: "Cleveland",
      state: {
        name: "Ohio",
        abbreviation: "OH",
      },
      zipCode: 44114,
    },
    department: "Marketing",
  },

  {
    firstName: "Rachel",
    lastName: "Nguyen",
    dateBirth: new Date("1983-03-10"),
    startDate: new Date("2010-04-19"),
    adress: {
      street: "567 Park Ave",
      city: "Cincinnati",
      state: {
        name: "Ohio",
        abbreviation: "OH",
      },
      zipCode: 45202,
    },
    department: "Sales",
  },

  {
    firstName: "Adam",
    lastName: "Garcia",
    dateBirth: new Date("1991-12-05"),
    startDate: new Date("2018-02-12"),
    adress: {
      street: "7895 Vine St",
      city: "Toledo",
      state: {
        name: "Ohio",
        abbreviation: "OH",
      },
      zipCode: 43606,
    },
    department: "Human Resources",
  },

  {
    firstName: "Lauren",
    lastName: "Scott",
    dateBirth: new Date("1986-09-22"),
    startDate: new Date("2015-01-07"),
    adress: {
      street: "1000 Broad St",
      city: "Dayton",
      state: {
        name: "Ohio",
        abbreviation: "OH",
      },
      zipCode: 45402,
    },
    department: "Legal",
  },
  {
    firstName: "Lila",
    lastName: "Jackson",
    dateBirth: new Date("1992-06-15"),
    startDate: new Date("2020-01-15"),
    adress: {
      street: "1234 Main St",
      city: "Cheyenne",
      state: {
        name: "Wyoming",
        abbreviation: "WY",
      },
      zipCode: 82001,
    },
    department: "Sales",
  },
  {
    firstName: "Kendall",
    lastName: "Ross",
    dateBirth: new Date("1985-02-11"),
    startDate: new Date("2019-07-01"),
    adress: {
      street: "5678 Oak St",
      city: "Casper",
      state: {
        name: "Wyoming",
        abbreviation: "WY",
      },
      zipCode: 82601,
    },
    department: "Engineering",
  },
  {
    firstName: "Henry",
    lastName: "Flores",
    dateBirth: new Date("1990-09-05"),
    startDate: new Date("2021-01-04"),
    adress: {
      street: "9100 Pine St",
      city: "Laramie",
      state: {
        name: "Wyoming",
        abbreviation: "WY",
      },
      zipCode: 82070,
    },
    department: "Marketing",
  },
  {
    firstName: "Madison",
    lastName: "Baker",
    dateBirth: new Date("1987-11-30"),
    startDate: new Date("2015-09-14"),
    adress: {
      street: "1212 Elm St",
      city: "Gillette",
      state: {
        name: "Wyoming",
        abbreviation: "WY",
      },
      zipCode: 82716,
    },
    department: "Human Resources",
  },
  {
    firstName: "Derek",
    lastName: "Robinson",
    dateBirth: new Date("1982-08-19"),
    startDate: new Date("2017-03-06"),
    adress: {
      street: "1313 Maple St",
      city: "Rock Springs",
      state: {
        name: "Wyoming",
        abbreviation: "WY",
      },
      zipCode: 82901,
    },
    department: "Legal",
  },
  {
    firstName: "Alexandra",
    lastName: "Garcia",
    dateBirth: new Date("1994-04-02"),
    startDate: new Date("2022-01-03"),
    adress: {
      street: "1414 Cedar St",
      city: "Sheridan",
      state: {
        name: "Wyoming",
        abbreviation: "WY",
      },
      zipCode: 82801,
    },
    department: "Engineering",
  },
  {
    firstName: "Nicholas",
    lastName: "Nguyen",
    dateBirth: new Date("1991-01-18"),
    startDate: new Date("2018-06-15"),
    adress: {
      street: "1515 Birch St",
      city: "Rawlins",
      state: {
        name: "Wyoming",
        abbreviation: "WY",
      },
      zipCode: 82301,
    },
    department: "Sales",
  },
  {
    firstName: "John",
    lastName: "Doe",
    dateBirth: new Date("1985-05-12"),
    startDate: new Date("2021-01-01"),
    adress: {
      street: "123 Main St",
      city: "Birmingham",
      state: {
        name: "Alabama",
        abbreviation: "AL",
      },
      zipCode: 35242,
    },
    department: "Sales",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    dateBirth: new Date("1990-11-23"),
    startDate: new Date("2018-03-15"),
    adress: {
      street: "456 Elm St",
      city: "Montgomery",
      state: {
        name: "Alabama",
        abbreviation: "AL",
      },
      zipCode: 36117,
    },
    department: "Engineering",
  },
  {
    firstName: "David",
    lastName: "Lee",
    dateBirth: new Date("1982-09-01"),
    startDate: new Date("2020-07-01"),
    adress: {
      street: "789 Oak St",
      city: "Huntsville",
      state: {
        name: "Alabama",
        abbreviation: "AL",
      },
      zipCode: 36117,
    },
    department: "Marketing",
  },
  {
    firstName: "Maria",
    lastName: "Gonzalez",
    dateBirth: new Date("1995-02-18"),
    startDate: new Date("2017-05-01"),
    adress: {
      street: "1011 Pine St",
      city: "Mobile",
      state: {
        name: "Alabama",
        abbreviation: "AL",
      },
      zipCode: 36117,
    },
    department: "Human Resources",
  },
  {
    firstName: "Robert",
    lastName: "Taylor",
    dateBirth: new Date("1989-06-10"),
    startDate: new Date("2019-09-01"),
    adress: {
      street: "1213 Maple St",
      city: "Tuscaloosa",
      state: {
        name: "Alabama",
        abbreviation: "AL",
      },
      zipCode: 36117,
    },
    department: "Legal",
  },
  {
    firstName: "Jennifer",
    lastName: "Garcia",
    dateBirth: new Date("1986-03-12"),
    startDate: new Date("2020-02-01"),
    adress: {
      street: "456 Oak Ave",
      city: "Austin",
      state: {
        name: "Texas",
        abbreviation: "TX",
      },
      zipCode: 78701,
    },
    department: "Marketing",
  },

  {
    firstName: "Mark",
    lastName: "Johnson",
    dateBirth: new Date("1992-08-22"),
    startDate: new Date("2019-05-01"),
    adress: {
      street: "789 Main St",
      city: "Houston",
      state: {
        name: "Texas",
        abbreviation: "TX",
      },
      zipCode: 77002,
    },
    department: "Engineering",
  },

  {
    firstName: "Luis",
    lastName: "Ramirez",
    dateBirth: new Date("1985-12-10"),
    startDate: new Date("2017-09-01"),
    adress: {
      street: "123 Elm St",
      city: "San Antonio",
      state: {
        name: "Texas",
        abbreviation: "TX",
      },
      zipCode: 78205,
    },
    department: "Sales",
  },

  {
    firstName: "Nancy",
    lastName: "Lopez",
    dateBirth: new Date("1983-05-30"),
    startDate: new Date("2018-01-01"),
    adress: {
      street: "456 Pine St",
      city: "Dallas",
      state: {
        name: "Texas",
        abbreviation: "TX",
      },
      zipCode: 75201,
    },
    department: "Human Resources",
  },

  {
    firstName: "John",
    lastName: "Lee",
    dateBirth: new Date("1989-09-01"),
    startDate: new Date("2022-01-01"),
    adress: {
      street: "789 Maple St",
      city: "Fort Worth",
      state: {
        name: "Texas",
        abbreviation: "TX",
      },
      zipCode: 76102,
    },
    department: "Legal",
  },
];
