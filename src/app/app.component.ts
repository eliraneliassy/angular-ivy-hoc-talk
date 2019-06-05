import { Component, ɵrenderComponent, Injector, ɵɵdirectiveInject, INJECTOR } from '@angular/core';

@LazyComponent({
  path: './feature/feature/feature.component',
  component: 'FeatureComponent',
  host: 'my-container'
})
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

  afterViewLoad() {
    console.log('Lazy HOC loaded!');
  }
}

export function LazyComponent(config: { path: string, component: string, host?: string }) {
  return (cmpType) => {
    const originalFactory = cmpType.ngComponentDef.factory;
    cmpType.ngComponentDef.factory = (...args) => {
      const cmp = originalFactory(...args);
      console.log(cmp);

      const injector = ɵɵdirectiveInject(INJECTOR);

      import(`${config.path}`).then(m => {
        ɵrenderComponent(m[config.component], { host: config.host, injector });

        if (cmp.afterViewLoad) {
          cmp.afterViewLoad();
        }
      });
      return cmp;
    };
    return cmpType;
  };
}
