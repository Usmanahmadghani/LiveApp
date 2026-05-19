import { Component } from '@angular/core';
import {FormControl,FormGroup,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnigApp';
  loginForm=new FormGroup({
    user: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('')
  })
  // loginuser(){
  //   console.warn(this.loginForm.value);
  // }
  //name:any;
//   data="x";
//   updatedata(item:string){
// console.warn(item)
// this.data=item;
//   }
userLogin(item:any){
console.warn(item);

}

}
