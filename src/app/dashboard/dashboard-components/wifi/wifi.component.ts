import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {
  @Input('wifiData')wifiData={
    iscard:true,
    data:{
      hotspots:102,
      activeSpots:89,
      connectedDevices:5334
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
