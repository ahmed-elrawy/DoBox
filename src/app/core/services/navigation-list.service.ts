import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NAVIGATION_LIST } from 'assets/fake-api';
import { Observable, of } from 'rxjs';
import { NavigationList } from '../models/navigation-list';

@Injectable({
  providedIn: 'root'
})
export class NavigationListService {

  constructor(private http: HttpClient) { }

  navigationList():Observable<NavigationList[]> {
  return  of(NAVIGATION_LIST)
  }
}
