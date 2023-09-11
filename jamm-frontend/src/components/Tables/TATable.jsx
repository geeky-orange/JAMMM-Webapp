import React from "react";
import { Table } from "antd";

const TATable = (props) => {

    const columns = [
        {
            title: 'Teaching Assistant',
            dataIndex: 'professor',
          },
        {
          title: 'Des',
          dataIndex: 'Des',
        },
      ];


      const fetchMessages = () =>{
        var dataOfMessages = [
            {
            "key": 1,
            "professor": "Patient Name: " ,
            "Des": props.title + props.name
        },
            {
            "key": 2,
            "professor": "Profession: ",
            "Des": props.role
        },
            {
            "key": 3,
            "professor": "Email: ",
            "Des": props.Email
        },
            {
            "key": 4,
            "professor": "Location: ",
            "Des": props.location
        }
    ]
        return dataOfMessages;
    }
    return (
        <>
        <Table columns={columns} dataSource={fetchMessages()} size="small" showHeader={false}/>
        </>
    )
}

export default TATable;