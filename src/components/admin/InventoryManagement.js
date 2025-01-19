import React from 'react';
import {
  Table, Card, Tag, Button, Space,
  Modal, Form, InputNumber, Upload,
  message, Alert
} from 'antd';
import { UploadOutlined, WarningOutlined } from '@ant-design/icons';
import './InventoryManagement.css'; // Link to the new CSS file

const InventoryManagement = () => {
  const [form] = Form.useForm();
  const [bulkUpdateVisible, setBulkUpdateVisible] = React.useState(false);

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left', // Ensures column stays visible during horizontal scrolling
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: 'Current Stock',
      dataIndex: 'stock',
      key: 'stock',
      render: (stock) => (
        <span>
          {stock}
          {stock < 10 && (
            <WarningOutlined style={{ color: 'red', marginLeft: 8 }} />
          )}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'stock',
      key: 'status',
      render: (stock) => (
        <Tag color={stock > 10 ? 'green' : stock > 0 ? 'orange' : 'red'}>
          {stock > 10 ? 'In Stock' : stock > 0 ? 'Low Stock' : 'Out of Stock'}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleUpdateStock(record)}>
            Update Stock
          </Button>
          <Button type="link" onClick={() => showHistory(record)}>
            View History
          </Button>
        </Space>
      ),
    },
  ];

  const handleUpdateStock = (record) => {
    Modal.confirm({
      title: 'Update Stock Level',
      content: (
        <Form form={form}>
          <Form.Item
            name="stock"
            label="New Stock Level"
            rules={[{ required: true }]}
          >
            <InputNumber min={0} />
          </Form.Item>
        </Form>
      ),
      onOk: async () => {
        const formValues = await form.validateFields();
        console.log('Updating stock with values:', formValues);
        message.success('Stock updated successfully');
      },
    });
  };

  const showHistory = (record) => {
    Modal.info({
      title: 'Inventory History',
      width: 600,
      content: (
        <Table
          columns={[
            { title: 'Date', dataIndex: 'date' },
            { title: 'Action', dataIndex: 'action' },
            { title: 'Quantity', dataIndex: 'quantity' },
            { title: 'User', dataIndex: 'user' },
          ]}
          dataSource={[]} // Replace with actual data
          pagination={{ pageSize: 5 }}
        />
      ),
    });
  };

  const handleBulkUpload = (file) => {
    message.info('Processing bulk stock update...');
    return false;
  };

  return (
    <div className="inventory-management">
      <Card className="inventory-card">
        <div className="inventory-actions">
          <Button
            type="primary"
            onClick={() => setBulkUpdateVisible(true)}
            style={{ marginRight: 8 }}
          >
            Bulk Update Stock
          </Button>
          <Upload
            accept=".csv,.xlsx"
            beforeUpload={handleBulkUpload}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>
              Import Stock Data
            </Button>
          </Upload>
        </div>

        <Alert
          message="Low Stock Alert"
          description="5 products are running low on stock. Please review and update inventory."
          type="warning"
          showIcon
          className="low-stock-alert"
        />

        <Table
          className="inventory-table"
          columns={columns}
          dataSource={[]} // Replace with actual data
          scroll={{ x: 900 }} // Enables horizontal scrolling on smaller screens
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>
                Last updated: {record.lastUpdated}
                <br />
                Location: {record.location}
                <br />
                Notes: {record.notes}
              </p>
            ),
          }}
        />
      </Card>

      <Modal
        title="Bulk Stock Update"
        open={bulkUpdateVisible}
        onCancel={() => setBulkUpdateVisible(false)}
        footer={null}
      >
        <Upload.Dragger
          accept=".csv,.xlsx"
          beforeUpload={() => false}
          multiple={false}
        >
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single CSV or Excel file upload.
          </p>
        </Upload.Dragger>

        <div style={{ marginTop: 16 }}>
          <Button type="link">Download Template</Button>
        </div>
      </Modal>
    </div>
  );
};

export default InventoryManagement;
