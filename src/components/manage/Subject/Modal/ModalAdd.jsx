/** @format */

// /** @format */

// import React from "react";
// import { useState } from "react";

// import { Modal, Input, Form, TimePicker } from "antd";

// const [count, setCount] = useState(5);
// const ModalAdd = () => {
//   const onAddStudent = () => {
//     const newStudent = {
//       id: count,
//       name: "Name",
//       classID: "ClassID",
//       startTime: "StartTime",
//       endTime: "EndTime",
//     };
//     setDataSource((pre) => {
//       return [...pre, newStudent];
//     });
//     setCount(count + 1);
//   };
//   return (
//     <Modal
//       title='Add class'
//       visible={isEditing}
//       okText='Save'
//       onCancel={resetEditing}
//       onOk={onSubmitForm}
//       width='400px'>
//       <Form layout='vertical' form={form}>
//         <Form.Item
//           label='Subject name'
//           name='name'
//           rules={[
//             {
//               required: true,
//               message: "Please input subject name!",
//             },
//           ]}>
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label='Class ID'
//           name='classID'
//           rules={[
//             {
//               required: true,
//               message: "Please input class ID!",
//             },
//           ]}>
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label='Start time'
//           name='startTime'
//           rules={[
//             {
//               required: true,
//               message: "Please select start time",
//             },
//           ]}>
//           <TimePicker
//             style={{ width: "100%" }}
//             placeholder='HH:mm'
//             format='HH:mm'
//           />
//         </Form.Item>

//         <Form.Item
//           label='End time'
//           name='endTime'
//           rules={[
//             {
//               required: true,
//               message: "Please select end time",
//             },
//           ]}>
//           <TimePicker
//             style={{ width: "100%" }}
//             placeholder='HH:mm'
//             format='HH:mm'
//           />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };
// export default ModalAdd;
