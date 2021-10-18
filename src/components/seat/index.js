import React, { Component } from 'react'
import Board from "../board"
import {Link} from "react-router-dom"
import "./index.css"

export default class index extends Component {
    state = {
        float:"",
        seat:"",
        area:"",
        time:"" 
    }
    componentDidMount(){
        let info = localStorage.getItem("seat")
        let infoJson = JSON.parse(info)
        if(infoJson){
            this.setState({"float":infoJson.float,"seat":infoJson.seat,"time":infoJson.time,"area":infoJson.area})
        }
    }
    render() {
        return (
            <div className="seat-wrap">
                <div className="showinfo">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item info-title">你的预约信息</li>
                        <li class="list-group-item">楼层 -- {this.state.float}</li>
                        <li class="list-group-item">区域 -- {this.state.area}</li>
                        <li class="list-group-item">时间 -- {this.state.time}</li>
                        <li class="list-group-item">座位 -- {this.state.seat}</li>
                    </ul>
                </div> 
                <button className="btn choose-btn button_center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">预约座位</button>
                    <Board/>
                <button type="button" className="btn btn-link empty-btn choose-link">
                    <Link to="/seat/recode">查看年度记录</Link>
                </button>
            </div>
        )
    }
}