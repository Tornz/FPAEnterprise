import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidDocumentComponent } from './biddocument.component';


const routes: Routes = [
    {
        path: '', component: BidDocumentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BidDocumentRoutingModule {
}
