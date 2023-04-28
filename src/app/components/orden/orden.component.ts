import { Component, OnInit } from '@angular/core';
import { TecnoglassService } from 'src/app/services/tecnoglass.service';
import {FormBuilder,FormControl,FormGroup,Validators,FormArray} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent {

  constructor(public toastr: ToastrService, public tecnSvc : TecnoglassService, public fb: FormBuilder){}
  
  public ordenForm = this.fb.group({
    ID_CLIENTE:[0],
    ID_ITEM:[0]
  });
  
  ngOnInit(): void {
    this.getOrdenes();
    this.getItem();
    this.getClientes();
  }

  getItem():void
  {
    this.tecnSvc.getItems().subscribe(res => {
      this.tecnSvc.item = res;
    },
    err => 
    {
      console.log(err);
    });

  }

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

  getOrdenes():void
  {
    this.tecnSvc.getOrdenes().subscribe(res => {
      this.tecnSvc.orden = res;
    },
    err => 
    {
      console.log(err);
    });
  }
  
  addOrden():void
  {
    this.tecnSvc.addOrden(this.ordenForm.value).subscribe(res => {
      console.log(res);
      this.toastr.success('Se ha guardado exitosamente', 'Success!');
      this.ngOnInit();
    },
    err => 
    {
      console.log(err);
      this.toastr.error('Hubo un problema al guardar', 'Error!');
    });
  }

}
