import { FormsModule } from '@angular/forms';
import { BancoeditComponent } from './geral/bancos/bancoedit/bancoedit.component';
import { BancolistComponent } from './geral/bancos/bancolist/bancolist.component';
import { BancoService } from './geral/bancos/banco.service';
import { HttpModule } from '@angular/http';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { ContasComponent } from './contas/contas.component';
import { ParcelasComponent } from './contas/parcelas/parcelas.component';
import { FornecedorboxlistComponent } from './geral/fornecedor/fornecedorboxlist/fornecedorboxlist.component';
import { FornecedorboxlistService } from './geral/fornecedor/fornecedorboxlist/fornecedorboxlist.service';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    ContasComponent,
    ParcelasComponent,
    FornecedorboxlistComponent,
    BancolistComponent,
    BancoeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpModule,
    FormsModule
  ],
  providers: [FornecedorboxlistService, BancoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
