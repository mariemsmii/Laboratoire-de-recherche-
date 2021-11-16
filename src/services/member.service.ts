import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app.config';
import { Member } from 'src/models/member';







@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab:Member[]=GLOBAL._DB.membre
  constructor(private httpClient: HttpClient ) {
   
   }
   saveMember(member:Member):Promise<Member>{
    // return this.httpClient.post<Member>('linkToRestAPI',member).toPromise();
     const memberToSave={...member };
     memberToSave.id=Math.ceil(Math.random()*10000).toString(),
     memberToSave.createdDate=member.createdDate??new Date().toISOString(),
     //ajouter tous les membres que son id n'existe pas dans member
     this.tab=[memberToSave,...this.tab.filter(item=>item.id!==member.id)];
     return new Promise(resolve=>resolve(memberToSave))
   }
   getMemberbyId(id:string):Promise<Member>{
    // return this.httpClient.get<Member>('linkToRestAPI',id).toPromise();
    //si il a touvé l'id iraj3ha fel position zero si non iraj3 null
    return new Promise(resolve=>resolve(this.tab.filter(item => item.id==id) [0]?? null));

   }

   DeleteMember(id:string):Promise<void>
   {  // return this.httpClient.delete<void>('linkToRestAPI').toPromise();
    this.tab=this.tab.filter(item=>item.id!==id);
    return new Promise(resolve=>resolve());
  }
  GetAllMembers():Promise<Member[]>
  {
    //return this.httpClient.get<Member>('linkToRestAPI',id).toPromise();
    return new Promise(resolve=>resolve(this.tab));
  }
  
}
