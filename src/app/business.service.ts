import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {


  //  uri = 'https://tehcon.com.hr/api/CroatiaTownAPI/list.php?v=1&entityType=1';
  uri = 'https://tehcon.com.hr/api/CroatiaTownAPI/list.php';

  constructor(private http: HttpClient, private router: Router, private testhttp: Http) { }
  getData(entyttype) {
    var uridisp = this.uri
    console.log('Uri : -- > ' + uridisp);
    return this
      .http
      .get(`${this.uri}?v=1&entityType=${entyttype}`);
  }

  // getTowns(entyttype, id) {
  //   var uridisp = this.uri;
  //   console.log('Uri : -- > ' + uridisp + `&entityType=${entyttype}&ID=${id}`);
  //   return this
  //     .http
  //     .get(`${this.uri}&entityType=${entyttype}&ID=${id}`);
  // }

}
