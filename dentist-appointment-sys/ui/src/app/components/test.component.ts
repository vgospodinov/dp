import { Component, OnInit } from '@angular/core';
import {TestService} from "../services/test.service";
import {TestModel} from "../models/test.model";
import {HttpModule} from "@angular/http";

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [
    HttpModule,
    TestService
  ]
})
export class TestComponent implements OnInit {

  public testDatas: TestModel[] = [];

  constructor(private service: TestService) {
  }

  ngOnInit() {
    this.service.getTestData().then(datas => this.testDatas = datas);
  }

}
