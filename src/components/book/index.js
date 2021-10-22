import React, { Component } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import {Link} from "react-router-dom"
import "./index.css"

export default class index extends Component {
    state = {
        isLoading:false,
        data : [
          {
            key: '1',
            name: 'You don\'t know JavaScript',
            author: "Kyle Simpson",
            press: '机械工业出版社',
            number:2
          },
          {
            key: '2',
            name: '了不起的Node.js',
            author: "Cuillermo Rauch",
            press: '电子工业出版社',
            number:3
          },
          {
            key: '3',
            name: '联邦学习',
            author: "杨强",
            press:"电子工业出版社",
            number:3
          },
          {
              key: '4',
              name: '穷查理宝典',
              author: "彼得·考夫曼",
              press: '中信出版社',
              number: 2
          },
          {
              key: '5',
              name: 'Vscode 权威指南',
              author: "韩俊",
              press: '中国工信出版社',
              number: 2
          }
        ]
    }
    other =  [
      {
        key: '1',
        name: 'You don\'t know JavaScript',
        author: "Kyle Simpson",
        press: '机械工业出版社',
        number:2
      },
      {
        key: '2',
        name: '了不起的Node.js',
        author: "Cuillermo Rauch",
        press: '电子工业出版社',
        number:3
      },
      {
        key: '3',
        name: '联邦学习',
        author: "杨强",
        press:"电子工业出版社",
        number:3
      },
      {
          key: '4',
          name: '穷查理宝典',
          author: "彼得·考夫曼",
          press: '中信出版社',
          number: 2
      }
      ,
      {
          key: '5',
          name: 'Vscode 权威指南',
          author: "韩俊",
          press: '中国工信出版社',
          number: 2
      }
    ]
    searchRef = React.createRef()
    search=(e)=>{
        e.preventDefault()
        let value = this.searchRef.current.value
        console.log(value)
        let result = this.other.filter(item => item.name.indexOf(value) >= 0)
        this.setState({data:result})
        console.log(result)
    }
    
    render() {
        const columns = [
            {
              title: '书名',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: '作者',
              dataIndex: 'author',
              key: 'author',
            },
            {
              title: '出版社',
              dataIndex: 'press',
              key: 'press',
            },
            {
              title: '库存数量',
              key: 'number',
              dataIndex: 'number',
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
                    <Table  columns={columns} dataSource={this.state.data} pagination = {pagination} />
                    <button type="button" className="btn btn-link wish-link">
                      <Link to="/book/wish">愿望书单</Link>
                    </button>
                </div>
                
            </div>
        )
    }
}
