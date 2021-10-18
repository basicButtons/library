import React, { Component } from 'react';
import {Link} from "react-router-dom";
import classNames from 'classnames'
import "./index.css"

export default class index extends Component {
    state = {
        flag:"seat"
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
                    <div className="container-fluid">
                        <a className="navbar-brand nav-title" href="#">图书馆预约系统</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item" onClick={()=>this.setState({flag:"seat"})}>
                                    <Link className={classNames({
                                            "nav-link":true,
                                            "active": this.state.flag === "seat"
                                        })} aria-current="page"  to="/seat">
                                            预约座位
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={()=>this.setState({flag:"room"})}>
                                    <Link className={classNames({
                                            "nav-link":true,
                                            "active": this.state.flag === "room"
                                        })} aria-current="page"  to="/room">预约研讨室</Link>
                                    {/* <a className="nav-link"  href="#">预约研讨室</a> */}
                                </li> 
                                <li className="nav-item" onClick={()=>this.setState({flag:"book"})}>
                                    <Link className={classNames({
                                            "nav-link":true,
                                            "active": this.state.flag === "book"
                                        })} aria-current="page"  to="/book">图书预约</Link>
                                    {/* <a className="nav-link" href="#">图书预约</a> */}
                                </li>
                                <li className="nav-item" onClick={()=>this.setState({flag:"credit"})}>
                                    <Link className={classNames({
                                            "nav-link":true,
                                            "active": this.state.flag === "credit"
                                        })} aria-current="page"  to="/credit">信用记录</Link>
                                    {/* <a className="nav-link">信用记录</a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
