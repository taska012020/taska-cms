import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
declare var firebase ;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signup(username ,email  ,password){
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
      console.log("successfull")
      this.router.navigateByUrl('/home')
    })

  }

}
