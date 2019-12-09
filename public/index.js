import React from 'react';
import L from 'leaflet';
import 'leaflet-css/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width = ${props => props.width};
    height = ${props => props.height};
    `;

export default class Map extends React.Component{

    componentDidMount(){
        this.map = L.map('map', {
            center: [44.823205, 20.450480],
            zoom: 14,
            zoomControl: false
        });

        L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=5f7TKbOgl9fetrY1Npka',{
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17
        }).addTo(this.map);

        const marker = L.marker([44.823205, 20.450480]).addTo(this.map);
        marker.bindPopup("<b>Kalemegdan</b><br>Beograd").openPopup();
        const circle = L.circle([44.823205,20.450480], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 500
		}).addTo(this.map);
    }

    render(){
        return <Wrapper width='100px' height='100px' id='map'/>
    }
}