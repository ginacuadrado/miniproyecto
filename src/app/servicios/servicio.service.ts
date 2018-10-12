import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pokemon} from '../InfoPoke/Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  
  private src: string ="/assets/json/pokemon.json";
  
  constructor(private http: HttpClient) {
  }

  getJSON(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.src);}
}