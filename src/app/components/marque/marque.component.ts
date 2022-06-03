import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MarqueService } from 'src/app/services/marque.service';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  motoTable: Moto[] = [];
  
  display: string = 'none';

  constructor(private motoService: MotoService, private router: Router) { }

  ngOnInit(): void {
  }

  getMotoByMarque(marque: string) {
    this.motoService.getByMarque(marque).subscribe( data => {
      console.log(data);
      this.motoTable = data;
      this.display = 'true';
    })
  }



}
