import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ToolsComponent } from './tools/tools.component';



const routes: Routes = [
  {
    path : 'members',
    pathMatch : 'full',
    component:MemberListComponent,

},

  {
    path : 'form',
    pathMatch : 'full',
    component:MemberFormComponent,

},
{
  path : 'Create',
  pathMatch : 'full',
  component:MemberFormComponent,

},
{
  path : 'members/:id/edit',
  pathMatch : 'full',
  component:MemberFormComponent,

},
{
  path : 'tools',
  pathMatch : 'full',
  component:ToolsComponent,
  
},
{
  path : 'dashboard',
  pathMatch : 'full',
  component:DashboardComponent,

},
{
  path : 'article',
  pathMatch : 'full',
  component:ArticlesComponent,

},
{
  path : 'events',
  pathMatch : 'full',
  component:EventsComponent,

},
{
  path : '',
  pathMatch : 'full',
  redirectTo:"members",

},
{
  path : '**',
  pathMatch : 'full',
  redirectTo:"members",

},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
