import { NgModule } from '@angular/core';
import { DisplayableAgeFromMonthsPipe } from './displayable-age-from-months.pipe';

@NgModule({
  declarations: [DisplayableAgeFromMonthsPipe],
  exports: [DisplayableAgeFromMonthsPipe]
})
export class DisplayableAgeFromMonthsPipeModule {}