import { Injectable } from '@angular/core';
import { NgcommandDetail } from './ngcommand-detail';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NgcommandDetailService {
  formData: NgcommandDetail
  backendUrl: string
  list: NgcommandDetail[]

  constructor(private http: HttpClient) {
    this.backendUrl = "http://localhost:5000/api/ng";
   }

  postNgCommand(formData: NgcommandDetail){
    return this.http.post(this.backendUrl, formData)
  }

  getNgList(): Observable<NgcommandDetail[]> {
    return this.http.get<NgcommandDetail[]>(this.backendUrl);
  }
}
