import {Component, Input, OnInit} from '@angular/core';

declare let $: any

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  @Input() navActive = '/home';
  navArray = []
  navbarClass = ''

  constructor() {
    this.navArray = [{
      value: '/home',
      title: '首页'
    }, {
      value: '/about',
      title: '关于我们'
    }, {
      value: '/info',
      title: '图片列表'
    }]
  }

  ngOnInit() {
    window.onscroll = () => {
      const st = $(window).scrollTop()
      // console.log(st)
      st > 50 ? this.navbarClass = 'navbarFol' : this.navbarClass = ''
    }
  }
}
