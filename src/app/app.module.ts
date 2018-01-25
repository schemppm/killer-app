import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KillerListComponent } from './killer-list/killer-list.component';
import { KillerComponent } from './killer/killer.component';
import { KillActionComponent } from './kill-action/kill-action.component';

@NgModule({
    declarations: [
        AppComponent,
        KillerListComponent,
        KillerComponent,
        KillActionComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}