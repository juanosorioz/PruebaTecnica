import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  sample: any;

  constructor(private sampleServices: SampleService){}

  ngOnInit(): void {
    this.sampleServices.getProducto()
    .subscribe({ 
      next: (sample: any) =>{
        this.sample = sample
        console.log(this.sample)
      },
      error: (err: any) =>{
        console.log(err)
      },
      complete: () =>{
        console.log('completado')
      }
     })
  }

}
