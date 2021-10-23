import React, { Component,useEffect } from 'react'
import Board from "../board"
import {Link} from "react-router-dom"
import useStore from "../../store"
import {isEmpty} from "lodash"
import "./index.css"

export default function(){

    let [store,setStore] = useStore()
    let info = localStorage.getItem("seat")
    let infoJson = JSON.parse(info)
    useEffect(() => {
        setStore(infoJson)
        return () => {
            
        }
    }, [])
    let float = "",
    area = "",
    time = "",
    seat = ""
    if(!isEmpty(store)){
        // this.setState({"float":infoJson.float,"seat":infoJson.seat,"time":infoJson.time,"area":infoJson.area})
        float = store.float
        seat = store.seat
        time = store.time
        area = store.area
    }
    
    return (
        <div className="seat-wrap">
            <div className="showinfo">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item info-title">你的研讨室预约信息</li>
                    <li className="list-group-item">楼层 -- {float}</li>
                    <li className="list-group-item">区域 -- {area}</li>
                    <li className="list-group-item">时间 -- {time}</li>
                    <li className="list-group-item">房间 -- {seat}</li>
                </ul>
            </div>
            <button className="btn choose-btn button_center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">预约座位</button>
                <Board/>
        </div>
    )
    
}