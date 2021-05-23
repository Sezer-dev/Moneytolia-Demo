import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignListComponent } from './pages/dashboard/campaign-list/campaign-list.component';
import { CreateCampaignComponent } from './pages/dashboard/create-campaign/create-campaign.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: "campaign-list",
        component: CampaignListComponent
      },
      {
        path: "create-campaign",
        component: CreateCampaignComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
