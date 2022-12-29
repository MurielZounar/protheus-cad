import { Component, OnInit } from '@angular/core';
//SERVICE
import { ClientsService } from './../../services/clients.service';


@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{
  public clientList! : any

  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.clientList = this.clientService.getClientList()
  }
}
