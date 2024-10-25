import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError, Observable, throwError } from 'rxjs';
import { API_URL_RL } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = API_URL_RL+'/restaurant/getAllRestaurants'; 

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    alert("Reataurant Service is down")
    return throwError(error.message || error);
  }


}
