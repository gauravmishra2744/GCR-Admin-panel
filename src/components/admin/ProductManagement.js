import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();

  // Combined edit handler - no duplicate declaration
  const handleEdit = (record) => {
    setEditingProduct(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (productId) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      onOk() {
        setProducts(products.filter(product => product.id !== productId));
        message.success('Product deleted successfully');
      },
    });
  };

  const handleModalOk = () => {
    form.validateFields()
      .then(values => {
        if (editingProduct) {
          setProducts(products.map(product =>
            product.id === editingProduct.id ? { ...product, ...values } : product
          ));
          message.success('Product updated successfully');
        } else {
          const newProduct = {
            id: Date.now(),
            ...values,
          };
          setProducts([...products, newProduct]);
          message.success('Product added successfully');
        }
        setIsModalVisible(false);
        form.resetFields();
        setEditingProduct(null);
      });
  };

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>Edit</Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)} style={{ marginBottom: 16 }}>
        Add Product
      </Button>
      <Table columns={columns} dataSource={products} rowKey="id" />
      <Modal
        title={editingProduct ? "Edit Product" : "Add Product"}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
          setEditingProduct(null);
        }}
      >
        <Form form={form}>
          <Form.Item
            name="name"
            label="Product Name"
            rules={[{ required: true, message: 'Please input product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input price!' }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductManagement;