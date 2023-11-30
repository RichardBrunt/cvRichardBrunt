import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    courses:any;
    constructor(private coursesservice: ServicesService)
    {
      this.coursesservice.obtenerDatos().subscribe(
        {
          next: (data)=>{
            this.courses=data["courses"];
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
