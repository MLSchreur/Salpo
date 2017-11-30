import { Injectable }               from '@angular/core';
// net zoals in Postman, HTTP request levert een response op:
import { Http, Response, Headers }  from '@angular/http';
import { Observable }               from 'rxjs/Observable';

import { Owner }                    from './owner';
import { AppGlobalService }         from '../app.global.service';

@Injectable()
export class OwnerService {

  constructor(private http: Http, private appGlobalService: AppGlobalService) { }

  private baseUrl: string = this.appGlobalService.baseUrl + "/owner";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  //private headersXml          = new Headers({ 'Content-Type': 'text/xml' });          //waarschijnlijk niet nodig  
  //private headersImg          = new Headers({ 'Content-Type': 'text/plain' });        //waarschijnlijk niet nodig

  postOwner(owner: Owner) {
    console.log("owner.service - postOwner");
    return this.http.post(this.baseUrl, JSON.stringify(owner), { headers: this.headers }).map(res => res.text());
  }

  getOwner(): Observable<Owner[]> {
    return this.http.get(this.baseUrl).map(res => res.json());
  }
}