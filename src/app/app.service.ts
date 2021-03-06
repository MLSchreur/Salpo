import { Injectable } from '@angular/core';
import { AppGlobalService } from './app.global.service';
import { Http, Response, Headers} from '@angular/http';
import { Owner } from './owner/owner';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {

    constructor(private http: Http, private appGlobalService: AppGlobalService){}

    private headers = new Headers ({'Content-Type' : 'application/json'});
    private baseUrl: string   = this.appGlobalService.baseUrl + "/owner";

}