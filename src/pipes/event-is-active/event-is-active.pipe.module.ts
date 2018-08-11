import {NgModule} from '@angular/core';
import { EventIsActivePipe } from './event-is-active.pipe';

@NgModule({
  declarations: [EventIsActivePipe],
  exports: [EventIsActivePipe]
})
export class EventIsActivePipeModule {}