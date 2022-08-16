/** @format */

import { Button, Table, Modal, Input } from "antd";
import { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined, EyeTwoTone } from "@ant-design/icons";
import Axios from "axios";

function TableClass() {
  const [Class, setClass] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Tran Van A",
      numberOfStudent: "10",
    },
    {
      id: 2,
      name: "Tran Van B",
      numberOfStudent: "10",
    },
    {
      id: 3,
      name: "Tran Van C",
      numberOfStudent: "10",
    },
    {
      id: 4,
      name: "Tran Van D",
      numberOfStudent: "10",
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
      title: "number of student",
      dataIndex: "numberOfStudent",
    },

    {
      key: "4",
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
      umberOfStudent: "umberOfStudent",
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

  useEffect(() => {
    Axios.get("http://localhost:3001/class").then((data) => {
      setClass(data.data);
    });
  }, [Class]);
  const data = [];
  Class.map((value) => {
    data.push({
      id: value.id,
      name: value.name,
      numberOfStudent: value.numberOfStudent,
    });
  });

  return (
    <div
      className='App'
      style={{
        marginTop: 100,
      }}>
      <header className='App-header'>
        <Button onClick={onAddStudent}>Add a new Class</Button>
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
            value={editingStudent?.numberOfStudent}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, numberOfStudent: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default TableClass;
