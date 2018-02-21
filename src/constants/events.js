import moment from 'moment';

export default [
    {
        id: 0,
        name: 'Get Up',
        startTime: moment('2018-22-02 8:00'),
        endTime: moment('2018-22-02 8:00'),
        icon: 'clock',
        location: 'Home'
    },
    {
        id: 1,
        name: 'Work',
        startTime: moment('2018-22-02 9:45'),
        endTime: moment('2018-22-02 16:00'),
        location: {
            name: 'Office',
            lat: 53.5479821,
            lng: 9.9949021
        }
    }
];
