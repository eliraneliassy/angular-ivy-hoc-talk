import { Component, ɵrenderComponent, Injector, ɵComponentType } from '@angular/core';

@HOC
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
      ɵrenderComponent(FeatureComponent, { host: 'my-container', injector: this.injector });
    });
  }
}

export function HOC(cmpType) {
  const originalFactory = cmpType.ngComponentDef.factory;
  cmpType.ngComponentDef.factory = (...args) => {
    const cmp = originalFactory(...args);
    console.log(cmp);
    return cmp;
  };
  return cmpType;
}
