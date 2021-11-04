import React, { Component,useEffect } from 'react'
import Board from "../board"
import {Link} from "react-router-dom"
import useStore from "../../store"
import {isEmpty} from "lodash"
import axios from "axios"
import "./index.css"

export default function(){
    let [store,setStore] = useStore()
    let info = localStorage.getItem("seat")
    let float = "",
    area = "",
    time = "",
    seat = ""
    useEffect(async()=>{
        axios.get("/CHECK/?a=001123").then(res => {
            let strings = res.data
            setStore(strings)
            console.log(strings)
                // this.setState({"float":infoJson.float,"seat":infoJson.seat,"time":infoJson.time,"area":infoJson.area})
            float = strings.FLOOR[0].trim()
            seat = strings.SEATNUMBER[0].trim()
            time = strings.TIME1[0].trim()
            area = strings.AREA[0].trim()
        })
    },[])
    console.log(store)
    if(store.float !== undefined){
        console.log("!12313123")
        float = store.float
        seat = store.seat
        time = store.time
        area = store.area
        setStore({
            FLOOR:[float],
            AREA:[area],
            TIME1:[time],
            SEATNUMBER:[seat]
        })
        
    }
    let infoJson = JSON.parse(info)
    
    
    
    return (
        <div className="seat-wrap">
            <div className="showinfo">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item info-title">你的预约信息</li>
                    <li className="list-group-item">楼层 -- {store?.FLOOR?.[0]?.trim()}</li>
                    <li className="list-group-item">区域 -- {store.AREA?.[0].trim()}</li>
                    <li className="list-group-item">时间 -- {store.TIME1?.[0].trim()}</li>
                    <li className="list-group-item">座位 -- {store.SEATNUMBER?.[0].trim()}</li>
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