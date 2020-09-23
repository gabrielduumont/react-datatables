import React from 'react';

import { DataTable } from '@gabrielduumont/react-datatables';
import '@gabrielduumont/react-datatables/dist/index.css';

import { data, headers, extraConfig, tableStyles } from './exampleData';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
