import { Component } from '@angular/core';
import { Campaign } from '../inferfaces/campaign';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css'],
})
export class CreateCampaignComponent {
  campaign: Campaign;

  constructor() {
    this.campaign = {
      campaignName: '',
      campaignDesc: '',
      campaignRate: 0,
      createdAt: new Date(),
    };
  }

  create() {
    this.campaign.createdAt = new Date();
    if (localStorage.getItem('campaigns') === null) {
      localStorage.setItem('campaigns', JSON.stringify([this.campaign]));
    } else {
      let campaigns = JSON.parse(<any>localStorage.getItem('campaigns'));
      campaigns.push(this.campaign);
      localStorage.setItem('campaigns', JSON.stringify(campaigns));
    }
    this.campaign.campaignName = '';
    this.campaign.campaignDesc = '';
  }
}
