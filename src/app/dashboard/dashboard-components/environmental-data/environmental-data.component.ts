import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environmental-data',
  templateUrl: './environmental-data.component.html',
  styleUrls: ['./environmental-data.component.scss']
})
export class EnvironmentalDataComponent implements OnInit {

  constructor() { }
  iscard: true;
  ngOnInit(): void {
  }


  data = [
    { svg: "thermo_svg", type: 'Temperature', value: '19.6 C' },
    { svg: "volume_svg", type: 'Noise', value: '60.0 DB' },
    { svg: "drop_svg", type: 'Humidtity', value: '47.5%' },
    { svg: "cloud_svg", type: 'CO', value: '70 PGM' },
    { svg: "molecule_svg", type: 'NO2', value: '61 PGB' },
    { svg: "bulb_svg", type: 'Light', value: '197.7 lx' },
  ]
}
