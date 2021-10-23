import React from 'react'
import { Tabs } from 'antd-mobile'

export default function index() {
    let data = {
        seat:[
            {
                week:1,
                times:0
            },
            {
                week:2,
                times:1
            },
            {
                week:3,
                times:2
            }
        ],
        book:[
            {
                week:1,
                times:2
            },
            {
                week:2,
                times:3
            },
            {
                week:3,
                times:3
            }
        ]
    }
    return (
        <div>
        <Tabs>
          <Tabs.TabPane title='座位预约违约' key='fruits'>
          <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">第X周</th>
                <th scope="col">座位违约次数</th>
                </tr>
            </thead>
            <tbody>
                {data.seat.map((item,index)=> (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{item.week}</td>
                        <td>{item.times}</td>
                    </tr>
                ))}
            </tbody>
        </table>
          </Tabs.TabPane>
          <Tabs.TabPane title='图书预约违约' key='vegatables'>
          <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">第X周</th>
                <th scope="col">图书违约次数</th>
                </tr>
            </thead>
            <tbody>
                {data.book.map((item,index)=> (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{item.week}</td>
                        <td>{item.times}</td>
                    </tr>
                ))}
            </tbody>
        </table>
          </Tabs.TabPane>
        </Tabs>
        </div>
    )
}