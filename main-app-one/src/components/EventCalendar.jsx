import React from "react";
import { Calendar } from "antd";
import { formatDate } from "../utiles/date";

const EventCalendar = (props) => {

    const dateCellRender = (value) => {
        // Перетворення дати до того формату з яким необхідно працювати
        const formatedDate = formatDate(value.toDate());
        // Використовується функція 'filter', оскільки на одну дату може бути кілька подій, 
        // тому потрібно отримати масив подій щоб відмалювати зразу всі
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
          <div>
            {currentDayEvents.map((ev, index) => 
                <div key={index}>{ev.description}</div>
            )}
          </div>
        );
      };

    return (
        <Calendar
            dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;