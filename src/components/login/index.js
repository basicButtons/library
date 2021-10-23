import { Form, Input, Button, Checkbox } from 'antd';
import {withRouter} from "react-router-dom"
import { useState } from 'react';
const Demo = (props) => {
    let [error,setError] = useState("")
    let close = props.close
  const onFinish = (values) => {
      if(values.username === "1" && values.password === "1"){
        close(true)
        props.history.push("/seat")
      }else{
        setError("error")
      }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="学号"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        validateStatus={error}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default withRouter(Demo)