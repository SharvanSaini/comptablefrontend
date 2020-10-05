import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private httpClient: HttpClient) { }

   BaseUrl='http://localhost:8081';

  recordForm(formData){
    
    let url=this.BaseUrl+'/addRecord';
    return this.httpClient.post(url,formData);
   }
  
  findAllRecords(){
    let url=this.BaseUrl+'/getRecord';
    return this.httpClient.get(url);
  }

  deleteRecord(id)
  {
    let url=this.BaseUrl+'/delete/?id='+id;
    return this.httpClient.get(url);
  }
}
