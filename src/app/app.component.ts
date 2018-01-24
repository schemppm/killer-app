import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    killed = false;
    killButtonText = 'Kill me!';
    killer: any = 'Jason Vorhees';
    title: any = 'Welcome to Camp Crystal Lake aka "The Killer-App"';

    buttonClick() {
        if (this.killed === true) {
            this.killed = false;
            this.killButtonText = 'Kill me!';
        } else {
            this.killed = true;
            this.killButtonText = 'Revive me!';
        }
    }

    killerButtonClick(killername: string) {
        this.killer = killername;
    }
}
