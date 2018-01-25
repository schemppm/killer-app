import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { KillerListComponent } from './killer-list/killer-list.component';
import { KillerComponent } from './killer/killer.component';
import { KillActionComponent } from './kill-action/kill-action.component';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        KillerListComponent,
        KillerComponent,
        KillActionComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}