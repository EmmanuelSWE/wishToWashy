import { Form, Input, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthActions, useAuthState } from "../../providers/authProvider";
import useRegStyles from './style';

const Register = () => {
    const navigate=useNavigate();
    const {register}=useAuthActions();
    const {isPending,isSuccess,isError}=useAuthState()
    const {styles} =useRegStyles();

    const handleRegister = async (values: any) => {
        const { email, username, password, type } = values;
        await register(email,username,password,type);
        navigate("/home");
    };

   

    return (
        <div style={{ width: '100dvw' }} className={styles.wrapper}>
            <Form
                className={styles.Form}
                name="register"
                layout="vertical"
                initialValues={{ type: 'landlords' }}
                onFinish={handleRegister}
            >
                <Form.Item
                    className={styles.label}
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please enter a username' }]}
                >
                    <Input placeholder="Enter username" />
                </Form.Item>

                <Form.Item
                    className={styles.label}
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
                    className={styles.label}
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
                    <Button type="primary" htmlType="submit" block disabled={isPending}>
                        {isPending?"Registering...":"Register"}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
