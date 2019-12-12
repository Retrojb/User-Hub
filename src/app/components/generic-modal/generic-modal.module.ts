import { GenericModalComponent } from './generic-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [GenericModalComponent],
    exports: [GenericModalComponent]
})
export class GenericModalModule { }
