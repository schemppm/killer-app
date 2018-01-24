import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KillerListComponent } from './killer-list/killer-list.component';

@NgModule({
    declarations: [
        AppComponent,
        KillerListComponent
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