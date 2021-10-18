import Search from 'antd/lib/transfer/search'
import React, { Component } from 'react'

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
        return (
            <div className="">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="输入你想查找的书籍名称" aria-label="Search" ref={this.searchRef}/>
                    <button className="btn btn-outline-success" onClick={this.search}>Search</button>
                </form>
                <div className="display">
                    
                </div>
            </div>
        )
    }
}