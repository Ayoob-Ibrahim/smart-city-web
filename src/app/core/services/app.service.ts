import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class AppService {

  readonly controlsState = new BehaviorSubject<boolean>(false);
}
