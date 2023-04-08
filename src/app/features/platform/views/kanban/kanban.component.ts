import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<gantt-chart
  [dayStart]="'1'"
  [dayEnd]="'90'"
  [tasks]="tasks"
></gantt-chart>`
})
export class KanbanComponent {

  tasks = [
    {
      id: 2,
      label: 'task 1',
      description: 'description for task 1',
      start: '2023/4/1',
      end: '2023/4/6',

    },   
    {
      id: 2,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/4/1',
      end: '2023/4/7',
    },   
    {
      id: 2,
      label: 'task 3',
      description: 'description for task 1',
      start: '2023/4/6',
      end: '2023/4/9',
    },   
     
    {
      id: 1,
      label: 'task 4',
      description: 'description for task 1',
      start: '2023/4/7',
      end: '2023/4/8',
      statusList: [
        {
          start: '',
          color: '#18BFED'
        },
        {
          start: '',
          color: '#b3c71e'
        },
        {
          start: '',
          color: '#b3c71e'
        },
 
      ]
    },
 
    {
      id: 2,
      label: 'task 5',
      description: 'description for task 1',
      start: '2023/4/1',
      end: '2023/4/3',
      statusList: [
        {
          start: '7',
          color: '#18BFED'
        },
        {
          start: '10',
          color: '#b3c71e'
        }
      ]
    },
     
    {
      id: 2,
      label: 'task 6',
      description: 'description for task 1',
      start: '2023/4/2',
      end: '2023/4/3',
      statusList: [
 
      ]
    },
    {
      id: 3,
      label: 'task 7',
      description: 'description for task 1',
      start: '2023/4/8',
      end: '2023/4/10',
      statusList: [

      ]
    },    {
      id: 3,
      label: 'task 1',
      description: 'description for task 1',
      start: '2023/4/5',
      end: '2023/4/9',
      statusList: [
        {
          start: '2',
          color: '#18BFED'
        },
        {
          start: '5',
          color: '#b3c71e'
        }
      ]
    },
    {
      id: 3,
      label: 'task 8',
      description: 'description for task 1',
      start: '2023/4/1',
      end: '2023/4/2',
      statusList: [
  
      ]
    },

    {
      id: 3,
      label: 'task 9',
      description: 'description for task 1',
      start: '2023/4/10',
      end: '2023/4/20',
      statusList: [
  
      ]
    },    {
      id: 3,
      label: 'task 10',
      description: 'description for task 1',
      start: '2023/4/10',
      end: '2023/4/20',
      statusList: [
  
      ]
    },    {
      id: 3,
      label: 'task 11',
      description: 'description for task 1',
      start: '2023/4/10',
      end: '2023/4/20',
      statusList: [
  
      ]
    },    {
      id: 3,
      label: 'task 12',
      description: 'description for task 1',
      start: '2023/4/10',
      end: '2023/4/20',
      statusList: [
  
      ]
    },    {
      id: 3,
      label: 'task 12',
      description: 'description for task 1',
      start: '2023/4/10',
      end: '2023/4/20',
      statusList: [
  
      ]
    },    {
      id: 3,
      label: 'task 13',
      description: 'description for task 1',
      start: '2023/4/10',
      end: '2023/4/20',
      statusList: [
  
      ]
    },    {
      id: 3,
      label: 'task 14',
      description: 'description for task 1',
      start: '2023/4/10',
      end: '2023/4/20',
      statusList: [
  
      ]
    },    {
      id: 3,
      label: 'task 15',
      description: 'description for task 1',
      start: '2023/4/10',
      end: '2023/4/20',
      statusList: [
  
      ]
    },
   
  
  ];


 
}
