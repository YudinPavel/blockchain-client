import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderElementModel } from '../models/HeaderElement.model';

const _baseUrl = "http://localhost:3000";
// const _baseUrl = "https://fast-ocean-11505.herokuapp.com/";

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

  public getFiles() {
    return this.httpClient.get<File[]>(`${_baseUrl}/getAllFiles`);
  }

  public addFile(file: File) {
    const body = new FormData();
    body.set("file", file);
    return this.httpClient.post<File[]>(`${_baseUrl}/addFile`, body);
  }
}
