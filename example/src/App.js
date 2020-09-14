import React from 'react'

import { DataTable } from '@gabrielduumont/react-datatables'
import '@gabrielduumont/react-datatables/dist/index.css'

const headers = [
  {
    label: 'Teste',
    key: 'test1',
  },
  {
    label: 'Teste2',
    key: 'test2',
  },
  {
    label: 'Teste3',
    key: 'test3',
  },
];
const data = [
  {
    test1: {
      value: 'Teste Value',
    },
    test2: {
      value: 1,
      parser: value => value === 1 ? "ues" : "nou"
    },
    test3: {
      value: 'Teste Value3',
    },
  },
  {
    test1: {
      value: 'ahaha',
    },
    test2: {
      value: 2,
      parser: value => value === 1 ? "ues" : "nou"
    },
    test3: {
      value: 'texst',
      parser: value => { return (<button>{value}</button>) }
    },
  },
  {
    test1: {
      value: 'ahaha',
    },
    test2: {
      value: 2,
      parser: value => value === 1 ? "ues" : "nou"
    },
    test3: {
      value: 'texst',
      parser: value => { return (<button>{value}</button>) }
    },
  },
  {
    test1: {
      value: 'ahaha',
    },
    test2: {
      value: 2,
      parser: value => value === 1 ? "ues" : "nou"
    },
    test3: {
      value: 'texst',
      parser: value => { return (<button>{value}</button>) }
    },
  },
  {
    test1: {
      value: 'ahaha',
    },
    test2: {
      value: 2,
      parser: value => value === 1 ? "ues" : "nou"
    },
    test3: {
      value: 'texst',
      parser: value => { return (<button>{value}</button>) }
    },
  },
  {
    test1: {
      value: 'ahaha',
    },
    test2: {
      value: 2,
      parser: value => value === 1 ? "ues" : "nou"
    },
    test3: {
      value: 'texst',
      parser: value => { return (<button>{value}</button>) }
    },
  },
];

const App = () => {
  return (
    <div>
      <DataTable data={data} headers={headers} />
    </div>
  )
}

export default App
