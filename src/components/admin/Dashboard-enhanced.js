import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Row, Col, Button, Progress, Timeline, List, Avatar, Tooltip, Tabs, Radio, DatePicker, Statistic } from 'antd';
import { Area } from '@ant-design/plots';
import {
  DashboardOutlined,
  ShoppingOutlined,
  UserOutlined,
  RiseOutlined,
  FallOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  TeamOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  FilterOutlined
} from '@ant-design/icons';
import './styles/dashboard-new.css';

const Dashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('today');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    sales: 15420,
    orders: 258,
    customers: 1840,
    revenue: 28350
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const timeRanges = [
    { label: t('dashboard.range.7d'), value: '7d' },
    { label: t('dashboard.range.1m'), value: '1m' },
    { label: t('dashboard.range.3m'), value: '3m' },
    { label: t('dashboard.range.1y'), value: '1y' }
  ];

  const salesData = [
    { month: '1', value: 3500 },
    { month: '2', value: 4200 },
    { month: '3', value: 3800 },
    { month: '4', value: 5000 },
    { month: '5', value: 4900 },
    { month: '6', value: 6000 },
    { month: '7', value: 5500 }
  ];

  const areaConfig = {
    data: salesData,
    xField: 'month',
    yField: 'value',
    smooth: true,
    areaStyle: {
      fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
    }
  };

  const statsCards = [
    {
      title: t('dashboard.total_sales'),
      value: stats.sales,
      prefix: '$',
      icon: <DollarOutlined className="stat-icon" style={{ color: '#1890ff' }} />,
      trend: 12.5,
    },
    {
      title: t('dashboard.total_orders'),
      value: stats.orders,
      icon: <ShoppingCartOutlined className="stat-icon" style={{ color: '#52c41a' }} />,
      trend: -2.8,
    },
    {
      title: t('dashboard.total_customers'),
      value: stats.customers,
      icon: <TeamOutlined className="stat-icon" style={{ color: '#722ed1' }} />,
      trend: 5.2,
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{t('dashboard.title')}</h1>
        <div className="time-range-selector">
          <Radio.Group 
            value={selectedTimeRange} 
            onChange={e => setSelectedTimeRange(e.target.value)}
          >
            {timeRanges.map(range => (
              <Radio.Button key={range.value} value={range.value}>
                {range.label}
              </Radio.Button>
            ))}
          </Radio.Group>
          <DatePicker.RangePicker className="custom-date-range" />
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {statsCards.map((stat, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card loading={loading} bordered={false} className="stat-card">
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.prefix}
                suffix={
                  <span className={`trend ${stat.trend > 0 ? 'positive' : 'negative'}`}>
                    {stat.trend > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    {Math.abs(stat.trend)}%
                  </span>
                }
              />
              {stat.icon}
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} className="mt-4">
        <Col xs={24} lg={16}>
          <Card 
            title={t('dashboard.sales_analytics')}
            extra={
              <div className="card-extra">
                <Radio.Group defaultValue="sales" buttonStyle="solid" size="small">
                  <Radio.Button value="sales">Sales</Radio.Button>
                  <Radio.Button value="orders">Orders</Radio.Button>
                  <Radio.Button value="revenue">Revenue</Radio.Button>
                </Radio.Group>
              </div>
            }
            loading={loading}
          >
            <Area {...areaConfig} height={300} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title={t('dashboard.top_products')} loading={loading}>
            <List
              dataSource={[
                { name: "Product A", sales: 234, progress: 85 },
                { name: "Product B", sales: 187, progress: 76 },
                { name: "Product C", sales: 165, progress: 65 },
              ]}
              renderItem={item => (
                <List.Item>
                  <div style={{ width: '100%' }}>
                    <div className="progress-label">
                      <span>{item.name}</span>
                      <span className="progress-value">{item.sales} sales</span>
                    </div>
                    <Progress percent={item.progress} strokeColor="#1890ff" />
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mt-4">
        <Col xs={24}>
          <Card>
            <Tabs
              defaultActiveKey="orders"
              items={[
                {
                  key: 'orders',
                  label: t('dashboard.recent_orders'),
                  children: (
                    <Timeline className="activity-timeline">
                      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        <div className="activity-item">
                          <h4>New Order #1234</h4>
                          <p>John Doe - $156.00</p>
                          <div className="activity-meta">
                            <span>Processing</span>
                            <span>2 hours ago</span>
                          </div>
                        </div>
                      </Timeline.Item>
                      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        <div className="activity-item">
                          <h4>New Order #1233</h4>
                          <p>Jane Smith - $245.50</p>
                          <div className="activity-meta">
                            <span>Completed</span>
                            <span>4 hours ago</span>
                          </div>
                        </div>
                      </Timeline.Item>
                    </Timeline>
                  )
                },
                {
                  key: 'activity',
                  label: t('dashboard.customer_activity'),
                  children: (
                    <List
                      className="activity-list"
                      itemLayout="horizontal"
                      dataSource={[
                        { user: 'John Doe', action: 'placed an order', time: '2 hours ago' },
                        { user: 'Jane Smith', action: 'updated their profile', time: '3 hours ago' },
                        { user: 'Bob Johnson', action: 'submitted a review', time: '5 hours ago' },
                      ]}
                      renderItem={item => (
                        <List.Item className="activity-item">
                          <List.Item.Meta
                            avatar={<Avatar icon={<UserOutlined />} />}
                            title={item.user}
                            description={item.action}
                          />
                          <div className="activity-time">{item.time}</div>
                        </List.Item>
                      )}
                    />
                  )
                }
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;