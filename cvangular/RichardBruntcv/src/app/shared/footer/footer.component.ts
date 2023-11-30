import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  academicTraining:any;
  contact:any;
  
  constructor(private footerservice: ServicesService)
  {
    this.footerservice.obtenerDatos().subscribe(
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
    );
    this.footerservice.obtenerDatos().subscribe(
      {
        next: (data)=>{
          this.contact=data["contact"];
          console.log(data);
        },
        error:(err)=> {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
        
      }
    );
    this.footerservice.obtenerDatos().subscribe(
      {
        next: (data)=>{
          this.contact=data["contact"];
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

