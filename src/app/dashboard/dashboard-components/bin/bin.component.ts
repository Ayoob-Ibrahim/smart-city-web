import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit {
@Input('binData')binData={
  iscard:true,
  data:{
    total:21,
    trash50:18,
    trash75:3
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
