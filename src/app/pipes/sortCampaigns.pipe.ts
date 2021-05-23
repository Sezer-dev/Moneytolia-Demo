import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCampaigns',
})
export class SortCampaigns implements PipeTransform {
  transform(items: any[], sortBy: string): any {
    let campaigns = [...items];
    if (sortBy === '') {
      return items;
    }
    if (sortBy === 'lowToHigh') {
      return campaigns.sort((firstItem, secondItem): any => {
        return firstItem.campaignRate - secondItem.campaignRate;
      });
    }
    if (sortBy === 'highToLow') {
      return campaigns.sort((firstItem, secondItem): any => {
        return secondItem.campaignRate - firstItem.campaignRate;
      });
    }
  }
}
