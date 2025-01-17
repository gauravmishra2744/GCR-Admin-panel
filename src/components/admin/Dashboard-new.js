import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Row, Col, Button, Progress, Timeline, List, Avatar, Tooltip, Tabs, Radio, DatePicker, Statistic } from 'antd';
import { Area, Column } from '@ant-design/plots';
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
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
      trend: 8.4,
    },
    {
      title: 'Revenue',
      value: stats.revenue,
      prefix: '$',
      icon: <RiseOutlined className="stat-icon" style={{ color: '#fa8c16' }} />,
      trend: 15.2,
    }
  ];

  const chartData = {
    data: [
      { date: '2023-01', value: 3500 },
      { date: '2023-02', value: 4200 },
      { date: '2023-03', value: 3800 },
      { date: '2023-04', value: 5100 },
      { date: '2023-05', value: 4800 },
      { date: '2023-06', value: 6300 },
      { date: '2023-07', value: 5900 },
    ],
    xField: 'date',
    yField: 'value',
    smooth: true,
    areaStyle: {
      fill: 'l(270) 0:#ffffff00 1:#1890ff',
    },
  };

  const recentActivity = [
    {
      title: 'New order received',
      time: '5 minutes ago',
      icon: <ShoppingCartOutlined style={{ color: '#1890ff' }} />,
    },
    {
      title: 'New customer registered',
      time: '12 minutes ago',
      icon: <UserOutlined style={{ color: '#52c41a' }} />,
    },
    {
      title: 'Product stock updated',
      time: '45 minutes ago',
      icon: <ShoppingOutlined style={{ color: '#722ed1' }} />,
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-stats">
        {statsCards.map((stat, index) => (
          <Card 
            key={index}
            loading={loading}
            className="stat-card hover-scale"
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">
              {stat.prefix}{stat.value.toLocaleString()}
            </div>
            <div className="stat-label">{stat.title}</div>
            <div className={`stat-trend ${stat.trend > 0 ? 'trend-up' : 'trend-down'}`}>
              {stat.trend > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              {Math.abs(stat.trend)}%
            </div>
          </Card>
        ))}
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <div className="chart-container">
            <div className="chart-header">
              <h3 className="chart-title">Sales Overview</h3>
              <div className="chart-actions">
                <Button type="text">Weekly</Button>
                <Button type="text">Monthly</Button>
                <Button type="primary">Yearly</Button>
              </div>
            </div>
            <Area {...chartData} />
          </div>
        </Col>
        
        <Col xs={24} lg={8}>
          <div className="recent-activity">
            <h3 className="chart-title">Recent Activity</h3>
            {recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">
                  {activity.icon}
                </div>
                <div className="activity-content">
                  <div className="activity-title">{activity.title}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;