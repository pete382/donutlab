import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, find, findIndex, map,Subscription } from 'rxjs';
import { DonutModel, Result } from '../models/donut';




@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }
  getDonuts():Observable<DonutModel>{
    return this.http.get<DonutModel>(`https://grandcircusco.github.io/demo-apis/donuts.json`)
 }

 
/* 
getById(id:number):Observable<DonutModel>{
return this.getDonuts().subscribe(data => data.results.find(d=>d.id = id))!;}
 */



}






