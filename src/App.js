import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification, Typography, } from 'antd';
import axios from 'axios';
const App = () => {
  const [formRef] = Form.useForm();
  const onFinish = (values) => {
    axios.post('https://polyester-cloudy-purpose.glitch.me/createBlog', values).then((res) => {
      console.log(res);
      notification.success({
        message: 'Success',
        description: 'Blog Created Successfully',
      });
      formRef.resetFields();
    }
    ).catch((err) => {
      notification.error({
        message: 'Error',
        description: 'Something went wrong',
      });
    }
    );
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Form
  form={formRef}
name="normal_login"
        className="login-form"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
      >
        <Typography.Title level={2}>Create a new Blog</Typography.Title>
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input your Description',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Description" />
        </Form.Item>
        <Form.Item
          name="htmlContent"
          rules={[
            {
              required: true,
              message: 'Please enter your HTML Content',
            },
          ]}
        >
          <Input.TextArea prefix={<UserOutlined className="site-form-item-icon" />} placeholder="HTML Content OF Blog" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;