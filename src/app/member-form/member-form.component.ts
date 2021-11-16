import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/member';
import { MemberService } from 'src/models/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})

export class MemberFormComponent implements OnInit {
  currentId : any ;
  form : any ;
  item1 : any;
  item : any;
  OnSubmit():void{
    console.log(this.form.value);
    const objectToSublit :Member={ ...this.item1, ...this.form.value};
    console.log(this.form.value);
    console.log(this.form.item1);
    this.memberService.saveMember(objectToSublit).then(()=>{this.router.navigate(["/members"])});//redirection 
    //this.memberService.deleteMember(objectToSublit).then(()=>{this.router.navigate(["/members"])});// hedha zedtou ena lil delete
  };
  initform(item : any): void {
    this.form=new FormGroup({
      cin:new FormControl(item?.cin,[Validators.required]),
      name:new FormControl(item?.name,[Validators.required]),
      cv:new FormControl(item?.cv,[]),
      type:new FormControl(item?.type,[Validators.required]),
    })
    
  };

  constructor(private memberService : MemberService, private router : Router, private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.currentId= this.activatedRoute.snapshot.params.id;
    if ( !!this.currentId){
      //je suis dans edit
      this.memberService.getMemberbyId(this.currentId).then((item) =>{this.item1=item; 
    this.initform(this.item1)});////chnou bch na3mel ba3ad mane5dem il fonction hedhi fil service w tjini il reponse

    
      }
    else{this.initform(null);}
  }

  

}
