import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app.config';
import { Member} from './member';



@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public tab : Member [] = GLOBAL._DB.membre;
  saveMember(member:Member): Promise<Member>{
    //return this.httpClient.post<Member>(linkToRestAPI,member).ToPromise();
    const memberToSave ={
      //id: member.id?? Math.ceil(Math.random()*10000).toString(),
      //createdDate : member.createdDate?? new Date().toISOString(),
      ...member,
    };
    memberToSave.id= member.id??Math.ceil(Math.random()*10000).toString(),
    memberToSave.createdDate = member.createdDate?? new Date().toISOString(),
    this.tab = [memberToSave,...this.tab.filter(item=> item.id!=member.id)];
    return new Promise(resolve => resolve(memberToSave));
  }
  getMemberbyId(id : any):Promise<Member>{
    //return this.httpClient.get<Member>(linkToRestAPI, id).toPromise();
    return new Promise(resolve =>resolve(
      this.tab.filter(item => item.id==id)[0] ?? null));//ken 3andi bch iraja3ha fil position 0 sinn i9olli null 
  }
  //hedha zedtou ena lil delete
  DeleteMember(id:String): Promise<void>{
    //return this.httpClient.delete<void>(linkToRestAPI).toPromise();
    this.tab = this.tab.filter(item=> item.id!=id);
    return new Promise (resolve => resolve());
  }
  GetAllMembers():Promise<Member[]>
  {
   // return this.httpClient.get<Member[]>("linkToRestAPI").toPromise(); 
   return new Promise (resolve => resolve(this.tab));
  }
  



  constructor(private httpClient : HttpClient) { 
    
  }
}
