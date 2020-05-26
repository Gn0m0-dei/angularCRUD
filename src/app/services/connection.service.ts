import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { People } from '../classes/people';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly urlApi: string = 'http://hello-world.innocv.com/api/user';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.urlApi).pipe(catchError(this.errorHandler))
  }

  errorHandler(err: HttpErrorResponse) {
    return throwError(err.message || 'Server error');
  }
}
