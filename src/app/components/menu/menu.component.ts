import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarqueService } from 'src/app/services/marque.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  types:string[] = this.typeService.type;
  marques:string[] = this.marqueService.marque
 
  constructor(private typeService: TypeService, private marqueService: MarqueService, private router: Router) { }

  ngOnInit(): void {
  }

  }
