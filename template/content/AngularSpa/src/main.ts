import { enableProdMode, NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

const bootstrap = () => {
    return platformBrowserDynamic().bootstrapModule(AppModule);
};

const hmrBootstrap = (module: any, bootfunction: () => Promise<NgModuleRef<any>>) => {
    let ngModule: NgModuleRef<any>;
    module.hot.accept();
    bootfunction().then(mod => ngModule = mod);
    module.hot.dispose(() => {
        const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = createNewHosts(elements);
        ngModule.destroy();
        makeVisible();
    });
};

if (module['hot']) {
    hmrBootstrap(module, bootstrap);
} else {
    bootstrap();
}
