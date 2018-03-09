import {Component} from '@angular/core';
import {NavigationEnd, ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  navActive = '/home'

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {

  }

  ngOnChanges() {
    this.logIt(`ngOnChanges`);
  }

  ngOnInit() {
    this.logIt(`ngOnInit`);
    $('[data-toggle="popover"]').popover();
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      // .map(() => this.activatedRoute)
      // .map((route) => {
      //   while (route.firstChild) {
      //     route = route.firstChild;
      //   }
      //   return route;
      // })
      // .filter(route => route.outlet === 'primary')
      // .mergeMap(route => route.data)
      .subscribe((event) => {
        console.log(event);   // 包括NavigationStart, RoutesRecognized, NavigationEnd
        this.navActive = this.title = event['url']
        this.title = this.title.replace('/', '').replace('home', '')
      });
  }

  ngDoCheck() {
    this.logIt(`ngDoCheck`);
  }

  ngAfterContentInit() {
    this.logIt(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    this.logIt(`ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    this.logIt(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    this.logIt(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    this.logIt(`ngOnDestroy`);
  }

  logIt(msg: string) {
  }
}
