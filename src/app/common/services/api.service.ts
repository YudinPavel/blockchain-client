import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { HeaderElementModel } from '../models/HeaderElement.model';
import { MyFileModel } from "../models/MyFile.model";
import { OptionModel } from "../models/Option.model";

const _baseUrl = "http://localhost:3000";
// const _baseUrl = "https://fast-ocean-11505.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getHeaderElements(): Observable<HeaderElementModel[]> {
    return this.httpClient.get<HeaderElementModel[]>(`${_baseUrl}/headerElements`);
  }

  public getFiles(): Observable<MyFileModel[]> {
    return this.httpClient.get<MyFileModel[]>(`${_baseUrl}/getAllFiles`);
  }

  public addFile(file: File): Observable<MyFileModel> {
    const body = new FormData();
    body.append("file", file);
    return this.httpClient.post<MyFileModel>(`${_baseUrl}/addFile`, body);
  }

  public deleteFile(file: MyFileModel): Observable<MyFileModel> {
    return this.httpClient.post<MyFileModel>(`${_baseUrl}/deleteFile`, file);
  }

  public getOptions(): Observable<OptionModel[]> {
    return this.httpClient.get<OptionModel[]>(`${_baseUrl}/getAllOptions`);
  }

  public addOption(option: OptionModel): Observable<OptionModel> {
    return this.httpClient.post<OptionModel>(`${_baseUrl}/addOption`, option);
  }

  public deleteOption(option: OptionModel): Observable<OptionModel> {
    return this.httpClient.post<OptionModel>(`${_baseUrl}/deleteOption`, option);
  }
}
