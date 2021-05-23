import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CampaignListComponent } from './pages/dashboard/campaign-list/campaign-list.component';
import { UpdateCampaignModalComponent } from './pages/dashboard/campaign-list/update-campaign-modal/update-campaign-modal.component';
import { CreateCampaignComponent } from './pages/dashboard/create-campaign/create-campaign.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortCampaigns } from './pipes/sortCampaigns.pipe';
import { ButtonComponent } from './pages/shared/button-component/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateCampaignComponent,
    CampaignListComponent,
    FilterPipe,
    SortCampaigns,
    UpdateCampaignModalComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
