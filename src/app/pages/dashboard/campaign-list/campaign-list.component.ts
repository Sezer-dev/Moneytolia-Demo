import { Component, OnInit } from '@angular/core';
import { Campaign } from '../inferfaces/campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css'],
})
export class CampaignListComponent implements OnInit {
  campaigns: Campaign[];
  searchKeyword: string = "";
  sortBy: string = "";
  showModal: any = false;
  campaignOld:Campaign;
  campaignNew:Campaign;

  constructor() {}

  ngOnInit(): void {
    this.campaigns = JSON.parse(<any>localStorage.getItem('campaigns'));
  }

  likeCampaign(campaignToLike: any) {
    for (let campaign of this.campaigns) {
      if (campaign.campaignName === campaignToLike.campaignName) {
        campaign.campaignRate++;
      }
      localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
    }
  }

  dislikeCampaign(campaignToDislike: any) {
    for (let campaign of this.campaigns) {
      if (
        campaign.campaignName === campaignToDislike.campaignName &&
        campaign.campaignRate > 0
      ) {
        campaign.campaignRate--;
      }
      localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
    }
  }

  showModalChange(campaign: Campaign) {
    this.showModal = true;
    this.campaignOld = {...campaign}
    this.campaignNew = campaign
  }

  hideModal(){
    this.showModal = false
  }

  deleteCampaign(campaignToUpdate: any): void {
    this.campaigns = this.campaigns.filter((campaign) => {
      return campaign !== campaignToUpdate;
    });
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
  }
}
