import { Component, OnInit } from '@angular/core';
import { TecnoglassService } from 'src/app/services/tecnoglass.service';
import {FormBuilder,FormControl,FormGroup,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(public tecnSvc : TecnoglassService, public fb: FormBuilder){}

  ngOnInit(): void {
    this.getItem();
  }

  public itemForm = this.fb.group({
    DESCRIP:[''],
    ANCHO:[0],
    LARGO:[0]
  });

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

  addItem():void
  {
    this.tecnSvc.addItem(this.itemForm.value).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    },
    err => 
    {
      console.log(err);
    });
  }

  deleteItem(id:number | null | undefined)
  {
    this.tecnSvc.deleteItem(id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    },
    err => 
    {
      console.log(err);
    });
  }
}
