import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email:string='';
 password:string='';
 uid:any;
  constructor(private fire:AngularFireAuth, private router:Router) { }

 
  ngOnInit() {
  }

  
mylogin(){
  this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
 .then(user =>{
   localStorage.setItem('isLoggedIn' , 'true')
   localStorage.setItem('email' , this.fire.auth.currentUser.email)
   this.fire.authState.subscribe(auth=>{
    if(auth){
     localStorage.setItem('uid', auth.uid)
    }
  })
   this.router.navigate(['addskill'])
 })
 .catch(error=>{
 }) 
}

}

