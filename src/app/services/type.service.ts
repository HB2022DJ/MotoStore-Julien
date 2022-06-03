import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
type = ['Enduro','Sportive','Roadster','Custom']
  constructor() { }
}
