import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
motos?: Moto[];
types:string[] = this.typeService.type;
  constructor(private motoService: MotoService, private activatedRoute: ActivatedRoute, private typeService:TypeService, private router: Router) { }

   ngOnInit(): void {
  //   this.motoService.getType().subscribe(data =>{
  //     this.motos = data;
  //   })

  //   let type = this.activatedRoute.snapshot.paramMap.get('type');
  //   this.motoService.getAll().subscribe(data => {
  //     this.motos = data.filter(moto => moto.type == type);
  //   })
  }
}
