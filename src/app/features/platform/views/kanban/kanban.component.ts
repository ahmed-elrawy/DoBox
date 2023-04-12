import { Component } from '@angular/core';
import { GanntTask } from '@core/models/gantt-chart';
@Component({
  selector: 'app-root',
  template: `<gantt-chart
  [dayStart]="'1'"
  [dayEnd]="'90'"
  [tasks]="tasks"
></gantt-chart>`
})
export class KanbanComponent {

  tasks:GanntTask[] = [
    {
      id: 1,
      label: 'task 1',
      description: 'description for task 1',
      start: '2023/4/1',
      end: '2023/4/6',

      subTasks: [
        {
          id:1,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/1',
          end: '2023/4/2',
        },
        {
          id:2,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/2',
          end: '2023/4/4',
        },
        {
          id:3,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/4',
          end: '2023/4/5',
        },
        {
          id:4,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/5',
          end: '2023/4/6',
        },
        

        
      ]
    },
    {
      id: 2,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/4/7',
      end: '2023/4/10',

      subTasks: [
        { 
          id:1,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/6',
          end: '2023/4/8',
        },
        {
          id:2,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/9',
          end: '2023/4/10',
        }

      ]
    },
    {
      id: 3,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/4/11',
      end: '2023/4/15',

      subTasks: [
        {
          id:1,
          description:'desc',
          label:'A',
          start: '2023/4/11',
          end: '2023/4/15',
        },

      ]
    },
    {
      id: 4,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/4/10',
      end: '2023/4/13',

      subTasks: [
        {
          id:1,
          description:'desc',
          label:'A',
          start: '2023/4/10',
          end: '2023/4/911',
        },
        {
          id:2,
          description:'desc',
          label:'A',
          start: '2023/4/11',
          end: '2023/4/13',
        }
      ]
    },
    {
      id: 5,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/4/8',
      end: '2023/4/11',

      subTasks: [
        {
          id:1,
          description:'desc',
          label:'A',
          start: '2023/4/8',
          end: '2023/4/10',
        },
        {
          id:2,
          description:'desc',
          label:'A',
          start: '2023/4/9',
          end: '2023/4/11',
        }
      ]
    },
    {
      id: 6,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/4/1',
      end: '2023/4/11',

      subTasks: [
        {
          id:1,
          description:'desc',
          label:'A',
          start: '2023/4/',
          end: '2023/4/10',
        },
        {
          id:2,
          description:'desc',
          label:'A',
          start: '2023/4/9',
          end: '2023/4/11',
        }
      ]
    },
  ]


}


