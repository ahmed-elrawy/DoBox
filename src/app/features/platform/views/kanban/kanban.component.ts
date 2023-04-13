import { Component } from '@angular/core';
import { GanntTask } from '@core/models/gantt-chart';
@Component({
  selector: 'app-root',
  template: `<gantt-chart
  [dayStart]="'2023/1/1'"
  [dayEnd]="'2023/7/1'"
  [beforeStartDay]="3"
  [afterEndDay]="3"
  [tasks]="tasks"
  [cellWidth]="120"
></gantt-chart>`
})
export class KanbanComponent {

  tasks:GanntTask[] = [
    {
      id: 1,
      label: 'task 1',
      description: 'description for task 1',
      start: '2023/4/9',
      end: '2023/4/14',

      subTasks: [
        {
          id:1,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/9',
          end: '2023/4/10',
        },
        {
          id:2,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/9',
          end: '2023/4/12',
        },
        {
          id:3,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/10',
          end: '2023/4/14',
        },
        {
          id:4,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/13',
          end: '2023/4/14',
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
      id: 2,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/4/7',
      end: '2023/4/18',

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
          end: '2023/4/11',
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
    {
      id: 7,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/7/1',
      end:   '2023/7/11',
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
    }
  ]


}


