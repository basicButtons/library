import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

let changes = ()=>(
  <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="最早入馆时间"
            value={"6:31"}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            // prefix={<ArrowUpOutlined />}
            // suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="最晚出馆时间"
            value={"10:30"}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            // prefix={<ArrowDownOutlined />}
            // suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="最常去区域"
            value={"A1区域"}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            // prefix={<ArrowDownOutlined />}
            // suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="最常去楼层"
            value={"三楼"}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            // prefix={<ArrowDownOutlined />}
            // suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>)
export default changes