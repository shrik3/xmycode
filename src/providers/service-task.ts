import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
http请求类
*/
@Injectable()
export class ServiceTask {

  constructor(public http: Http) {
    // console.log('Hello ServiceTask Provider');
  }

  //参数化key-value
  private toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }
  //参数化对象
  private toQueryString(data) {
     let result = [];
     for (let key in data) {
       key = encodeURIComponent(key);
       let values = data[key];
       if (values && values.constructor == Array) {
         let queryValues = [];
         for (let i = 0, len = values.length, value; i < len; i++) {
           value = values[i];
           queryValues.push(this.toQueryPair(key, value));
         }
         result = result.concat(queryValues);
       } else {
         result.push(this.toQueryPair(key, values));
       }
      result.push(this.toQueryPair(key, values));
    }
     return result.join('&');
   }

   post(URL:string,data){
     let headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     let options = new RequestOptions({ headers: headers });

     return  this.http.post(URL,data,options)
          .map(res=>res.json())

   }

   get(URL:string){
     return this.http.get(URL).map(res=>res.json());
   }

}
