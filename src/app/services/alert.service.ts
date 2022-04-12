import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../common/interfaces/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alert$ = new Subject<Alert>()

  constructor() { }

  success(text: string) {
    this.alert$.next({type: 'success', text})
  }
  error(text: string) {
    this.alert$.next({type: 'error', text})
  }
}
