import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { DonutModel } from '../../models/donut';
import { ActivatedRoute } from '@angular/router';
import {Result} from '../../models/donut';


@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
 
  constructor(private _donutService:DonutService,private activatedRoute: ActivatedRoute){}
  
  

 ngOnInit():void {
  this.activatedRoute.paramMap.subscribe((paramMap) => {
    const id = Number(paramMap.get('id'));
    console.log(id);}}


   
}
