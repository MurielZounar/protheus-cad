import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { RegistrationComponent } from './components/registration/registration.component';
import { NavigationComponent } from './components/navigation/navigation.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { ChangeDataComponent } from './components/change-data/change-data.component';
import { DeleteDataComponent } from './components/delete-data/delete-data.component';
import { SeachClientComponent } from './components/seach-client/seach-client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    RegistrationComponent,
    ChangeDataComponent,
    DeleteDataComponent,
    SeachClientComponent,
    ClientListComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
