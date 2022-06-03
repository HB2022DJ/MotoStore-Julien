import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moto } from 'src/app/models/moto';

@Injectable({
  providedIn: 'root'
})
export class MotoService {
apiUrl = environment.api;
  constructor(private http: HttpClient) { }

  getMotosPhares():Observable<Moto[]>{
    return this.http.get<Moto[]>(this.apiUrl+"motos.json")
  }

  getById(id:number):Observable<Moto>{
    return this.http.get<Moto>(this.apiUrl + '/' + id)
  }

  getByMarque(marque: string) :Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl+'.json?marque='+marque)
  }

  getByType(type: string): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl+'.json?type='+type)
  }


}




