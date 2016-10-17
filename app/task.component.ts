import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
    selector: 'task-display',
  template: `
  <div>
    <input *ngIf="task.done === true" type="checkbox" checked (click)="toggleDone(false, task)"/>
    <input *ngIf="task.done === false" type="checkbox" (click)="toggleDone(true, task)"/>
    <label>Mark {{ task.description }} as {{!task.done}}</label>
  </div>
  `
})
export class TaskComponent {
  @Input() task: Task;
  @Output() completeClickedSender = new EventEmitter();
  toggleDone(setCompleteness: boolean, task: Task){
    task.done = setCompleteness;
    this.completeClickedSender.emit(task);
  }
}
