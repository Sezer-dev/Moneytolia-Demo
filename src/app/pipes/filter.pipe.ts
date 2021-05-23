import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterKeyword: string): any {
    return items.filter((campaign) => {
      return new RegExp(filterKeyword, 'g').test(campaign.campaignName);
    });
  }
}
