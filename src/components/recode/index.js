import React, { Component } from 'react'
import { Statistic, Row, Col } from 'antd';
import Wave from "../wave"
import Change from "../changes"
import "./index.css"

export default class index extends Component {
    render() {
        return (
            <div className="recode-wrap">
                <div id="carouselExampleControls" className="carousel slide recode-inner-wrapper" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active carousel-item-self">
                            <div className="table-wraper">
                                <Row gutter={16}>
                                    <div className="count">
                                        <Col span={36}>
                                        <Statistic title="过去一年内您一共来图书馆（次）" value={112} />
                                        </Col>
                                    </div>
                                    {/* <Col span={12}>
                                    <Statistic title="过去一年内您一共借阅图书量 (本)" value={112893} precision={0} />
                                    </Col> */}
                                    {/* <Col span={12}>
                                    <Statistic title="Active Users" value={112893} loading />
                                    </Col> */}
                                </Row>
                                <Wave></Wave>
                            </div>
                            
                        </div>
                        <div className="carousel-item carousel-item-self">
                            <div className="table-wraper">
                                <Change/>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon arrow" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon arrow" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
        )
    }
}
