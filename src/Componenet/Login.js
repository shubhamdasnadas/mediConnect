import React, { useState } from 'react';
import { Button, Form, Input, Divider } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

export const Login = (props) => {
  const [rule, setRule] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  })
  const handleMobile = (e) => {
    if (e.target.value.length > 10) {
    //   alert("Enter your valid number");
      setRule(true);
      setMessage("Enter a Valid Number");
    } else {
      setRule(false);
      setMessage("");
    }
  };

  const renderOtherSignIn = (
    <div>
      <Divider>
        <span className="text-muted font-size-base font-weight-normal">
          or connect with
        </span>
      </Divider>
      <div className="d-flex justify-content-center">
        <Button className="mr-2">Google</Button>
        <Button>Facebook</Button>
      </div>
    </div>
  );

  return (
    <div
      className="bg-primary d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: 300,
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <Form layout="vertical" name="login-form" style={{ lineHeight: '1.5' }}>
          <Form.Item name="mobile" label="Mobile No">
            <Input
              prefix={<MailOutlined className="text-primary" />}
              value={formData.mobile}
              onChange={(e) =>{ handleMobile(e); setFormData({...formData, mobile: e.target.value})}}
            />
            {rule && (
              <p
                style={{
                  color: 'red',
                  fontSize: '15px',
                  textAlign: 'left',
                  margin: 0, // Ensures no extra space
                  padding: 0, // Removes any padding
                  lineHeight: '1.5', // Keeps text compact
                }}
              >
                {message}
              </p>
            )}
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined className="text-primary" />} onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
        {renderOtherSignIn}
      </div>
    </div>
  );
};

export default Login;