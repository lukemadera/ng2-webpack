import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

import { MyIconDemoComponent } from './modules/my-icon-demo/my-icon-demo.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'my-icons', component: MyIconDemoComponent },
            { path: '', component: MyIconDemoComponent },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}