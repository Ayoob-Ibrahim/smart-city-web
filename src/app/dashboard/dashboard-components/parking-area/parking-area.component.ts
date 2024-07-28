import { Component, OnInit } from '@angular/core';
interface ParkingSpot {
  id: number;
  location: string;
  status: string;
}

interface ParkingLot {
  id: number;
  name: string;
  capacity: number;
}

interface ParkingLight {
  id: number;
  status: string;
}

interface SignBoard {
  id: number;
  message: string;
}
@Component({
  selector: 'app-parking-area',
  templateUrl: './parking-area.component.html',
  styleUrls: ['./parking-area.component.scss']
})
export class ParkingAreaComponent implements OnInit {


  parkingData={
    spots:120,
    parkingOther:[{
      label:'Parking Meters',
      value:24
    },{
      label:'Parking Lots',
      value:53
    },{
      label:'Sign Boards',
      value:36
    },{
      label:'parking Lights',
      value:12
    }]
  }
  constructor() { }

  ngOnInit(): void { }

}
