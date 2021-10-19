import React, { useState } from 'react'
import classNames from 'classnames'
import useStore from '../../store'
import "./index.css"

export default function(){
    let [store,setStore] = useStore()
    let floats=["1楼","2楼","3楼","4楼"],
        areas=["A区域","B区域","C区域","D区域"],
        times=["6：00-12：00","12：00-18：00","18：00-22：30"],
        seats=["A1","A2","A3"],
    [floatFlag,setFloatFlag] = useState(0),
    [areaFlag,setAreaFlag] = useState(0),
    [timeFlag,setTimeFlag] = useState(0),
    [seatFlag,setSeatFlag] = useState(0)

    let cancle = React.createRef()

        return (
            <div>
                <div className="offcanvas offcanvas-bottom board" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">选择座位预约</h5>
                        <button type="button" ref={cancle} className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body small">
                        <div className="question-wrap">
                            <div className="question-title">
                                请选择楼层
                            </div>
                            
                            <div className="question-choice">
                            {
                                floats.map((float,index)=>{
                                    return (
                                        <div className={classNames({
                                            "choice-item":floatFlag !== index,
                                            "choiced-item": floatFlag === index
                                        })}
                                        key={index}
                                        onClick={()=>setFloatFlag(index)}
                                        >
                                            {float}
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className="question-title">
                                请选择区域
                            </div>
                            <div className="question-choice">
                            {
                                areas.map((area,index)=>{
                                    return (
                                        <div className={classNames({
                                            "choice-item":areaFlag !== index,
                                            "choiced-item": areaFlag === index
                                        })}
                                        key={index}
                                        onClick={()=>setAreaFlag(index)}
                                        >
                                            {area}
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="question-title">
                                请选择时间
                        </div>
                        
                        <div className="question-choice">
                            {
                                times.map((time,index)=>{
                                    return (
                                        <div className={classNames({
                                            "choice-item":timeFlag !== index,
                                            "choiced-item": timeFlag === index,
                                            "long-item":true
                                        })}
                                        key={index}
                                        onClick={()=>setTimeFlag(index)}
                                        >
                                            {time}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="question-title">
                                请选择座位
                        </div>
                        <div className="question-choice">
                            {
                                seats.map((seat,index)=>{
                                    return (
                                        <div className={classNames({
                                            "choice-item":seatFlag !== index,
                                            "choiced-item": seatFlag === index
                                        })}
                                        key={index}
                                        onClick={()=>setSeatFlag(index)}
                                        >
                                            {seat}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="board-buttom">

                    </div>
                    <div className="board-btn">
                        <div className="d-grid gap-2">
                            <button className="btn board-btn" type="button"
                            onClick={()=>{
                                localStorage.setItem("seat",JSON.stringify({
                                    "float":floats[floatFlag],
                                    "area":areas[areaFlag],
                                    "time":times[timeFlag],
                                    "seat":seats[seatFlag]
                                }))
                                cancle.current.click()
                                setStore({
                                    "float":floats[floatFlag],
                                    "area":areas[areaFlag],
                                    "time":times[timeFlag],
                                    "seat":seats[seatFlag]
                                })
                            }}
                            >确认</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
