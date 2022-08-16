/** @format */
import React from "react";

import { Button, Table, Modal, Input, Form } from "antd";
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
    title: "Age",
    dataIndex: "age",
  },
  {
    key: "4",
    title: "Email",
    dataIndex: "email",
  },
  {
    key: "5",
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
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Tran",
      age: " 16",
      email: "tranvana@gmail.com",
    },
    {
      id: 2,
      name: "Tran ",
      age: "18",
      email: "tranvanb@gmail.com",
    },
    {
      id: 3,
      name: "Tran Van C",
      age: "20",
      email: "tranvanc@gmail.com",
    },
    {
      id: 4,
      name: "Tran Van D",
      age: "19",
      email: "tranvand@gmail.com",
    },
  ]);

  const [count, setCount] = useState(5);
  const onAddStudent = () => {
    const newStudent = {
      id: count,
      name: "Name",
      email: "Email" + "@gmail.com",
      age: "Age",
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
    const { id, name, age, email } = await form.validateFields([
      "id",
      "name",
      "age",
      "email",
    ]);
    console.log("", moment());
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
          Add a new Student
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
          <Form layout='vertical' form={form}>
            <Form.Item
              label=' Name'
              name='name'
              rules={[
                {
                  required: true,
                  message: "Please input Name!",
                },
              ]}>
              <Input
                value={editingStudent?.name}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, name: e.target.value };
                  });
                }}
              />

              <Form.Item
                label='Age'
                name='age'
                rules={[
                  {
                    required: true,
                    message: "Please input age!",
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    message: "Please input Email!",
                  },
                ]}>
                <Input />
              </Form.Item>
            </Form.Item>
          </Form>
        </Modal>
      </header>
    </div>
  );
}

export default Student;
