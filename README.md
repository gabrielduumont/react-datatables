# @gabrielduumont/react-datatables

> React component that will render data into a responsive HTML table

[![NPM](https://img.shields.io/npm/v/@gabrielduumont/react-datatables.svg)](https://www.npmjs.com/package/@gabrielduumont/react-datatables) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This project is inspired in: https://datatables.net/

If you want to collaborate: https://github.com/gabrielduumont/react-datatables

Please report any bugs found.

## Example

https://gabrielduumont.github.io/react-datatables/

## Install

```bash
npm install --save @gabrielduumont/react-datatables
```
or

```bash
yarn add @gabrielduumont/react-datatables
```

You can view the example detailed in: 
https://github.com/gabrielduumont/react-datatables/tree/master/example

## Usage

**headers** and **data** are required props. Both are arrays.

```jsx

  <DataTable
    //required props
    data={data}
    headers={headers}
    
  />

```
### The *headers* array

The headers array is composed by objects which should respect this structure:

```json
{
    "label": "Some DateTime",
    "key": "SomeDateTime",
    "type": "datetime"
},
```
Where:
* label: is a string, which is the one that gets displayed in the column header 
* key: is a string, which should not countain any spaces or special characters, and must match the properties of the objects contained in the **data** array
* type: is a string, and represents the name of the data type contained in the column. This property is important for the ordering function, so fill it correctly to get good results. Possible values are: *string*, *number*, *date*, *time*, *datetime*

**IMPORTANT**: Dates (even inside the datetime string) must be in one of the formats below:
1. DD-MM-YYYY or DD.MM.YYYY or DD/MM/YYYY
2. YYYY-MM-DD or YYYY.MM.DD or YYYY/MM/DD

### The *data* array

The simple definition of an object

```json
[
   {
      otherProperties

      "SomeDateTime": {
          "value": "2008-1-8 08:00:00", //required prop

          /* 
          Optionally, you can override the value show with the use of a parser inside the object, as the example below. 
          Since parser is a function, it can also be another component. 
          
          The parser function takes one argument, which is *value*, and that argument represents the value above.
          The parser function must return something to be rendered.

          Example 1
          "parser": (value) => <p onClick={() => alert("hello")}>{value}</p>

          Example 2 - Imagine the value is a boolean true
          "parser": (value) => {
            if(!!value) return "Active";
            else return "Deactivated";
          }


          */
      },
      
      otherProperties
    },
]
```

### Optional props

**lang**

It can be a string or and object that matches the following structure:

```js
"en-us": {
    "search": {
      "label": "Search",
      "searchingFor": "Searching for: ",
      "placeHolder": "Search"
    },
    "paginationControl": {
      "label": "Page Size",
    },
    "pagination": {
      "next": "Next",
      "previous": "Previous",
      "totalLabel": (showing, total) => `Showing ${showing} of ${total} records`,
    }
  },
```

Currently implemented languages:
"pt-br", "en-us" (default)



**initialPageSize** and **pageSizes** (yes! must be used together)

- pageSizes: an array of numbers
- initialPageSize: A number that must be contained on *pageSizes*



**tableStyles**

You can find a reference to this object here:
https://github.com/gabrielduumont/react-datatables/blob/master/example/src/exampleData.js



**extraConfig**

Object that should have any of this properties:

- hideSearch: boolean to hide filters
- hidePaginationControl: boolean to hide page size control


### Simple Example

```jsx
import React from 'react'

import { DataTable } from '@gabrielduumont/react-datatables'
import '@gabrielduumont/react-datatables/dist/index.css'

import { data, headers, tableStyles } from './exampleData'

const extraConfig = {
  //hideSearch: true,
  //hidePaginationControl: true,
};

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
        extraConfig={extraConfig}
      />
    </div>
  )
}

export default App

```

## Roadmap

The idea is to implement most (or all if possible) of the features of the jquery datatables project.

- Basic features: ordering, filtering, pagination and responsivity -> done

To be developed features: 
- Filter by column
- Fixed Columns
- Fixed Header
- Col re-order
- Row re-order
- Selectable Rows  
- PDF Export
- Excel Export

## License

MIT © [gabrielduumont](https://github.com/gabrielduumont)
