import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-programminglanguages',
  templateUrl: './programminglanguages.component.html',
  styleUrls: ['./programminglanguages.component.css']
})
export class ProgramminglanguagesComponent {
  programminglanguages:any;
  constructor(private programmingservice: ServicesService)
  {
    this.programmingservice.obtenerDatos().subscribe(
      {
        next: (data)=>{
          this.programminglanguages=data["programminglanguages"];
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
