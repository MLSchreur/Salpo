import { Injectable } from "@angular/core";


@Injectable()
export class AppGlobalService{

    public baseUrl: string;

    constructor(){
        this.defineBaseUrl()
    }

    private defineBaseUrl(){
        let hostName: string = window.location.hostname;
        console.log(hostName);

        switch(hostName.substring(0,6)) {
            case "localh": this.baseUrl = "http://localhost:8081/api"; break;
            //case "localh": this.baseUrl = "https://tickitt.herokuapp.com/api"; break;
            case "salpo.": this.baseUrl = "https://tickitt.herokuapp.com/api"; break;
        }
        console.log("Base url: " + this.baseUrl);
    }
}


//  Implementeren van global service, zodat er overal gebruik gemaakt kan worden van dezelfde URL voor het benaderen van de backend;
//
//  Stap 1: [app.global.service.ts] aanmaken met:
//    Injectable & export v/d class
//    Binnen class een constructor aanmaken, waarin de globale baseUrl gemaakt wordt op basis van de hostName.

//  Stap 2: [app.module.ts]
//    import { AppGlobalService }             from './app.global.service';
//    providers: [AppGlobalService]   // bestaande providers uitbreiden met AppGlobalService

//  Stap 3: voor elk component binnen de service:
//    import { AppGlobalService }             from '../app.global.service';
//      Constructor uitbreiden met private variabele van class AppGlobalService
//    constructor(..., private appGlobalService: AppGlobalService)
//      Per service de baseUrl samenstellen op basis van de global en de extra toevoeging.
//    private baseUrl: string   = this.appGlobalService.baseUrl + "/leerling"; 