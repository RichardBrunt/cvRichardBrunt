import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent {
  workexperience:any;
  constructor(private workexperienceservice: ServicesService)
  {
    this.workexperienceservice.obtenerDatos().subscribe(
      {
        next: (data)=>{
          this.workexperience=data["workexperience"];
          console.log(data);
        },
        error:(err)=> {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
        
      }
    )
  }
}
