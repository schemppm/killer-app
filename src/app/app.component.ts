import { Component } from '@angular/core';
import { KillActionService } from './services/kill-action.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [KillActionService]
})
export class AppComponent {

}
