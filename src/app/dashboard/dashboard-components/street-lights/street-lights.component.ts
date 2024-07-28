import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-street-lights',
  templateUrl: './street-lights.component.html',
  styleUrls: ['./street-lights.component.scss']
})
export class StreetLightsComponent implements OnInit {
  @Input('strLightData')strLights={
    iscard:true,
    data:{
      total:1128,
      function:986 ,
      notFunciton:142
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
