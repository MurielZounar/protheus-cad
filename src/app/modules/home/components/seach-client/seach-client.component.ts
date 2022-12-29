import { Component, OnInit } from '@angular/core';
import { empty, isEmpty } from 'rxjs';

// SERVICE
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'seach-client',
  templateUrl: './seach-client.component.html',
  styleUrls: ['./seach-client.component.css']
})
export class SeachClientComponent implements OnInit {
  public clientData! : any
  public itsOk : boolean = false
  
  constructor(private clientService : ClientsService) {}

  ngOnInit(): void {
    
  }

  getClient(id : string){
    this.clientData = this.clientService.getClientById(id)
    if (this.clientData) {
      this.itsOk = true
    }
  }
  
}
