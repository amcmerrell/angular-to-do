import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { PiesListComponent } from './pies-list.component';
import { TaskListComponent } from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
import { CompletenessPipe } from './completeness.pipe';
import { TaskComponent } from './task.component'
import { CategoryPipe } from './category.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PiesListComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    CompletenessPipe,
    TaskComponent,
    CategoryPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
