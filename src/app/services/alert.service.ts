import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private http: HttpClient) {}

  getAlerts(): Observable<string[]> {
    return this.http
      .get('assets/alerts.txt', { responseType: 'text' })
      .pipe(
        map((doc) =>
          doc.split('\n').filter((currentValue: any) => currentValue !== '')
        )
      );
  }
}
