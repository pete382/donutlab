import { Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';

export const routes: Routes = [
    //homepage
    {path:"",
    component:DonutComponent},

    

    //details
    {path:"id", 
    component:DonutDetailsComponent}

];
