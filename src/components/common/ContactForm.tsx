'use client'

import { Form, Input, Button, message } from 'antd'
import { useState } from 'react'

const { TextArea } = Input

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      console.log('Form values:', values)
      await new Promise(resolve => setTimeout(resolve, 1000))
      message.success('Thank you! We will get back to you soon.')
      form.resetFields()
    } catch (error) {
      message.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input size="large" placeholder="Your name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]}
      >
        <Input size="large" placeholder="your@email.com" />
      </Form.Item>

      <Form.Item
        label="Company"
        name="company"
      >
        <Input size="large" placeholder="Your company" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please enter your message' }]}
      >
        <TextArea rows={4} placeholder="Tell us about your project" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" loading={loading} block>
          Send Message
        </Button>
      </Form.Item>
    </Form>
  )
}