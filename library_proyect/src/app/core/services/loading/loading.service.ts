import { Injectable } from '@angular/core';
import { BehaviorSubject,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public showloading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  public showLoading () {
    this.showloading$.next(true);
  }
  public hideLoading () {
    this.showloading$.next(false);
  }

}
