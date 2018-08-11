import { NgModule } from '@angular/core';
import { FormatEventDatePipe } from './format-event-date.pipe';

@NgModule({
  declarations: [FormatEventDatePipe],
  exports: [FormatEventDatePipe]
})
export class FormatEventDatePipeModule {}