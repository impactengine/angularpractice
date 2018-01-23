import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name:'',
    email:'',
    phone:''
  }

  onSubmit({value, valid}){
    if(valid){
      console.log(value);
    }else{
      console.log('Form is invalid');
    }
  }
}
