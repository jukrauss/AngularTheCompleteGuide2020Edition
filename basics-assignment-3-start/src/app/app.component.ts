import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
    .aboveFive {
        color: white
    }
    `]
})
export class AppComponent {
  detailsVisible = false;
  toggleLog = [];
  toggleCounter = 0;

  toggleDetailVisibility(){
    if (this.detailsVisible == true) {
      this.detailsVisible = false;
      this.toggleLog.push(this.toggleCounter++);
    } else {
      this.detailsVisible = true;
      this.toggleLog.push(this.toggleCounter++);
    }
  }

  getColor(entry:number){
    return this.toggleLog[entry] > 4 ? 'blue' : 'white';
  }

}
