import React, { Fragment } from 'react';
import Map from '../components/Map';
import Spinner from '../components/Spinner';

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            mapVisible: false,
            visbleIndex: -10
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500)
        setTimeout(() => {
            this.setState({
                mapVisible: true
            })
        }, 1500);
        setInterval(() => {
            this.setState({
                visbleIndex: this.state.visbleIndex + 1,
            })
        }, 200)
    }

    render() {
        return (
            <main className={this.state.loading ? 'loading' : ''}>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <Fragment>
                    <Map
                        center={{ lat: 53.5458793, lng: 9.9943581 }}
                        containerElement={<div className={`c-map ${this.state.mapVisible ? 'c-map--visible' : ''}`} style={{ position: 'fixed', height: '100vh', width: '65vw' }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                    <section className="c-main-content">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((__, i) => (
                            <div className={`c-event-container ${this.state.visbleIndex >= i ? 'c-event-container--visible' : ''}`}>{i}</div>
                        ))}
                    </section>
                </Fragment>}
            </main>
        )
    }
}
