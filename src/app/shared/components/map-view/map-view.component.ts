import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  map: Map | undefined;

  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([80.2555, 13.0730]), // Replace with your coordinates
        zoom: 20 // Adjust zoom level to cover 1 km area
      })
    });

    this.addPins();
  }

  addPins(): void {
    const locations = [
      { lon: 80.2555, lat: 13.0730, color: 'red' }, // Main Entrance
      { lon: 80.2552, lat: 13.0732, color: '#5e51b5' }, // Block A
      { lon: 80.2550, lat: 13.0731, color: '#5e51b5' }, // Block B
      { lon: 80.2553, lat: 13.0729, color: '#5e51b5' }, // Block C
      { lon: 80.2551, lat: 13.0728, color: '#5e51b5' }, // Children's Play Area
      { lon: 80.2554, lat: 13.0727, color: '#5e51b5' } // Swimming Pool
    ];

    const features = locations.map(location => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([location.lon, location.lat]))
      });

      feature.setStyle(new Style({
        image: new Icon({
          color: location.color,
          crossOrigin: 'anonymous',
          src: 'https://openlayers.org/en/latest/examples/data/dot.png'
        })
      }));

      return feature;
    });

    const vectorSource = new VectorSource({
      features: features
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    this.map?.addLayer(vectorLayer);
  }

}



