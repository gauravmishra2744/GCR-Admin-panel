import React, { useState } from 'react';
import { Table, Card, Space, Button, Modal, Form, Input, message } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import './styles/customer-management.css';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Total Orders',
      dataIndex: 'totalOrders',
      key: 'totalOrders',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            icon={<EyeOutlined />} 
            onClick={() => viewCustomerDetails(record)}
          />
          <Button 
            icon={<EditOutlined />} 
            onClick={() => editCustomer(record)}
          />
          <Button 
            icon={<DeleteOutlined />} 
            danger 
            onClick={() => deleteCustomer(record.id)}
          />
        </Space>
      ),
    },
  ];

  const viewCustomerDetails = (customer) => {
    setSelectedCustomer(customer);
    setIsModalVisible(true);
  };

  const editCustomer = (customer) => {
    setSelectedCustomer(customer);
    form.setFieldsValue(customer);
    setIsModalVisible(true);
  };

  const deleteCustomer = (customerId) => {
    // API call to delete customer
    setCustomers(customers.filter(customer => customer.id !== customerId));
    message.success('Customer deleted successfully');
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      if (selectedCustomer) {
        // Update existing customer
        setCustomers(customers.map(c => 
          c.id === selectedCustomer.id ? { ...c, ...values } : c
        ));
      } else {
        // Add new customer
        setCustomers([...customers, { id: Date.now(), ...values }]);
      }
      setIsModalVisible(false);
      form.resetFields();
      setSelectedCustomer(null);
      message.success('Customer saved successfully');
    } catch (error) {
      message.error('Please check the form fields');
    }
  };

  return (
    <div className="customer-management">
      <Row gutter={[16, 16]} className="dashboard-stats">
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card">
            <Statistic
              title="Total Customers"
              value={customers.length}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card">
            <Statistic
              title="Active Customers"
              value={customers.filter(c => c.status === 'active').length || 0}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card">
            <Statistic
              title="Average Order Value"
              value={856}
              prefix="₹"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card">
            <Statistic
              title="Customer Satisfaction"
              value={4.8}
              suffix="/5"
              prefix={<StarOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Card
        title="Customer Management"
        extra={
          <Button 
            type="primary" 
            icon={<UserOutlined />}
            onClick={() => {
              setSelectedCustomer(null);
              form.resetFields();
              setIsModalVisible(true);
            }}
          >
            Add Customer
          </Button>
        }
      >
        <Table 
          columns={columns} 
          dataSource={customers}
          rowKey="id"
        />
      </Card>

      <Modal
        title={selectedCustomer ? "Edit Customer" : "Add Customer"}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
          setSelectedCustomer(null);
        }}
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Customer Name"
            rules={[{ required: true, message: 'Please input customer name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please input phone number!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CustomerManagement;