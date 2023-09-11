import React from "react";
import { Table } from "antd";

const MessageTable = (props) => {

    const messageData = props.message

    const columns = [
        {
            title: 'Time',
            dataIndex: 'Time',
          },
        {
          title: 'Doctor Message',
          dataIndex: 'Message',
        },
      ];

      const fetchMessages = (messageData) =>{
        var dataOfMessages = []
        for (let i = 0; i < messageData.length; i++){
            var jsonObject = {}
            jsonObject["key"] = i + 1
            jsonObject["Time"] = messageData[i].time
            jsonObject["Message"] = messageData[i].content
            dataOfMessages.push(jsonObject)
        }
        return dataOfMessages;
    }
    return (
        <>
        <h2 className="tableDescriptionHeadings"> Prescription Time</h2>
        <hr />
        <Table columns={columns} dataSource={fetchMessages(messageData)} size="small" pagination={{pageSize: 3}} scroll={{y: 240}}/>
        </>
    )
}

export default MessageTable;