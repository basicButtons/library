import React, { Component } from 'react'
import { Table, Tag, Space, Pagination } from 'antd';
import "./index.css"

export default class index extends Component {
    state = {
        isLoading:false,
        books:[
            {
                name:"前端开发核心知识进阶",
                place:"一排二列"
            }
        ]
    }
    searchRef = React.createRef()
    search=(e)=>{
        e.preventDefault()
        let value = this.searchRef.current.value
        // console.log(value)
        let result = this.state.books.filter(item => item.name.indexOf(value) >= 0)
        console.log(result)

    }
    
    render() {
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <a>Invite {record.name}</a>
                  <a>Delete</a>
                </Space>
              ),
            },
          ];
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
            {
                key: '4',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '5',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
          ];
          let pagination = {
              pageSize : 4
          }
        return (
            <div className="book-wraper">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="输入你想查找的书籍名称" aria-label="Search" ref={this.searchRef}/>
                    <button className="btn btn-outline-success" onClick={this.search}>Search</button>
                </form>
                <div className="display book-table" >
                    <Table  columns={columns} dataSource={data} pagination = {pagination} />
                </div>
            </div>
        )
    }
}
