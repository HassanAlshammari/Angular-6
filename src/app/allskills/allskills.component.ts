import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActionSequence } from 'protractor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-allskills',
  templateUrl: './allskills.component.html',
  styleUrls: ['./allskills.component.css']
})
export class AllskillsComponent implements OnInit {

  data={
    name:'',
    phone:'',
    skill:'',
    province:'',
    price:'',
    comment:''
  }
  

  itemList:AngularFireList<any>

  itemArray=[]
  constructor(public db:AngularFireDatabase , public router:Router) { 
    this.itemList = db.list('skill')

    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
      let y=action.payload.toJSON()
      y['$key']=action.key
      this.itemArray.push(y as ListItemClass)
      })
    })

    console.log(this.itemArray)
  }

  ngOnInit() {
  }

  moreInfo(key){
    this.router.navigate(['details/'+ key])
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
