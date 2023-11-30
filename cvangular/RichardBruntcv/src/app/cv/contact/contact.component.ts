import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact:any;
  constructor(private contactservice: ServicesService)
  {
    this.contactservice.obtenerDatos().subscribe(
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