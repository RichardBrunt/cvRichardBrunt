import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header:any;
  constructor(private headerservice: ServicesService)
  {
    this.headerservice.obtenerDatos().subscribe(
      {
        next: (data)=>{
          this.header=data["header"];
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