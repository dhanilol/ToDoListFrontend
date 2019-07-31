import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any>{
    return this.http.get(this.BASE_URL + '/tasks/',
      {headers: this.httpHeaders});
  }

  getOneTask(id): Observable<any>{
    return this.http.get(this.BASE_URL + '/tasks/' + id + '/',
      {headers: this.httpHeaders});
  }

  updateTask(task): Observable<any>{
    const body = {title: task.title, desc: task.desc, done: task.done }

    return this.http.put(this.BASE_URL + '/tasks/' + task.id + '/', body ,
      {headers: this.httpHeaders});
  }

  createTask(task): Observable<any>{
    const body = {title: task.title, desc: task.desc, done: task.done }

    return this.http.post(this.BASE_URL + '/tasks/', body ,
      {headers: this.httpHeaders});
  }

  deleteTask(id): Observable<any>{
    return this.http.delete(this.BASE_URL + '/tasks/' + id + '/',
      {headers: this.httpHeaders});
  }
}
