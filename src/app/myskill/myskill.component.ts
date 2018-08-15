import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {

  data={
    name:'',
    phone:'',
    skill:'',
    province:'',
    price:'',
    comment:'',
    email:'',
  }
  email:string;
  myUid:any;

  itemList:AngularFireList<any>

  itemArray=[]
  constructor(  public db:AngularFireDatabase , public router:Router) { 
    this.itemList = db.list('skill')

    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
      let y = action.payload.toJSON()
      y['$key'] = action.key
      this.itemArray.push(y as ListItemClass)
      })
    })

     this.myUid= localStorage.getItem('uid')

  }

  ngOnInit() {
  }


  
editform($key){
  for (let value of this.itemArray){
    if(value['$key'] == $key){
      this.data.name=value['name'];
      this.data.phone=value['phone'];
      this.data.skill=value['skill'];
      this.data.province=value['province'];
      this.data.price=value['price'];
      this.data.comment=value['comment'];
      this.data.email=value['email'];
    }
  }
}
  
onEdit($key){
  this.data.name;
  this.data.phone;
  this.data.skill;
  this.data.province;
  this.data.price;
  this.data.comment;
  this.data.email;
  
  this.itemList.set($key , {
    name:this.data.name,
    phone:this.data.phone,
    skill:this.data.skill,
    province:this.data.province,
    price:this.data.price,
    comment:this.data.comment,
    uid:this.myUid,
    email: this.data.email
  })
  this.itemArray=[]
  this.router.navigate(['myskill/'])
}
  Delete($key){
    this.itemList.remove($key);
    this.itemArray=[]
  }

}

export class ListItemClass{
  $key:string;
  name:string;
  phone:string;
  skill:string;
  province:string;
  price:string;
  comment:string;
}
