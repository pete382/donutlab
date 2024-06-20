import { Component } from '@angular/core';

import { DonutService } from '../../services/donut.service';
import { DonutModel } from '../../models/donut';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {


DonutResult:DonutModel={} as DonutModel;

constructor(private _donutService:DonutService){}

ngOnInit(){
 this._donutService.getDonuts().subscribe(data => this.DonutResult = data );  
} 

}





