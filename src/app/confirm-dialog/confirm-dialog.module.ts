import {NgModule} from '@angular/core';

import {MaterialModule} from '../../app/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ConfirmDialogComponent } from './confirm-dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    ConfirmDialogModule,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
})
export class ConfirmDialogModule {
}
