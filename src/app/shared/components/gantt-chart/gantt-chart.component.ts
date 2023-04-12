import { Component, Input } from '@angular/core';
import { GanntTask } from '@app/core/models/gantt-chart';



@Component({
  selector: 'gantt-chart',
  templateUrl: 'gantt-chart.component.html',
  styleUrls: ['gantt-chart.component.scss'] 
})
export class GanttCharComponent  {
 

  @Input() dayStart: any;
  @Input() dayEnd: any;
  @Input() tasks: GanntTask[]=[];
  dates: string[] = []
  todayIndex: number =0
  workingDays: number | undefined;
  line:number=0


  ngOnInit(): void {
    this.prepareChart();
  }

  prepareChart() {
    const d1 = new Date('2023-4-1');
    const d2 = new Date('2023-7-1');
    this.dates= this.getDatesInRange(d1, d2) 
    this.todayIndex= (this.dates.indexOf(this.formateDate([new Date()])[0])+1)*120
    this.line = (this.dates.indexOf(this.formateDate([new Date()])[0])+1)*120 -100
    this.workingDays = this.dates.length
    this.prepareTasks(this.tasks)
    for(let task of this.tasks) {
      this.prepareTasks(task.subTasks)
    } 
    setTimeout(()=> {
      document.getElementById("timelineWrapper")!.scrollLeft += (120) *(this.todayIndex/120) -538
    },0)
  }

  prepareTasks(data:any) {
    data.map((task:any) => {
      let start = this.dates.indexOf(task.start)+1;
      let end = this.dates.indexOf(task.end)+1
      task.offset = (start* 120 )-120
      task.width = (end - start +1) * 122 
      let range = end - (this.todayIndex/120)
      let width = task.width /120
      let status = (range /width) *100
      if(status < 30 ){task.color ='#E1DD40'} 
      if(status == 0 ){task.color ='#00C48C'} 
      if(status < 0 ) {task.color ='#FF375E'}
      if(status > 30) { task.color ='#99E7D1'} 
      if(status > 30){ task.color ='#99E7D1'} 
      if(start  > (this.todayIndex/120)){task.color ='#ffffff8'}
    });
  }
  onTaskClick(clickedTask:GanntTask) {
    document.getElementById("timelineWrapper")!.scrollLeft = 0
    document.getElementById("timelineWrapper")!.scrollLeft += clickedTask.offset||0

    this.tasks.filter((task:any) => {
      if (task.id === clickedTask.id) {
        task.isHidden = !task.isHidden;
        clickedTask.active = !clickedTask.active;
      }
    });
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
    // console.log(s);
    
  }

  // trigger(log:string){
  //   console.log(log)
  // }
    updatedSize(size:number, index:any){
      
      console.log(size/120);
      

    }

}
