import React, { useState, useEffect } from 'react';
import { 
  Table, Tag, Space, Button, Modal, 
  Card, Typography, Descriptions, message 
} from 'antd';
import { PrinterOutlined, DownloadOutlined } from '@ant-design/icons';

const { Title } = Typography;

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  useEffect(() => {
    setOrders([
      {
        id: 'ORD001',
        customer: 'John Doe',
        date: '2024-01-15',
        total: 299.99,
        status: 'pending',
        items: [
          { name: 'Product A', quantity: 2, price: 149.99 },
          { name: 'Product B', quantity: 1, price: 99.99 }
        ]
      },
      {
        id: 'ORD002',
        customer: 'Jane Smith',
        date: '2024-01-16',
        total: 199.99,
        status: 'shipped',
        items: [
          { name: 'Product C', quantity: 1, price: 199.99 }
        ]
      }
    ]);
  }, []);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setDetailsVisible(true);
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    message.success(`Order ${orderId} status updated to ${newStatus}`);
  };

  const handlePrint = (order) => {
    message.info(`Printing order ${order.id}`);
  };

  const handleDownload = (order) => {
    message.info(`Downloading order ${order.id}`);
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Order Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total) => `$${total.toFixed(2)}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <Space>
          <Tag color={
            status === 'completed' ? 'success' :
            status === 'shipped' ? 'processing' :
            status === 'pending' ? 'warning' : 'default'
          }>
            {status.toUpperCase()}
          </Tag>
          <Button 
            size="small"
            onClick={() => handleStatusChange(record.id, 
              status === 'pending' ? 'shipped' : 
              status === 'shipped' ? 'completed' : 'pending'
            )}
          >
            Update Status
          </Button>
        </Space>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleViewDetails(record)}>
            View Details
          </Button>
          <Button type="primary" icon={<PrinterOutlined />} onClick={() => handlePrint(record)}>
            Print
          </Button>
          <Button icon={<DownloadOutlined />} onClick={() => handleDownload(record)}>
            Download
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Card title={<Title level={2}>Order Management</Title>}>
      <Table
        dataSource={orders}
        columns={columns}
        rowKey="id"
      />
      {selectedOrder && (
        <Modal
          title={`Order Details - ${selectedOrder.id}`}
          open={detailsVisible}
          onCancel={() => setDetailsVisible(false)}
          footer={[
            <Button key="close" onClick={() => setDetailsVisible(false)}>
              Close
            </Button>
          ]}
        >
          <Descriptions bordered>
            <Descriptions.Item label="Customer" span={3}>{selectedOrder.customer}</Descriptions.Item>
            <Descriptions.Item label="Date" span={3}>{selectedOrder.date}</Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              <Tag color={
                selectedOrder.status === 'completed' ? 'success' :
                selectedOrder.status === 'shipped' ? 'processing' :
                selectedOrder.status === 'pending' ? 'warning' : 'default'
              }>
                {selectedOrder.status.toUpperCase()}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Total" span={3}>${selectedOrder.total.toFixed(2)}</Descriptions.Item>
          </Descriptions>
        </Modal>
      )}
    </Card>
  );
};

export default OrderManagement;