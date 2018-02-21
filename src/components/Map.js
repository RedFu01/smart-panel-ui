import React from 'react';
import { GoogleMap, withGoogleMap, Marker, Polyline } from 'react-google-maps';
import polyline from 'google-polyline';
import mapStyles from '../constants/mapStyles';

const line = 'gpxeIqs`|@{GhEuB|AaA|@YRh@hClA`Hf@tBHb@WNuAr@QLEJyAReBZmAPI@aBBeCZqADcB?KnCGrB';

const positions = polyline.decode(line).map(entry => ({ lat: entry[0], lng: entry[1] }));

const Map = withGoogleMap(props =>
    (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={props.center}
            options={{
                mapTypeControl: false,
                panControl: false,
                zoomControl: false,
                streetViewControl: false,
                styles: mapStyles
            }}
        >
            {props.route.map(point => (
                <Marker
                    key={`marker${point.lat}`}
                    position={point}
                />))}
            <Polyline
                path={positions}
                options={{
                    strokeWeight: 7,
                    strokeColor: '#EB3B5A'
                }}
            />
        </GoogleMap>
    ));


export default Map;
