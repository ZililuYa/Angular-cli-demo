import {Component, OnInit} from '@angular/core';
import {ajax, api} from '../ts/lib'

declare var $: any

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  data = []
  params: Object = {
    page: 0,
    pageSize: 50
  }
  page = 0

  constructor() {
  }

  ngOnInit() {
    this.getInfoList()
  }

  getInfoList() {
    ajax.run({
      url: api.hao123List + this.page,
      method: 'POST',
      // data: this.parme
    }, (res) => {
      // setTimeout(() => this.data = res.data, 2000)
      // this.data = res.data
      this.data = [...this.data, ...res.data]
      // console.log(this.data)
    })
  }

  addList() {
    this.page++
    this.getInfoList()
  }
}
