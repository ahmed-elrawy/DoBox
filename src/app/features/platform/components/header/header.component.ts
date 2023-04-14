import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy { 
  subscription$: Subscription = new Subscription();

  id?: string ='1'
  constructor(private _router: Router,) {}

  ngOnInit(): void {
    this.getTitle()
  }

  getTitle():void {
    this.subscription$.add(
      this._router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          console.log(evt.url);
          this.id =evt.url[10]          
        }
      })
    )
  }
    ngOnDestroy() {
      this.subscription$.unsubscribe();
    }
    
}
