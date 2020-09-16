import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string
  usernameIsEmpty = true;

  onResetUsername() {
    this.username = '';
  }

  onUpdateUsername(event: Event) {
    if(this.username==''){
      this.usernameIsEmpty = true;
    }else{
      this.usernameIsEmpty = false;
    }
  }

}
