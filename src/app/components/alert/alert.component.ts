import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000;
  text!: string;
  type: string = 'success';
  unSubscriber = new Subscription();

  constructor(
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.unSubscriber.add(
      this.alert.alert$.subscribe((alert) => {
      this.text = alert.text;
      this.type = alert.type;
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.text = "";
      }, this.delay)
      })
    )
  }

  ngOnDestroy(): void {
    this.unSubscriber.unsubscribe()
  }

}
