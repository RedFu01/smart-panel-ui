import React from 'react';

const EventTeaser = ({ visible, name }) => (
    <div className={`c-event-container ${visible ? 'c-event-container--visible' : ''}`}>
        {name}
    </div>
);

export default EventTeaser;
