import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import './styles/navbarStyle.css';
import { formatDate } from "../utiles/date";
import { useSelector } from "react-redux";
import { rules } from "../utiles/rules";

const EventForm = (props) => {
    const [event, setEvent] = useState({
        author: '',
        date: '',
        description: '',
        guest: ''
    })

    const {user} = useSelector(state => state.isAuth)

    const selectDate = (date) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }
    
    return (
        <Form onFinish={submitForm}>
            {/* Choose Description/Name */}
            <Form.Item
                label="Description of the event"
                name="Description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({...event, description: e.target.value})}
                    value={event.description}
                />
            </Form.Item>
            {/* Choose Date */}
            <Form.Item
                label="Date of the event"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            {/* Випадаючий список користувачів */}
            <Form.Item
                label="User of the event"
                name="user"
                rules={[rules.required()]}
            >
                <Select onChange={(guest) => setEvent({...event, guest})}> {/* Форма є керованою */}
                    {props.guests.map(guest => (
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            {/* Button in modal */}
            <Row className="forRowEve">
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;