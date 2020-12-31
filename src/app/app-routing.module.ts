import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NoteComponent } from './components/note/note.component';
import { RegisterComponent } from './components/register/register.component';
import { TakeNoteComponent } from './components/take-note/take-note.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path:'',component: RegisterComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'dashboard',component: DashboardComponent,
  children: [
    {
      path: '', redirectTo: 'note', pathMatch: 'full'
    },
    { path: 'note', component: NoteComponent }
  ]},
  {path:'takeNote',component:TakeNoteComponent},
  {path:'diaplayNote',component:DisplayNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
