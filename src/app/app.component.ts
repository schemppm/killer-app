import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    killed = false;
    killButtonText = 'Kill me!';
    killer: any = 'Jason Vorhees';
    title: any = 'Welcome to Camp Crystal Lake';

    buttonClick() {
        if (this.killed === true) {
            this.killed = false;
            this.killButtonText = 'Kill me!';
        } else {
            this.killed = true;
            this.killButtonText = 'Revive me!';
        }
    }

    freddyButtonClick(){
        this.killer = 'Freddy Krueger';
    }

    jasonButtonClick(){
        this.killer = 'Jason Vorhees';
    }

    michaelButtonClick(){
        this.killer = 'Michael Myers';
    }

    chuckyButtonClick(){
        this.killer = 'Chucky';
    }
}
