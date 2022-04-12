import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Word } from '../common/interfaces/words';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  errorMessage: string = "";

  constructor(
    private http: HttpClient,
    private alert: AlertService
  ) { }

  getValue(query: string): Observable<Word[] | null> {
    return this.http.get<Word[]>(`${environment.searchUrl}${query}`)
    .pipe(
      map((response) => {
          return response;
      }),
      catchError((err) => {
        this.alert.error(err.error.message + "😕")
        return throwError(err)
      })
    )
  }
}
