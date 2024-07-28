import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.scss']
})
export class CctvComponent implements OnInit {
  @Input('cctvData')cctvData={
    iscard:true,
    data:{
      ipCameras:63,
      activeIPC:61,
      activeEvents:2
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
