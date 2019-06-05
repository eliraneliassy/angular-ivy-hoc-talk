
import { Component, OnInit, Inject } from '@angular/core';
import { APP_NAME } from 'src/app/app.module';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor(@Inject(APP_NAME) public appName: string) { }

  ngOnInit() {
    console.log(this.appName);
  }

}
