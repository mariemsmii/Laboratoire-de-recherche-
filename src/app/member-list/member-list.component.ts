import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/models/member';
import { MemberService } from 'src/models/member.service';
import { GLOBAL } from '../app.config';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


/*export interface PeriodicElement {
  id : number ;
  name: string;
  type: string;
  cv: string;
  date: string;
  cin: string;
}*/


//const ELEMENT_DATA: PeriodicElement[] = [
  //{id: 1, name: 'mariem1', type: 'teacher1', cv: 'link', date: '2021-02-02', cin : '12345678'},
  //{id: 2, name: 'mariem2', type: 'teacher2', cv: 'link', date: '2021-02-02', cin : '12345678'},
 // {id: 3, name: 'mariem3', type: 'teacher3', cv: 'link', date: '2021-02-02', cin : '12345678'},
//];


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {


 
  dataSource:Member[] = GLOBAL._DB.membre
  displayedColumns: string[] = ['demo-id', 'demo-name', 'demo-type', 'demo-cv', 'demo-date', 'demo-cin', 'demo-actionedit', 'demo-actiondelete'];
  ///dataSource = ELEMENT_DATA;
  

  
  Onremove(id : string): void{

    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {

      });
      dialogRef.afterClosed().pipe().subscribe(isDeleteConfirmed =>
      {
        console.log('deleting',isDeleteConfirmed );
        if(isDeleteConfirmed){
          //code de suppression
          this.MemberService.DeleteMember(id).then( () => {
            //this.datasource=this.MembreService.tab; //car on a fait une fonction getalldata qui va retourner l'etat du tab recuperé du service 
      
            this.GetAllData();
        })
        }
      });


    this.MemberService.DeleteMember(id).then(
      () => {
        this.dataSource=this.MemberService.tab;
    }
    );
  }
  GetAllData(){
    this.MemberService.GetAllMembers().then((data)=>this.dataSource=data);
  }
  constructor(private MemberService : MemberService, private dialog : MatDialog ) {
    this.dataSource=this.MemberService.tab ;
   }
  

  ngOnInit( ): void {
  }

}
