import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  sample: any

  constructor(private sampleServices: SampleService) { }

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
