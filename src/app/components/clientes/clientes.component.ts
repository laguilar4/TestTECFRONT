import { Component, OnInit } from '@angular/core';
import { TecnoglassService } from 'src/app/services/tecnoglass.service';
import {FormBuilder,FormControl,FormGroup,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  constructor(public tecnSvc : TecnoglassService,  public fb: FormBuilder){}

  updateForm = false;

  ngOnInit(): void {
    this.getClientes();
  }

  public clientForm = this.fb.group({
    ID:[0],
    NOMBRE:[''],
    APELLIDO:[''],
    DIRECCION:[''],
    TELEFONO:[0],
    NACIONALIDAD:[''],
    CORREO:['']
  });

  getClientes():void
  {
    this.tecnSvc.getClientes().subscribe(res => {
      this.tecnSvc.cliente = res;
    },
    err => 
    {
      console.log(err);
    });
  }

  actionClick():void
  {
    if(this.updateForm == true)
    {
      this.updateCliente();
    }else
    {
      this.addCliente();
    }
  }
  
  addCliente():void
  {
    this.tecnSvc.addCliente(this.clientForm.value).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    },
    err => 
    {
      console.log(err);
    });
  }

  updateCliente():void
  {
    this.tecnSvc.updateCliente(this.clientForm.value, this.clientForm.value.ID!).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    },
    err => 
    {
      console.log(err);
    });
  }

  deleteClient(id:number | null | undefined)
  {
    this.tecnSvc.deleteClient(id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    },
    err => 
    {
      console.log(err);
    });
  }

  fillform(ID: number | null | undefined , NOMBRE: string | null | undefined , 
    APELLIDO: string | null | undefined , DIRECCION: string | null | undefined ,
     TELEFONO: number | null | undefined , NACIONALIDAD: string | null | undefined , CORREO: string | null| undefined  )
  {
    this.updateForm = true;
    this.clientForm.controls.ID.setValue(ID!);
    this.clientForm.controls.APELLIDO.setValue(APELLIDO!);
    this.clientForm.controls.NOMBRE.setValue(NOMBRE!);
    this.clientForm.controls.DIRECCION.setValue(DIRECCION!);
    this.clientForm.controls.TELEFONO.setValue(TELEFONO!);
    this.clientForm.controls.NACIONALIDAD.setValue(NACIONALIDAD!);
    this.clientForm.controls.CORREO.setValue(CORREO!);
  }

}
