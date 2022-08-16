/** @format */

import "antd/dist/antd.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined, EyeTwoTone } from "@ant-design/icons";

function Manage() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Tran Van A",
      age: " 16",
      email: "tranvana@gmail.com",
    },
    {
      id: 2,
      name: "Tran Van B",
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
  const columns = [
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
  return (
    <div
      className='App'
      style={{
        marginTop: 100,
      }}>
      <header className='App-header'>
        <Button onClick={onAddStudent}>Add a new Student</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title='Edit Student'
          visible={isEditing}
          okText='Save'
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}>
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.age}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, age: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default Manage;
