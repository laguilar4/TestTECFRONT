import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { orden, cliente, item, solicitud } from '../interfaces/tecnoglass';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnoglassService {

  cliente?:cliente[];
  item?:item[];
  orden?:orden[];
  solicitud?:solicitud[];

  constructor(private http: HttpClient) { }

  URL_API: string = 'http://localhost:3000/api/tecnoglass';

  getClientes() 
  {
    return this.http.get<cliente[]>(`${this.URL_API}/cliente`).pipe();
  }

  getSolicitudes() 
  {
    return this.http.get<solicitud[]>(`${this.URL_API}/ordenSolic`).pipe();
  }

  getItems() 
  {
    return this.http.get<item[]>(`${this.URL_API}/item`).pipe();
  }

  getOrdenes() 
  {
    return this.http.get<orden[]>(`${this.URL_API}/orden`).pipe();
  }

  addCliente(cliente:cliente)
  {
    return this.http.post<cliente[]>(`${this.URL_API}/cliente`, cliente).pipe();
  }

  updateCliente(cliente:cliente, id: number)
  {
    return this.http.put<cliente[]>(`${this.URL_API}/cliente/${id}`, cliente).pipe();
  }

  addItem(item:item)
  {
    return this.http.post<item[]>(`${this.URL_API}/item`, item).pipe();
  }

  deleteClient(id:number| null | undefined)
  {
    return this.http.delete<item[]>(`${this.URL_API}/cliente/${id}`).pipe();
  }

  deleteItem(id:number| null | undefined)
  {
    return this.http.delete<item[]>(`${this.URL_API}/item/${id}`).pipe();
  }

  addOrden(orden:orden)
  {
    return this.http.post<orden[]>(`${this.URL_API}/orden`, orden).pipe();
  }

  updateOrden(ESTADO:string, id:number| null | undefined)
  {
    const body = 
    {
      ESTADO: ESTADO
    }
    return this.http.put(`${this.URL_API}/orden/${id}`, body).pipe();
  }
}
