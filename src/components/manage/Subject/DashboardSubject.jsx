/** @format */

import { Layout, Menu } from "antd";
import { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
import TableSubject from "../Subject/TableSubject";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(),

  getItem(
    "Manage",
    "abc",
    <Link to='/'>
      <AiOutlineUnorderedList />
    </Link>,
    [
      getItem("Class", "2", <Link to='/class'> </Link>),
      getItem("Student", "3", <Link to='/student'> </Link>),
      getItem("Subject", "4", <Link to='/subject'> </Link>),
    ]
  ),
];

const DashboardSubject = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <div
          className='logo'
          style={{
            height: "5px",
            margin: "10px",
          }}
        />
        <Menu
          theme='dark'
          defaultSelectedKeys={["1"]}
          mode='inline'
          items={items}
        />{" "}
      </Sider>{" "}
      <Layout className='site-layout'>
        <div className='content'> {children} </div>{" "}
        <div>
          <TableSubject />
        </div>
      </Layout>{" "}
    </Layout>
  );
};

export default DashboardSubject;
