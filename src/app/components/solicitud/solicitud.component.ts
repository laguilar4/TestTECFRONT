import { Component } from '@angular/core';
import { TecnoglassService } from 'src/app/services/tecnoglass.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {

  constructor(public tecnSvc : TecnoglassService){}

  ngOnInit(): void {
    this.getSolicitudes();
  }

  getSolicitudes():void
  {
    this.tecnSvc.getSolicitudes().subscribe(res => {
      this.tecnSvc.solicitud = res;
    },
    err => 
    {
      console.log(err);
    });
  }

  updateState(ESTADO:string, id:number| null | undefined)
  {
    this.tecnSvc.updateOrden(ESTADO, id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    },
    err => 
    {
      console.log(err);
    });
  }

}
