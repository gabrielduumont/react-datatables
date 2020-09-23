import React from 'react';

export const extraConfig = {
  //hideSearch: true,
  //hidePaginationControl: true,
};

export const tableStyles = {
    table: {
        //color: 'red',
    },
    header: {
        thead: {
            //color: 'red',
        },
        tr: {
            //color: 'red',
        },
        th: {
            //color: 'red',
        },
    },
    content: {
        tbody: {
            //color: 'red',
        },
        tr: {
            //color: 'red',
        },
        td: {
            //color: 'red',
        },
        details: {
            tr: {
                //color: 'red',
            },
            td: {
                //color: 'red',
            },
        }
    },
    search: {
        wrapper: {
            //backgroundColor: 'red',
        },
        label: {
            //color: 'red',
        },
        input: {
            //color: 'red',
        },
        searchingForLabel: {
            //color: 'red',
        }
    },
    paginationButtons: {
        wrapper: {
            //backgroundColor: 'red',
        },
        buttonsWrapper: {
            //backgroundColor: 'red',
        },
        previous: {
            //color: 'red',
        },
        next: {
            //color: 'red',
        },
        page: {
            //color: 'red',
        },
        activePage: {
            //color: 'red',
        },
        total: {
            //color: 'red',
        }
    },
    paginationControl: {
        wrapper: {
            //backgroundColor: 'red',
        },
        label: {
            //color: 'red',
        },
        input: {
            select: {
                //color: 'red',
            },
            options: {
                //color: 'red',
            }
        }
    },
};

export const headers = [
    {
        "label": "Name",
        "key": "Name",
        "type": "string"
    },
    {
        "label": "Position",
        "key": "Position",
        "type": "string"
    }
    ,
    {
        "label": "Office",
        "key": "Office",
        "type": "string"
    },
    {
        "label": "Start Time",
        "key": "StartTime",
        "type": "time"
    },
    {
        "label": "Some DateTime",
        "key": "SomeDateTime",
        "type": "datetime"
    },
    {
        "label": "Age",
        "key": "Age",
        "type": "number"
    },
    {
        "label": "Start date",
        "key": "StartDate",
        "type": "date"
    },
    {
        "label": "Salary",
        "key": "Salary",
        "type": "number"
    }
];

export const data = [
    {
        "Name": {
            "value": "Ana Baggins",
        "parser": (value) => <p onClick={() => alert("hello")}>I'm being rendered by a react component. My value is {value} and datatables won't be able to filter or order me. Also, you can click me.</p>
        },
        "Office": {
            "value": "San Francisco"
        },
        "Position": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 75,
        },
        "SomeDateTime": {
            "value": "2008-1-8 08:00:00"
        },
        "StartDate": {
            "value": "11/1/2008"
        },
        "StartTime": {
            "value": "08:00:00"
        },
        "Salary": {
            "value": 6691.52
        }
    },
    {
        "Name": {
            "value": "Daniel Baggins"
        },
        "Office": {
            "value": "New York"
        },
        "Position": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 67
        },
        "SomeDateTime": {
            "value": "2008-1-9 08:00:00"
        },
        "StartDate": {
            "value": "19/5/2002"
        },
        "StartTime": {
            "value": "09:00"
        },
        "Salary": {
            "value": 2304.52
        }
    },
    {
        "Name": {
            "value": "Daniel Zonk"
        },
        "Office": {
            "value": "New York"
        },
        "Position": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 51
        },
        "SomeDateTime": {
            "value": "2008-1-8 09:00:00"
        },
        "StartDate": {
            "value": "6/2/2006"
        },
        "StartTime": {
            "value": "08:00:15"
        },
        "Salary": {
            "value": 7187.52
        }
    },
];

export default null;
