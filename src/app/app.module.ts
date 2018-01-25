import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { AppComponent } from './app.component';
import { KillerListComponent } from './killer-list/killer-list.component';
import { KillerComponent } from './killer/killer.component';
import { KillActionComponent } from './kill-action/kill-action.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

// local routes -> put it in own file
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'killerapp',
        component: KillerComponent,
        pathMatch: 'full'
    }
    {
        path: '**',
        component: KillerComponent
    }
];

// put routes into router
const routerModule = RouterModule.forRoot(routes);

@NgModule({
    declarations: [
        AppComponent,
        KillerListComponent,
        KillerComponent,
        KillActionComponent,
        NavigationComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        routerModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}