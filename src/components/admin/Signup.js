import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import './styles/signup.css';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (values) => {
    console.log('Form Values:', values);
    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      alert('Signup successful!');
      navigate('/profile'); // Redirect to profile after signup
    }, 2000);
  };

  return (
    <div className="signup-container">
      <Card className="signup-card">
        <h1 className="signup-title">Sign Up</h1>
        <Form
          name="signup"
          layout="vertical"
          onFinish={handleSignup}
          className="signup-form"
        >
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: 'Please enter your email address' },
              { type: 'email', message: 'Please enter a valid email address' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please enter a password' }]}
          >
            <Input.Password placeholder="Enter a password" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className="signup-button"
          >
            Sign Up
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
