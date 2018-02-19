import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import mapStyles from '../constants/mapStyles';

const Map = withGoogleMap(props =>
    (<GoogleMap
        defaultZoom={15}
        defaultCenter={props.center}
        options={{
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            streetViewControl: false,
            styles: mapStyles
        }}
    />));


export default Map;
