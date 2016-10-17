import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { CompletenessPipe } from './completeness.pipe';
import { CategoryPipe } from './category.pipe';

@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <select (change)="onCategoryChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="Home">Show Home Tasks</option>
      <option value="Work">Show Work Tasks</option>
      <option value="Hobby">Show Hobby Tasks</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | category:selectedCategory">
      <h3>{{ currentTask.description }}</h3>
      <h5>{{ currentTask.priority }}</h5>
      <h5>{{ currentTask.category }}</h5>
      <task-display
        [task]="currentTask"
        (completeClickedSender)="setCompleteness($event, currentTask)"
      ></task-display>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  public selectedCompleteness: string = "notDone";
  public selectedCategory: string = "";
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  onCategoryChange(optionFromMenu) {
    this.selectedCategory = optionFromMenu;
    console.log(this.selectedCategory);
  }
  setCompleteness(task: Task, currentTask: Task){
    currentTask = task;
  }
}
