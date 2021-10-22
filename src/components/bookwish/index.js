import React, { useState }  from 'react'
import {
    Dialog,
    Form,
    Button,
    Input,
    TextArea 
} from 'antd-mobile'

export default function Index() {
    const [form] = Form.useForm()
    const onFinish = (values) => {
        Dialog.alert({
          content: JSON.stringify(values),
        })
      }
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log(e)
    }
    return (
        <div>
             <Form
          layout='horizontal'
          footer={
            <Button block type='submit' color='primary' onClick={onSubmit}>
              提交
            </Button>
          }
        >
          <Form.Item
            name='姓名'
            label='姓名'
            rules={[{ required: true, message: '姓名不能为空' }]}
          >
            <Input onChange={console.log} placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item name='stuNumber' label='学号' rules={[{ required: true, message: '学号不能为空' }]}>
            <Input onChange={console.log} placeholder='请输入学号' />
          </Form.Item>
          <Form.Item name='bookName' label='书籍名称' rules={[{ required: true, message: '书名不能为空' }]}>
            <Input onChange={console.log} placeholder='请输入书名' />
          </Form.Item>
          <Form.Item name='press' label='出版社' rules={[{ required: true, message: '出版社不能为空' }]}>
            <Input onChange={console.log} placeholder='请输入出版社' />
          </Form.Item>
        </Form>
        </div>
    )
}
