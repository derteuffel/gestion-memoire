import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MemoirePayload} from './memoire-add/memoire-payload';
import {UpdateMemoirePayload} from './memoire-update/update-memoire-payload';

@Injectable({
  providedIn: 'root'
})
export class MemoireService {

  private url = 'http://localhost:8080/rest/memoire/';

  constructor( private httpClient: HttpClient) { }

  addMemoire(memoirePayload: MemoirePayload){
    return this.httpClient.post(this.url + 'save', memoirePayload);
  }
  updateMemoire(updateMemoirePayload: UpdateMemoirePayload, id: number){
    return this.httpClient.post(this.url + 'update/' + id, updateMemoirePayload);
  }

  getAllMemoires(): Observable<any>{
    return this.httpClient.get(this.url + 'lists');
  }

  getAllMemoiresForHome(): Observable<any>{
    return this.httpClient.get(this.url + 'all');
  }

  getMemoire(permaLink: number): Observable<any>{
    return this.httpClient.get(this.url + permaLink);
  }

  getGuestMemoire(permaLink: number): Observable<any>{
    return this.httpClient.get(this.url+ 'guest/' + permaLink);
  }

  deleteMemoire(permaLink: number): Observable<any>{
    return this.httpClient.delete(this.url + permaLink );
  }
}
