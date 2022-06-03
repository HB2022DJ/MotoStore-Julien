import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MarqueService } from 'src/app/services/marque.service';
import { MotoService } from 'src/app/services/moto.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-moto-phares',
  templateUrl: './moto-phares.component.html',
  styleUrls: ['./moto-phares.component.css']
})
export class MotoPharesComponent implements OnInit {
 motoPhares: Moto[]= [];
 
  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.getMotosPhares().subscribe(data => {
      data.forEach(moto => {
        if (moto.venteFlash) {
          this.motoPhares.push(moto)
        }
      });
    })
    console.log(this.motoPhares)
  } 

}
    
    
  


