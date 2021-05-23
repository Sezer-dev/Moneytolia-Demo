import { Component, Input } from '@angular/core';
import { Campaign } from '../../inferfaces/campaign';

@Component({
  selector: 'app-update-campaign-modal',
  templateUrl: './update-campaign-modal.component.html',
  styleUrls: ['./update-campaign-modal.component.css'],
})
export class UpdateCampaignModalComponent {
  @Input() visible: any = false;
  campaign:Campaign

  constructor(){
    this.campaign = {
      campaignName: "",
      campaignDesc: "",
      campaignRate: 0,
      createdAt: new Date()
    }
  }
  
  updateCampaign(){
  }
}
