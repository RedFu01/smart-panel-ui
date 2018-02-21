import React, { Fragment } from 'react';
import Map from '../components/Map';
import Spinner from '../components/Spinner';
import EventTeaser from '../components/EventTeaser';
import events from '../constants/events';
import route from '../constants/route';

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            mapVisible: false,
            visbleIndex: -10
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1500);
        setTimeout(() => {
            this.setState({
                mapVisible: true
            });
        }, 1500);
        setInterval(() => {
            this.setState({
                visbleIndex: this.state.visbleIndex + 1,
            });
        }, 200);
    }

    render() {
        return (
            <main className={this.state.loading ? 'loading' : ''}>
                {this.state.loading && <Spinner />}
                {!this.state.loading &&
                    <Fragment>
                        <Map
                            route={route}
                            center={{ lat: 53.5458793, lng: 9.9943581 }}
                            containerElement={<div className={`c-map ${this.state.mapVisible ? 'c-map--visible' : ''}`} style={{ position: 'fixed', height: '100vh', width: '65vw' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                        />
                        <section className="c-main-content">
                            {events.map((event, i) => (
                                <EventTeaser
                                    {...event}
                                    visible={this.state.visbleIndex >= i}
                                />
                            ))}
                        </section>
                    </Fragment>}
            </main>
        )
    }
}
