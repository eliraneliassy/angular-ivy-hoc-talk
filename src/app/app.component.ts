import { Component, ɵrenderComponent, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ivy-hoc-talk';
  constructor(private injector: Injector) { }
  loadFeature() {
    import('./feature/feature/feature.component').then(({ FeatureComponent }) => {
      ɵrenderComponent(FeatureComponent, { host: 'my-container', injector: this.injector});
    });
  }
}
