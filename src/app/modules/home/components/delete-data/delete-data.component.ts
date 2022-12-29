import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {
  public clientList! : any
  public clientData! : any

  constructor(private clientService : ClientsService){}

  ngOnInit(): void {
    this.clientList = this.clientService.getClientList()
  }

  deleteClient(client : any){
    const id = client.code
    this.clientService.removeClient(id)
    this.ngOnInit()
  }
}
