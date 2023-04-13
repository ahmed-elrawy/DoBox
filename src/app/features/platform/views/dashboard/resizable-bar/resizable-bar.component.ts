import { Component } from '@angular/core';

@Component({
  selector: 'app-resizable-bar',
  templateUrl: './resizable-bar.component.html',
  styleUrls: ['./resizable-bar.component.scss']
})
export class ResizableBarComponent {
  tasks: any[] = [
    { id: 1, name: 'Task 1', start_date: '2023-04-12', end_date: '2023-05-31' },
    { id: 2, name: 'Task 2', start_date: '2023-06-01', end_date: '2023-07-31' },
    { id: 3, name: 'Task 3', start_date: '2023-08-01', end_date: '2023-09-30' },
    { id: 4, name: 'Task 4', start_date: '2023-10-01', end_date: '2023-12-31' }
  ];

  onResizeEnd(event: any, task: any) {
    // Update the task's end date based on the new width of the element
    const daysPerPixel = 90 / event.target.offsetWidth;
    const newEndDate = new Date(task.start_date);
    newEndDate.setDate(newEndDate.getDate() + Math.round(daysPerPixel * event.rectangle.width));
    task.end_date = newEndDate.toISOString().substring(0, 10);
  }
}
