import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { differenceInHours, set, differenceInMinutes } from 'date-fns';
@Component({
  selector: 'gantt-chart',
  templateUrl: 'gantt-chart.component.html',
  styleUrls: ['gantt-chart.component.scss'] 
})
export class GanttCharComponent implements AfterViewInit {
 

  @Input() dayStart: any;
  @Input() dayEnd: any;
  @Input() tasks: any;
  @Input() theme: 'material' | 'gradient' | null = 'material';

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  dates: string[] = []
  dayStartHour!: number;
  today = new Date();
  todayIndex: number =0
  selectedDate = this.today;
  workingHours: number | undefined;
  line:number=0
  constructor() {
    const d1 = new Date('2023-4-1');
    const d2 = new Date('2023-7-1');
    
    this.dates= this.getDatesInRange(d1, d2) 
    this.todayIndex= (this.dates.indexOf(this.formateDate([new Date()])[0])+1)*120
    this.line = (this.dates.indexOf(this.formateDate([new Date()])[0])+1)*120 -100
    console.log(this.line +=500);

    setTimeout(()=> {
      document.getElementById("timelineWrapper")!.scrollLeft += (120) *(this.todayIndex/120) -538
    },0)

    
    
  }
  ngAfterViewInit(): void {

    if(document.getElementById("timelineWrapper") !=null){
      

    }
  }
  range:number =0
  offset:number=0
  ngOnInit(): void {
    this.prepareChart();
    this.prepareTasks();
    
  }

  prepareChart() {
    // this.dayStartHour = this.getHourFromTime(this.dayStart);
    this.dayStartHour= +this.dates[0].substring(this.dates[0].indexOf('/') + 3)    
    
    this.workingHours = this.diffFromTime(this.dayEnd, this.dayStart, 'hours') + 2;

  }
  prepareTasks() {
    
    this.tasks.map((task:any) => {
      let start = this.dates.indexOf(task.start)+1;
      let end = this.dates.indexOf(task.end)+1

      
      task.offset = (start* 120 )-120
      task.width = (end - start +1) * 122 
     
      // console.log(end - start +1);
      // console.log((end +1)-(this.todayIndex  /120 ));
      let range = end - (this.todayIndex/120)
      let width = task.width /120
   
      let status = (range /width) *100

      
      if(status < 30 ){task.color ='#E1DD40'} 
      if(status ==0 ){task.color ='#00C48C'} 
      if(status < 0 ) {task.color ='#FF375E'}
      if(status > 30) { task.color ='#99E7D1'} 
      if(status > 30){ task.color ='#99E7D1'} 
      if(start  > (this.todayIndex/120)){task.color ='#ffffff8'}


     
    

      
      if (task.statusList) {
        task.statusList.map((status:any, index:any) => {
          status.offset =
            this.diffFromTime(status.start, this.dayStart, 'minutes') * 2;
          if (task.statusList[index + 1] && task.statusList[index + 1].start) {
            status.end = task.statusList[index + 1].start;
            status.width = this.diffFromTime(status.end, status.start, 'minutes') * 2;
          }
        });
      }
    });



  }
  onTaskClick(clickedTask:any) {
    if (clickedTask.isParent) {
      this.tasks.filter((task:any) => {
        if (task.parentID === clickedTask.id) {
          task.isHidden = !task.isHidden;
          clickedTask.active = !clickedTask.active;
        }
      });
    }
  }
  getHourFromTime(timeStr:any) {
    return Number(timeStr.split(':')[0]);
  }
  getMinuteFromTime(timeStr:any) {
    return Number(timeStr.split(':')[1]);
  }
  diffFromTime(endTime:any, StartTime:any, returnFormat: 'hours' | 'minutes'):any {
    const [endTimeHour, endTimeMinute] = endTime.split(':');
    const [StartTimeHour, StartTimeMinute] = StartTime.split(':');
    const taskEndDate = set(this.today, {
      hours: endTimeHour,
      minutes: endTimeMinute,
      seconds: 0
    });
    const taskStartDate = set(this.today, {
      hours: StartTimeHour,
      minutes: StartTimeMinute,
      seconds: 0
    });
    let res;
    switch (returnFormat) {
      case 'hours':
        res = differenceInHours(new Date(taskEndDate), new Date(taskStartDate));
        break;
      case 'minutes':
        res = differenceInMinutes(
          new Date(taskEndDate),
          new Date(taskStartDate)
        );
        break;

      default:
        break;
    }
    return res;
  }



  getDatesInRange(startDate: Date, endDate: Date) {
    const date = new Date(startDate.getTime());
    const dates = [];
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    return this.formateDate(dates);
  }
  
  formateDate(dates: Date[]):Array<string>{
    let shortDates:Array<string> = []
    dates.forEach(valie => {
      const year = valie.getFullYear();
      const month = valie.getMonth() + 1;
      const day = valie.getDate();
      const withSlashes = [year, month, day].join('/');
      shortDates.push(withSlashes)

    })
    return shortDates
  }
 
  scroll(s:any){
    console.log(s);
    
  }


}
