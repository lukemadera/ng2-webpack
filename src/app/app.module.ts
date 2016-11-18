import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {MyIconModule} from 'ng2-component1';

import { MyIconDemoComponent } from './modules/my-icon-demo/my-icon-demo.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.provideStore({}),
        AppRoutingModule,
        MyIconModule,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        MyIconDemoComponent,
    ],
    providers: [
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
