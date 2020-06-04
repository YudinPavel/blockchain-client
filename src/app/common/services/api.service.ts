import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderElementModel } from '../models/HeaderElement.model';

const _baseUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getHeaderElements() {
    return this.httpClient.get<HeaderElementModel[]>(`${_baseUrl}/headerElements`);
  }
}
