import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-academictraining',
  templateUrl: './academictraining.component.html',
  styleUrls: ['./academictraining.component.css']
})
export class AcademictrainingComponent {
  academicTraining:any;
  constructor(private academicTrainingservice: ServicesService)
  {
    this.academicTrainingservice.obtenerDatos().subscribe(
      {
        next: (data)=>{
          this.academicTraining=data["academictraining"];
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
