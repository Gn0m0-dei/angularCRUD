import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { People } from '../classes/people';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  update: any = new EventEmitter();

  readonly urlApi: string = 'http://hello-world.innocv.com/api/user';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.urlApi).pipe(catchError(this.errorHandler));
  }

  getPerson(id: number): Observable<People> {
    return this.http.get<People>(`${this.urlApi}/${id}`).pipe(catchError(this.errorHandler));
  }

  postPerson(person: People): Observable<any> {
    return this.http.post(this.urlApi, person).pipe(catchError(this.errorHandler));
  }

  putPerson(person: People): Observable<any> {
    return this.http.put(this.urlApi, person).pipe(catchError(this.errorHandler));
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/${id}`).pipe(catchError(this.errorHandler));
  }

  errorHandler(err: HttpErrorResponse) {
    return throwError(err.message || 'Server error');
  }
}
