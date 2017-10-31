import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {TestModel} from "../models/test.model";

@Injectable()
export class TestService {

  private static readonly GET_TEST_MODEL: string = "test";

  constructor(private http: Http) {
  }

  public getTestData(): Promise<TestModel[]> {

    return this.http.get(TestService.GET_TEST_MODEL)
                    .toPromise()
                    .then(response => response.json() as TestModel[])
                    .catch(err => console.log(err));
  }
}
