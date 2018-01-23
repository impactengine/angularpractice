import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = '';
  users:string[] = ['John Doe', 'Mary Swanson', 'Kevin Smith'];

  onSubmit(){
    this.users.push(this.name);
    this.name = '';
  }
}
