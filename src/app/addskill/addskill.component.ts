import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

data={
  name:'',
  phone:'',
  skill:'',
  province:'',
  price:'',
  comment:''
}
 email:string='';
  Uid:any;
itemList:AngularFireList<any>
  constructor( private fire:AngularFireAuth , public db:AngularFireDatabase , public router:Router) { 
    this.itemList = db.list('skill')
  
  
    let user=localStorage.getItem('email')
    this.email=user
    console.log(user)

    this.Uid =localStorage.getItem('uid')
   // this.fire.authState.subscribe(auth=>{
    //  if(auth){
    //    this.uid=auth.uid
    //  }
    //})


  }
  
 

  ngOnInit() {

  }

  isertskill(){
    this.itemList.push({
      name:this.data.name,
      phone:this.data.phone,
      skill:this.data.skill,
      province:this.data.province,
      price:this.data.price,
      comment:this.data.comment,
      email:this.email,
      uid:this.Uid
    })
    this.router.navigate(['/myskill'])
  }

  
}
