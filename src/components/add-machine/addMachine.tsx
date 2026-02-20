import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { useMachineActions } from "../../providers/machineProvider";
import { useAuthState } from "../../providers/authProvider";

const AddMachineModal = () => {
  const [open, setOpen] = useState(false);
  const { createMachine } = useMachineActions();
  const { user } = useAuthState(); 
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    if (!user) return;

    //temp random id
    const machineId:string=Math.floor((Math.random()*1000)).toString();

    const newMachine = {
        name: values.name,
        description: values.description,
        image: values.image,
        house_id: values.house_id || "1",
        landlord_id: "user.id",
        state: "idle",
        id: machineId,
    };

   await createMachine(newMachine);
    setOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Machine
      </Button>

      <Modal
        title="Add New Machine"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Machine Name"
            name="name"
            rules={[{ required: true, message: "Enter machine name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Enter description" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="image"
            rules={[{ required: true, message: "Enter image URL" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="House ID" name="house_id">
            <Input placeholder="Optional house ID" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Machine
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddMachineModal;
