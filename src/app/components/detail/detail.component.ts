import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
moto?: Moto;
  constructor( private motoService: MotoService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // let id = parseInt(<string>this.activeRoute.snapshot.paramMap.get('id'));
    // this.motoService.getOne(id).subscribe(data => {
    //   this.moto = data;
    // })
  }

}
