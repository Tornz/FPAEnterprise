import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared';
import { BidDocumentComponent } from './biddocument.component';
import { BidDocumentRoutingModule } from './biddocument-routing.module';

@NgModule({
    imports: [CommonModule, BidDocumentRoutingModule, PageHeaderModule],
    declarations: [BidDocumentComponent]
})
export class BidDocumentModule {}
