import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get HTTP request that is used in generic calls
   * @param path path to the API (not including the base URL)
   * @param paramsList list of parameters passed as an object
   * @returns A response observable
   */
  public getRequest(path: string, fullPath: boolean = false, paramsList: any | undefined = undefined): Observable<any> {
    const headers = this.getHeaders();
    const params = this.getParams(paramsList);

    return this.http.get(fullPath ? path : this.backend + path, { headers: headers, params: params });
  }

  /**
   * A generic post HTTP request
   * @param path path to the API (not including the base URL)
   * @param body body that is sent as a payload in the request
   * @returns A response observable
   */
  public postRequest(path: string, body: any | undefined): Observable<any> {
    const headers = this.getHeaders();

    return this.http.post(this.backend + path, body ?? {}, { headers: headers });
  }

  /**
   * Getter for the backend API url, should be moved to configuration
   */
  get backend(): string | undefined {
    return 'https://swapi.py4e.com/api/';
  }

  /**
   * 
   * @returns HttpHeaders that are used in http calls
   */
  public getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return headers;
  }

  /**
   * Method that returns parameters
   * @param paramList list of params in an object
   * @returns HttpParams that are used in http calls
   */
  public getParams(paramList: any): HttpParams {
    let params = new HttpParams({
      fromObject: paramList
    });
    return params;
  }
}
