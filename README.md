# @gabrielduumont/react-datatables

> React component that will render data into a responsive HTML table

[![NPM](https://img.shields.io/npm/v/@gabrielduumont/react-datatables.svg)](https://www.npmjs.com/package/@gabrielduumont/react-datatables) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @gabrielduumont/react-datatables
```

## Usage

```jsx
import React from 'react'

import { DataTable } from '@gabrielduumont/react-datatables'
import '@gabrielduumont/react-datatables/dist/index.css'

import { data, headers, tableStyles } from './exampleData'

const App = () => {
  return (
    <div>
      <DataTable
        //required props
        data={data}
        headers={headers}
        
        //optional props
        tableStyles={tableStyles}
        lang='pt-br'
        initialPageSize={25}
        pageSizes={[25, 30]}
      />
    </div>
  )
}

export default App

```

## License

MIT © [gabrielduumont](https://github.com/gabrielduumont)
