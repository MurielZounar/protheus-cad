import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Buffer} from 'buffer';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  readonly url : string = 'http://localhost:8082/rest/cadclientes'
  private user : string = 'admin'
  private password : string = '  '
  private base : string = Buffer.from(`${this.user}:${this.password}`).toString('base64')
  private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: `BASIC ${this.base}`,
  })
  private requestOptions = { headers: this.headers}

  constructor(private httpClient : HttpClient) {}

  getClientList() : Observable<any> {
    return this.httpClient.get<any>(this.url, this.requestOptions)
  }

  getClientById(id: string) : Observable<any> {
    return this.httpClient.get<any>(`${this.url}/${id}`, this.requestOptions)
  }

  removeClient(id: string){
    console.log('chegou!')
    this.httpClient.delete(`${this.url}/${id}`, this.requestOptions)
      .subscribe({
        next: () => {
          console.log('Deu certo')
        },
        error: (erro) => {
          alert(`${erro.error.errorCode} | ${erro.error.errorMessage}`) //TODO Deixar mensagem mais bonita, sem o ALERT
        }
      }
    )
  }
}
