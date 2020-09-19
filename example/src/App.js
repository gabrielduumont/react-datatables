import React from 'react'

import { DataTable } from '@gabrielduumont/react-datatables'
import '@gabrielduumont/react-datatables/dist/index.css'

const headers = [
  {
    label: 'Name',
    key: 'Name',
    type: 'string',
  },
  {
    label: 'Position',
    key: 'Position',
    type: 'string',
  },
  {
    label: 'Office',
    key: 'Office',
    type: 'string',
  },
  {
    label: 'Age',
    key: 'Age',
    type: 'number',
  },
  {
    label: 'Start date',
    key: 'StartDate',
    type: 'date',
  },
  {
    label: 'Salary',
    key: 'Salary',
    type: 'number',
  },
];



const generateName = () => {
  var name1 = ["Daniel", "Antonio", "Francisco", "Ana", "Josephine", "Ada"];
  var name2 = ["Baggins", "Elves", "Shire", "York", "Munk", "Zonk"];
  var name = name1[Math.floor(Math.random() * 6)] + " " +name2[Math.floor(Math.random() * 6)];
  return name;

}

const generatePosition =  () => {
  const positionArray = ["Tokyo", "London", "San Francisco", "New York"];

  return positionArray[Math.floor(Math.random() * 4)];
}

const generateOffice =  () => {
  const positionArray = ["Software Engineer", "Integration Specialist", "Chief Executive Officer (CEO)", "Junior Technical Author"];

  return positionArray[Math.floor(Math.random() * 4)];
}
const generateDate =  () => {
  const day = Math.floor(Math.random() * 29) + 1;
  const month = Math.floor(Math.random() * 12) + 1;
  const year = Math.floor(Math.random() * 10) + 2000;
  return day + "/" + month + "/"+ year;
}

const generateData = () => {
  const dataArr = [];
  for (let i = 0; i < 125; ++i) {
    let obj = {
      Name: {
        value: generateName(),
      },
      Position: {
        value: generatePosition(),
      },
      Office: {
        value: generateOffice(),
      },
      Age: {
        value: Math.floor(Math.random() * 70) + 18,
      },
      StartDate: {
        value: generateDate(),
      },
      Salary: {
        value: Math.floor(Math.random() * 8000) + 1810.52,
      },
    };
    dataArr.push(obj);
  }
  return dataArr;
}
const data = generateData();

const App = () => {
  return (
    <div>
      <DataTable data={data} headers={headers} />
    </div>
  )
}

export default App
