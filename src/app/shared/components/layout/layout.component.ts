import { Component, inject, OnInit } from '@angular/core';
import { NavigationList } from '@app/core/models/navigation-list';
import { NavigationListService } from '@app/core/services/navigation-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  protected navigationListService = inject(NavigationListService)
  subscription$: Subscription = new Subscription();
  navigationList?: NavigationList[]

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct():void {
    this.subscription$.add(
      this.navigationListService.navigationList().subscribe((res:NavigationList[]) => {
        this.navigationList = res
      })

    )
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
  
}

 








