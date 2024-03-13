import React, { useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";
import './styles/EventStyleForBtn.css';
import EventForm from '../components/EventForm';
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";

const Event = () => {
    const [modalVisible, setModalVisible] = useState(false)
    // За допомогою useActions можна отримати потрібний ActionCreator
    const {fetchGuests, createEvent, fetchEvents} = useActions();
    const {guests, events} = useSelector(state => state.isEvent)
    const {user} = useSelector(state => state.isAuth)

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username);
    }, [])

    const addNewEvent = (event) => {
        setModalVisible(false)
        createEvent(event)
    }

    return (
        <Layout>
            <EventCalendar events={events}/>
            <Row className="ForRowBtn">
                <Button onClick={() => setModalVisible(true)}>
                    Add Event Listener
                </Button>
            </Row>
            <Modal
                title="Add Event"
                visible={modalVisible}
                // Щоб прибрати вбудовані кнопки з "antd".
                footer={null}
                // Для закриття модалки при натиснені на темну зону або на хрестик.
                onCancel={() => setModalVisible(false)}
            >
                <EventForm 
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;