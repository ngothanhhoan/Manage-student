/** @format */

import { Button, Table, Modal, Input, Form, TimePicker } from "antd";
import moment from "moment";
import { useState } from "react";
import { EditOutlined, DeleteOutlined, EyeTwoTone } from "@ant-design/icons";

const renderColumns = (onEditStudent, onDeleteStudent) => [
  {
    key: "1",
    title: "ID",
    dataIndex: "id",
  },
  {
    key: "2",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "3",
    title: "Class ID",
    dataIndex: "classID",
  },
  {
    key: "4",
    title: "Start time",
    dataIndex: "startTime",
  },
  {
    key: "5",
    title: "End time",
    dataIndex: "endTime",
  },
  {
    key: "6",
    title: "Actions",
    render: (record) => {
      return (
        <>
          <EditOutlined
            onClick={() => {
              onEditStudent(record);
            }}
          />
          <DeleteOutlined
            onClick={() => {
              onDeleteStudent(record);
            }}
            style={{ color: "red", marginLeft: 12 }}
          />
          <EyeTwoTone style={{ marginLeft: 12 }} />
        </>
      );
    },
  },
];

function Student() {
  const [form, handleForm] = Form.useForm(); // FormInstance
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Maths",
      classID: 11,
      startTime: "07:30",
      endTime: "08:30",
    },
    {
      id: 2,
      name: "Literature ",
      classID: 12,
      startTime: "07:30",
      endTime: "09:30",
    },
    {
      id: 3,
      name: "English",
      classID: 13,
      startTime: "07:30",
      endTime: "10:30",
    },
    {
      id: 4,
      name: "Geography",
      classID: 14,
      startTime: "07:30",
      endTime: "11:30",
    },
  ]);

  const [count, setCount] = useState(5);
  const onAddStudent = () => {
    const newStudent = {
      id: count,
      name: "Name",
      classID: "ClassID",
      startTime: "StartTime",
      endTime: "EndTime",
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
    setCount(count + 1);
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure?",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  const onSubmitForm = async () => {
    const { info } = await form.validateFields([
      "name",
      "classID",
      "startTime",
      "endTime",
    ]);

    // dataSource.map((key,index) => {
    //   if(key.id==)
    // })

    console.log("info edit", info);
    setIsEditing(false);
    setEditingStudent(editingStudent);

    console.log("edit info", editingStudent);
    dataSource.push(editingStudent);
    console.log("data table", dataSource);
  };

  return (
    <div
      className='App'
      style={{
        marginTop: 100,
      }}>
      <header className='App-header'>
        <Button
          onClick={onAddStudent}
          type='primary'
          style={{ marginBottom: "10px" }}>
          Add a new Subject
        </Button>

        <Table
          columns={renderColumns(onEditStudent, onDeleteStudent)}
          dataSource={dataSource}></Table>

        <Modal
          title='Edit Student'
          visible={isEditing}
          okText='Save'
          onCancel={resetEditing}
          onOk={onSubmitForm}
          width='400px'>
          <Form layout='vertical' form={form} ons>
            <Form.Item
              label='Student name'
              name='name'
              rules={[
                {
                  required: true,
                  message: "Please input student name!",
                },
              ]}>
              <Input
                value={editingStudent?.name}
                onChange={(e) => {
                  console.log("onchange name", e.target.value);
                  setEditingStudent((pre) => {
                    return { ...pre, name: e.target.value };
                  });
                }}
              />
            </Form.Item>

            <Form.Item
              label='Class ID'
              name='classID'
              rules={[
                {
                  required: true,
                  message: "Please input class ID!",
                },
              ]}>
              <Input
                value={editingStudent?.classID}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, classID: e.target.value };
                  });
                }}
              />
            </Form.Item>

            <Form.Item
              label='Start time'
              name='startTime'
              rules={[
                {
                  required: true,
                  message: "Please select start time",
                },
              ]}>
              <TimePicker
                style={{ width: "100%" }}
                placeholder='HH:mm'
                format='HH:mm'
              />
            </Form.Item>

            <Form.Item
              label='End time'
              name='endTime'
              rules={[
                {
                  required: true,
                  message: "Please select end time",
                },
              ]}>
              <TimePicker
                style={{ width: "100%" }}
                placeholder='HH:mm'
                format='HH:mm'
              />
            </Form.Item>
          </Form>
        </Modal>
      </header>
    </div>
  );
}

export default Student;
