import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Campaign } from '../../inferfaces/campaign';

@Component({
  selector: 'app-update-campaign-modal',
  templateUrl: './update-campaign-modal.component.html',
  styleUrls: ['./update-campaign-modal.component.css'],
})
export class UpdateCampaignModalComponent {
  @Input() visible: any = false;
  @Input() campaignOld: Campaign;
  @Input() campaignNew: Campaign;

  updateCampaign(event: Event, campaign: Campaign): void {
    let campaigns: Campaign[] = <Campaign[]>(
      JSON.parse(<string>localStorage.getItem('campaigns'))
    );
    for (let [index, campaignToChange] of campaigns.entries()) {
      if (this.campaignOld.campaignName === campaignToChange.campaignName) {
        campaigns[index] = this.campaignNew;
        localStorage.setItem('campaigns', JSON.stringify(campaigns));
      }
    }
    console.log(this.visible);
    this.visible = !this.visible;
    console.log(this.visible);
  }
}
