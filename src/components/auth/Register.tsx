import { Form, Input, Button, Select } from 'antd';
import registerUser from "../../utils/auth/registration";

const Register = () => {
    const handleRegister = async (values: any) => {
        const { email, username, password, type } = values;
        await registerUser(email, username, password, type);
    };

    return (
        <>
            <Form
                name="register"
                layout="vertical"
                initialValues={{ type: 'tenants' }}
                onFinish={handleRegister}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please enter a username' }]}
                >
                    <Input placeholder="Enter username" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter an email' },
                        { type: 'email', message: 'Please enter a valid email' }
                    ]}
                >
                    <Input placeholder="Enter email" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter a password' }]}
                >
                    <Input.Password placeholder="Enter password" />
                </Form.Item>

                <Form.Item label="User Type" name="type">
                    <Select
                        options={[
                            { value: 'tenants', label: 'Tenant' },
                            { value: 'landlords', label: 'Landlord' },
                        ]}
                    />
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Register;
