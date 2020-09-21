import React from 'react';

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
            "parser": (value) => <p onClick={() => alert("hello")}>{value}</p>
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
    /*{
        "Name": {
            "value": "Antonio Munk"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 40
        },
        "StartDate": {
            "value": "16/2/2005"
        },
        "Salary": {
            "value": 7341.52
        }
    },
    {
        "Name": {
            "value": "Antonio Elves"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 43
        },
        "StartDate": {
            "value": "28/8/2009"
        },
        "Salary": {
            "value": 4912.52
        }
    },
    {
        "Name": {
            "value": "Ana Zonk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 75
        },
        "StartDate": {
            "value": "19/1/2003"
        },
        "Salary": {
            "value": 4161.52
        }
    },
    {
        "Name": {
            "value": "Josephine Elves"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 30
        },
        "StartDate": {
            "value": "16/7/2003"
        },
        "Salary": {
            "value": 2881.52
        }
    },
    {
        "Name": {
            "value": "Daniel Elves"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 64
        },
        "StartDate": {
            "value": "11/3/2008"
        },
        "Salary": {
            "value": 5244.52
        }
    },
    {
        "Name": {
            "value": "Daniel Elves"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 51
        },
        "StartDate": {
            "value": "2/6/2004"
        },
        "Salary": {
            "value": 7283.52
        }
    },
    {
        "Name": {
            "value": "Daniel Zonk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 82
        },
        "StartDate": {
            "value": "17/1/2005"
        },
        "Salary": {
            "value": 5582.52
        }
    },
    {
        "Name": {
            "value": "Daniel Elves"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 47
        },
        "StartDate": {
            "value": "7/6/2009"
        },
        "Salary": {
            "value": 6387.52
        }
    },
    {
        "Name": {
            "value": "Daniel York"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 28
        },
        "StartDate": {
            "value": "13/10/2008"
        },
        "Salary": {
            "value": 9688.52
        }
    },
    {
        "Name": {
            "value": "Daniel Zonk"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 64
        },
        "StartDate": {
            "value": "10/11/2002"
        },
        "Salary": {
            "value": 1841.52
        }
    },
    {
        "Name": {
            "value": "Ada Shire"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 33
        },
        "StartDate": {
            "value": "24/2/2006"
        },
        "Salary": {
            "value": 8465.52
        }
    },
    {
        "Name": {
            "value": "Antonio Munk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 28
        },
        "StartDate": {
            "value": "23/7/2001"
        },
        "Salary": {
            "value": 3565.52
        }
    },
    {
        "Name": {
            "value": "Josephine Zonk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 29
        },
        "StartDate": {
            "value": "25/4/2000"
        },
        "Salary": {
            "value": 9583.52
        }
    },
    {
        "Name": {
            "value": "Ana York"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 30
        },
        "StartDate": {
            "value": "4/8/2007"
        },
        "Salary": {
            "value": 8182.52
        }
    },
    {
        "Name": {
            "value": "Daniel Munk"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 56
        },
        "StartDate": {
            "value": "5/5/2003"
        },
        "Salary": {
            "value": 6100.52
        }
    },
    {
        "Name": {
            "value": "Ada Shire"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 76
        },
        "StartDate": {
            "value": "1/11/2000"
        },
        "Salary": {
            "value": 2257.52
        }
    },
    {
        "Name": {
            "value": "Daniel Munk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 36
        },
        "StartDate": {
            "value": "11/4/2005"
        },
        "Salary": {
            "value": 9012.52
        }
    },
    {
        "Name": {
            "value": "Antonio Elves"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 72
        },
        "StartDate": {
            "value": "17/7/2009"
        },
        "Salary": {
            "value": 8179.52
        }
    },
    {
        "Name": {
            "value": "Ada York"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 86
        },
        "StartDate": {
            "value": "23/5/2003"
        },
        "Salary": {
            "value": 5748.52
        }
    },
    {
        "Name": {
            "value": "Antonio Elves"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 66
        },
        "StartDate": {
            "value": "15/3/2007"
        },
        "Salary": {
            "value": 2295.52
        }
    },
    {
        "Name": {
            "value": "Ada Munk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 60
        },
        "StartDate": {
            "value": "4/9/2009"
        },
        "Salary": {
            "value": 1833.52
        }
    },
    {
        "Name": {
            "value": "Daniel Munk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 45
        },
        "StartDate": {
            "value": "27/11/2005"
        },
        "Salary": {
            "value": 8389.52
        }
    },
    {
        "Name": {
            "value": "Daniel Shire"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 83
        },
        "StartDate": {
            "value": "23/3/2008"
        },
        "Salary": {
            "value": 7286.52
        }
    },
    {
        "Name": {
            "value": "Ada York"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 83
        },
        "StartDate": {
            "value": "8/12/2003"
        },
        "Salary": {
            "value": 3508.52
        }
    },
    {
        "Name": {
            "value": "Ana Zonk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 56
        },
        "StartDate": {
            "value": "11/5/2009"
        },
        "Salary": {
            "value": 2476.52
        }
    },
    {
        "Name": {
            "value": "Daniel Munk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 55
        },
        "StartDate": {
            "value": "2/4/2006"
        },
        "Salary": {
            "value": 3997.52
        }
    },
    {
        "Name": {
            "value": "Josephine York"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 60
        },
        "StartDate": {
            "value": "21/6/2000"
        },
        "Salary": {
            "value": 3484.52
        }
    },
    {
        "Name": {
            "value": "Ada Elves"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 36
        },
        "StartDate": {
            "value": "7/3/2005"
        },
        "Salary": {
            "value": 7577.52
        }
    },
    {
        "Name": {
            "value": "Ana Shire"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 42
        },
        "StartDate": {
            "value": "5/8/2002"
        },
        "Salary": {
            "value": 6181.52
        }
    },
    {
        "Name": {
            "value": "Francisco Munk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 42
        },
        "StartDate": {
            "value": "6/11/2002"
        },
        "Salary": {
            "value": 6516.52
        }
    },
    {
        "Name": {
            "value": "Francisco Elves"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 79
        },
        "StartDate": {
            "value": "22/4/2005"
        },
        "Salary": {
            "value": 7654.52
        }
    },
    {
        "Name": {
            "value": "Ada Elves"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 51
        },
        "StartDate": {
            "value": "11/6/2008"
        },
        "Salary": {
            "value": 8011.52
        }
    },
    {
        "Name": {
            "value": "Antonio Elves"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 51
        },
        "StartDate": {
            "value": "29/7/2006"
        },
        "Salary": {
            "value": 9330.52
        }
    },
    {
        "Name": {
            "value": "Francisco Munk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 61
        },
        "StartDate": {
            "value": "14/8/2001"
        },
        "Salary": {
            "value": 9778.52
        }
    },
    {
        "Name": {
            "value": "Ana York"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 76
        },
        "StartDate": {
            "value": "15/5/2005"
        },
        "Salary": {
            "value": 3287.52
        }
    },
    {
        "Name": {
            "value": "Daniel Shire"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 40
        },
        "StartDate": {
            "value": "1/11/2000"
        },
        "Salary": {
            "value": 4701.52
        }
    },
    {
        "Name": {
            "value": "Josephine Shire"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 70
        },
        "StartDate": {
            "value": "17/9/2006"
        },
        "Salary": {
            "value": 3769.52
        }
    },
    {
        "Name": {
            "value": "Antonio Elves"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 62
        },
        "StartDate": {
            "value": "6/8/2003"
        },
        "Salary": {
            "value": 3522.52
        }
    },
    {
        "Name": {
            "value": "Francisco Shire"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 77
        },
        "StartDate": {
            "value": "21/10/2004"
        },
        "Salary": {
            "value": 8749.52
        }
    },
    {
        "Name": {
            "value": "Ada York"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 83
        },
        "StartDate": {
            "value": "8/6/2005"
        },
        "Salary": {
            "value": 5747.52
        }
    },
    {
        "Name": {
            "value": "Daniel Munk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 40
        },
        "StartDate": {
            "value": "9/3/2006"
        },
        "Salary": {
            "value": 5443.52
        }
    },
    {
        "Name": {
            "value": "Ana Zonk"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 36
        },
        "StartDate": {
            "value": "19/3/2000"
        },
        "Salary": {
            "value": 7163.52
        }
    },
    {
        "Name": {
            "value": "Daniel Zonk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 25
        },
        "StartDate": {
            "value": "7/10/2001"
        },
        "Salary": {
            "value": 7119.52
        }
    },
    {
        "Name": {
            "value": "Josephine Shire"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 33
        },
        "StartDate": {
            "value": "15/11/2009"
        },
        "Salary": {
            "value": 6279.52
        }
    },
    {
        "Name": {
            "value": "Francisco Zonk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 45
        },
        "StartDate": {
            "value": "10/1/2000"
        },
        "Salary": {
            "value": 3510.52
        }
    },
    {
        "Name": {
            "value": "Ana Munk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 58
        },
        "StartDate": {
            "value": "2/11/2007"
        },
        "Salary": {
            "value": 8171.52
        }
    },
    {
        "Name": {
            "value": "Josephine Zonk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 23
        },
        "StartDate": {
            "value": "25/3/2001"
        },
        "Salary": {
            "value": 5994.52
        }
    },
    {
        "Name": {
            "value": "Josephine Elves"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 61
        },
        "StartDate": {
            "value": "16/10/2008"
        },
        "Salary": {
            "value": 7849.52
        }
    },
    {
        "Name": {
            "value": "Ana Baggins"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 73
        },
        "StartDate": {
            "value": "22/12/2001"
        },
        "Salary": {
            "value": 8439.52
        }
    },
    {
        "Name": {
            "value": "Josephine Elves"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 69
        },
        "StartDate": {
            "value": "19/11/2008"
        },
        "Salary": {
            "value": 4232.52
        }
    },
    {
        "Name": {
            "value": "Ana Elves"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 56
        },
        "StartDate": {
            "value": "27/7/2002"
        },
        "Salary": {
            "value": 2198.52
        }
    },
    {
        "Name": {
            "value": "Josephine Munk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 20
        },
        "StartDate": {
            "value": "28/4/2003"
        },
        "Salary": {
            "value": 6186.52
        }
    },
    {
        "Name": {
            "value": "Ada Baggins"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 68
        },
        "StartDate": {
            "value": "5/11/2002"
        },
        "Salary": {
            "value": 2816.52
        }
    },
    {
        "Name": {
            "value": "Antonio Munk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 48
        },
        "StartDate": {
            "value": "26/2/2004"
        },
        "Salary": {
            "value": 6433.52
        }
    },
    {
        "Name": {
            "value": "Francisco York"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 55
        },
        "StartDate": {
            "value": "8/6/2007"
        },
        "Salary": {
            "value": 7971.52
        }
    },
    {
        "Name": {
            "value": "Daniel York"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 30
        },
        "StartDate": {
            "value": "28/10/2002"
        },
        "Salary": {
            "value": 6917.52
        }
    },
    {
        "Name": {
            "value": "Josephine Baggins"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 46
        },
        "StartDate": {
            "value": "20/1/2002"
        },
        "Salary": {
            "value": 7874.52
        }
    },
    {
        "Name": {
            "value": "Antonio Munk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 51
        },
        "StartDate": {
            "value": "17/2/2004"
        },
        "Salary": {
            "value": 4228.52
        }
    },
    {
        "Name": {
            "value": "Ada Shire"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 25
        },
        "StartDate": {
            "value": "18/6/2003"
        },
        "Salary": {
            "value": 8025.52
        }
    },
    {
        "Name": {
            "value": "Josephine Elves"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 23
        },
        "StartDate": {
            "value": "6/3/2004"
        },
        "Salary": {
            "value": 2366.52
        }
    },
    {
        "Name": {
            "value": "Ana York"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 58
        },
        "StartDate": {
            "value": "13/3/2000"
        },
        "Salary": {
            "value": 2771.52
        }
    },
    {
        "Name": {
            "value": "Francisco Zonk"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 31
        },
        "StartDate": {
            "value": "23/8/2004"
        },
        "Salary": {
            "value": 9501.52
        }
    },
    {
        "Name": {
            "value": "Ada York"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 68
        },
        "StartDate": {
            "value": "28/5/2000"
        },
        "Salary": {
            "value": 8689.52
        }
    },
    {
        "Name": {
            "value": "Ada Elves"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 38
        },
        "StartDate": {
            "value": "23/9/2002"
        },
        "Salary": {
            "value": 3327.52
        }
    },
    {
        "Name": {
            "value": "Josephine Baggins"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 64
        },
        "StartDate": {
            "value": "29/9/2008"
        },
        "Salary": {
            "value": 9066.52
        }
    },
    {
        "Name": {
            "value": "Daniel York"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 60
        },
        "StartDate": {
            "value": "25/11/2000"
        },
        "Salary": {
            "value": 7798.52
        }
    },
    {
        "Name": {
            "value": "Daniel Baggins"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 26
        },
        "StartDate": {
            "value": "17/1/2007"
        },
        "Salary": {
            "value": 6623.52
        }
    },
    {
        "Name": {
            "value": "Antonio Baggins"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 85
        },
        "StartDate": {
            "value": "6/6/2007"
        },
        "Salary": {
            "value": 2621.52
        }
    },
    {
        "Name": {
            "value": "Daniel Baggins"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 63
        },
        "StartDate": {
            "value": "20/8/2006"
        },
        "Salary": {
            "value": 2043.52
        }
    },
    {
        "Name": {
            "value": "Francisco Baggins"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 41
        },
        "StartDate": {
            "value": "18/3/2003"
        },
        "Salary": {
            "value": 6892.52
        }
    },
    {
        "Name": {
            "value": "Ada Shire"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 36
        },
        "StartDate": {
            "value": "22/4/2007"
        },
        "Salary": {
            "value": 9128.52
        }
    },
    {
        "Name": {
            "value": "Antonio Shire"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 34
        },
        "StartDate": {
            "value": "26/6/2009"
        },
        "Salary": {
            "value": 7529.52
        }
    },
    {
        "Name": {
            "value": "Antonio Shire"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 23
        },
        "StartDate": {
            "value": "20/3/2007"
        },
        "Salary": {
            "value": 5485.52
        }
    },
    {
        "Name": {
            "value": "Ada York"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 45
        },
        "StartDate": {
            "value": "1/9/2002"
        },
        "Salary": {
            "value": 6555.52
        }
    },
    {
        "Name": {
            "value": "Francisco Munk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 30
        },
        "StartDate": {
            "value": "8/5/2005"
        },
        "Salary": {
            "value": 9309.52
        }
    },
    {
        "Name": {
            "value": "Ada York"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 54
        },
        "StartDate": {
            "value": "23/1/2002"
        },
        "Salary": {
            "value": 2066.52
        }
    },
    {
        "Name": {
            "value": "Ada Munk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 32
        },
        "StartDate": {
            "value": "20/6/2000"
        },
        "Salary": {
            "value": 5158.52
        }
    },
    {
        "Name": {
            "value": "Ana Munk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 81
        },
        "StartDate": {
            "value": "13/4/2005"
        },
        "Salary": {
            "value": 3463.52
        }
    },
    {
        "Name": {
            "value": "Josephine Munk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 82
        },
        "StartDate": {
            "value": "2/5/2005"
        },
        "Salary": {
            "value": 7974.52
        }
    },
    {
        "Name": {
            "value": "Daniel Shire"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 65
        },
        "StartDate": {
            "value": "20/2/2009"
        },
        "Salary": {
            "value": 9525.52
        }
    },
    {
        "Name": {
            "value": "Ada Munk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 52
        },
        "StartDate": {
            "value": "6/10/2005"
        },
        "Salary": {
            "value": 3757.52
        }
    },
    {
        "Name": {
            "value": "Daniel Elves"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 55
        },
        "StartDate": {
            "value": "25/5/2005"
        },
        "Salary": {
            "value": 7284.52
        }
    },
    {
        "Name": {
            "value": "Francisco Shire"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 66
        },
        "StartDate": {
            "value": "29/6/2001"
        },
        "Salary": {
            "value": 6229.52
        }
    },
    {
        "Name": {
            "value": "Ada Elves"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 64
        },
        "StartDate": {
            "value": "11/12/2002"
        },
        "Salary": {
            "value": 7513.52
        }
    },
    {
        "Name": {
            "value": "Ada Munk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 28
        },
        "StartDate": {
            "value": "19/5/2004"
        },
        "Salary": {
            "value": 7540.52
        }
    },
    {
        "Name": {
            "value": "Antonio Baggins"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 23
        },
        "StartDate": {
            "value": "21/2/2004"
        },
        "Salary": {
            "value": 7503.52
        }
    },
    {
        "Name": {
            "value": "Francisco Shire"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 39
        },
        "StartDate": {
            "value": "27/11/2000"
        },
        "Salary": {
            "value": 7419.52
        }
    },
    {
        "Name": {
            "value": "Francisco Munk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 61
        },
        "StartDate": {
            "value": "4/5/2004"
        },
        "Salary": {
            "value": 3028.52
        }
    },
    {
        "Name": {
            "value": "Josephine Baggins"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 35
        },
        "StartDate": {
            "value": "3/7/2004"
        },
        "Salary": {
            "value": 8747.52
        }
    },
    {
        "Name": {
            "value": "Francisco York"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 27
        },
        "StartDate": {
            "value": "6/4/2003"
        },
        "Salary": {
            "value": 4073.52
        }
    },
    {
        "Name": {
            "value": "Antonio Elves"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 28
        },
        "StartDate": {
            "value": "4/8/2008"
        },
        "Salary": {
            "value": 4283.52
        }
    },
    {
        "Name": {
            "value": "Daniel Elves"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 50
        },
        "StartDate": {
            "value": "2/1/2004"
        },
        "Salary": {
            "value": 8520.52
        }
    },
    {
        "Name": {
            "value": "Daniel York"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 49
        },
        "StartDate": {
            "value": "23/1/2000"
        },
        "Salary": {
            "value": 6328.52
        }
    },
    {
        "Name": {
            "value": "Francisco Baggins"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 58
        },
        "StartDate": {
            "value": "29/6/2001"
        },
        "Salary": {
            "value": 6850.52
        }
    },
    {
        "Name": {
            "value": "Ada Zonk"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 55
        },
        "StartDate": {
            "value": "24/1/2004"
        },
        "Salary": {
            "value": 7200.52
        }
    },
    {
        "Name": {
            "value": "Daniel Shire"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 87
        },
        "StartDate": {
            "value": "20/2/2006"
        },
        "Salary": {
            "value": 8213.52
        }
    },
    {
        "Name": {
            "value": "Ana Munk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 52
        },
        "StartDate": {
            "value": "28/4/2001"
        },
        "Salary": {
            "value": 3190.52
        }
    },
    {
        "Name": {
            "value": "Antonio Elves"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 59
        },
        "StartDate": {
            "value": "17/10/2002"
        },
        "Salary": {
            "value": 4071.52
        }
    },
    {
        "Name": {
            "value": "Antonio York"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 76
        },
        "StartDate": {
            "value": "18/5/2008"
        },
        "Salary": {
            "value": 9122.52
        }
    },
    {
        "Name": {
            "value": "Ana Zonk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 53
        },
        "StartDate": {
            "value": "9/7/2006"
        },
        "Salary": {
            "value": 7948.52
        }
    },
    {
        "Name": {
            "value": "Josephine Munk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 72
        },
        "StartDate": {
            "value": "25/9/2001"
        },
        "Salary": {
            "value": 6050.52
        }
    },
    {
        "Name": {
            "value": "Ana Shire"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 82
        },
        "StartDate": {
            "value": "11/2/2007"
        },
        "Salary": {
            "value": 8236.52
        }
    },
    {
        "Name": {
            "value": "Josephine York"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 81
        },
        "StartDate": {
            "value": "4/7/2003"
        },
        "Salary": {
            "value": 8058.52
        }
    },
    {
        "Name": {
            "value": "Francisco Elves"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 53
        },
        "StartDate": {
            "value": "22/1/2008"
        },
        "Salary": {
            "value": 5547.52
        }
    },
    {
        "Name": {
            "value": "Francisco Zonk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 57
        },
        "StartDate": {
            "value": "5/8/2004"
        },
        "Salary": {
            "value": 5953.52
        }
    },
    {
        "Name": {
            "value": "Daniel Elves"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 83
        },
        "StartDate": {
            "value": "17/1/2008"
        },
        "Salary": {
            "value": 5277.52
        }
    },
    {
        "Name": {
            "value": "Ana York"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 63
        },
        "StartDate": {
            "value": "21/8/2000"
        },
        "Salary": {
            "value": 3657.52
        }
    },
    {
        "Name": {
            "value": "Francisco Baggins"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 24
        },
        "StartDate": {
            "value": "24/7/2001"
        },
        "Salary": {
            "value": 6883.52
        }
    },
    {
        "Name": {
            "value": "Josephine Munk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 26
        },
        "StartDate": {
            "value": "2/7/2002"
        },
        "Salary": {
            "value": 4592.52
        }
    },
    {
        "Name": {
            "value": "Josephine Shire"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 50
        },
        "StartDate": {
            "value": "19/3/2006"
        },
        "Salary": {
            "value": 1883.52
        }
    },
    {
        "Name": {
            "value": "Ana York"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 46
        },
        "StartDate": {
            "value": "24/10/2006"
        },
        "Salary": {
            "value": 4717.52
        }
    },
    {
        "Name": {
            "value": "Josephine Elves"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 42
        },
        "StartDate": {
            "value": "9/9/2005"
        },
        "Salary": {
            "value": 7520.52
        }
    },
    {
        "Name": {
            "value": "Ada Shire"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 44
        },
        "StartDate": {
            "value": "21/6/2004"
        },
        "Salary": {
            "value": 5042.52
        }
    },
    {
        "Name": {
            "value": "Francisco Shire"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 46
        },
        "StartDate": {
            "value": "25/11/2009"
        },
        "Salary": {
            "value": 6608.52
        }
    },
    {
        "Name": {
            "value": "Josephine York"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Junior Technical Author"
        },
        "Age": {
            "value": 58
        },
        "StartDate": {
            "value": "6/10/2007"
        },
        "Salary": {
            "value": 7498.52
        }
    },
    {
        "Name": {
            "value": "Daniel Elves"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 79
        },
        "StartDate": {
            "value": "17/8/2008"
        },
        "Salary": {
            "value": 4896.52
        }
    },
    {
        "Name": {
            "value": "Ana Shire"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Chief Executive Officer (CEO)"
        },
        "Age": {
            "value": 55
        },
        "StartDate": {
            "value": "14/2/2001"
        },
        "Salary": {
            "value": 4627.52
        }
    },
    {
        "Name": {
            "value": "Daniel Zonk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Integration Specialist"
        },
        "Age": {
            "value": 38
        },
        "StartDate": {
            "value": "13/1/2006"
        },
        "Salary": {
            "value": 4679.52
        }
    },
    {
        "Name": {
            "value": "Antonio Zonk"
        },
        "Position": {
            "value": "Tokyo"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 49
        },
        "StartDate": {
            "value": "11/5/2003"
        },
        "Salary": {
            "value": 5712.52
        }
    },
    {
        "Name": {
            "value": "Ada Zonk"
        },
        "Position": {
            "value": "New York"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 31
        },
        "StartDate": {
            "value": "10/10/2000"
        },
        "Salary": {
            "value": 2050.52
        }
    },
    {
        "Name": {
            "value": "Ana Zonk"
        },
        "Position": {
            "value": "London"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 58
        },
        "StartDate": {
            "value": "15/2/2000"
        },
        "Salary": {
            "value": 8040.52
        }
    },
    {
        "Name": {
            "value": "Francisco York"
        },
        "Position": {
            "value": "San Francisco"
        },
        "Office": {
            "value": "Software Engineer"
        },
        "Age": {
            "value": 71
        },
        "StartDate": {
            "value": "6/8/2005"
        },
        "Salary": {
            "value": 7647.52
        }
    }*/
];

export default null;
