import{BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';
import {RouterModule}from '@angular/router';
import {ReactiveFormsModule}from '@angular/forms';
import {Component}from'@angular/core';
import {AppComponent }from './app.component';
import { AppDataService } from './common/app-data.service';
import { AppConfiguration } from './common/config/app-configuration.service';

import {HomePageComponent}from './pages/home-page/home-page.component';
import {TaskListPageComponent}from './pages/task-list-page/task-list-page.component';
import {TaskEditPageComponent}from './pages/task-edit-page/task-edit-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {UserEditPageComponent}from './pages/user-edit-page/user-edit-page.component';
import {UserListPageComponent}from './pages/user-list-page/user-list-page.component';

import {NgbModule}from '@ng-bootstrap/ng-bootstrap';

import {TodoService}from './services/todo.service';
import {UserService}from './services/users.service';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

const ROUTES = [
{path: '', component: HomePageComponent},
{path: 'tasks', component: TaskListPageComponent},
{path: 'edit', component: TaskEditPageComponent },
{path: 'editUser', component: UserEditPageComponent },
{path: 'taskUser', component: UserListPageComponent },
{path: '**', component: PageNotFoundComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    TaskEditPageComponent,
    UserEditPageComponent,
    UserListPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [TodoService,
    UserService,
    AppDataService,
    AppConfiguration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
