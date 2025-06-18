import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AllService {

  private authPaths = [];
  private _isAuthpage = new BehaviorSubject<boolean>(false);
  isAuthpage$ = this._isAuthpage.asObservable();


  constructor(private router:Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) =>{
      const currentUrl = event.urlAfterRedirects;
      const isAuth = this.authPaths.some(path => currentUrl.startsWith(path));
      this._isAuthpage.next(isAuth);
    })
  }


}
