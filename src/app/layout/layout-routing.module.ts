import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'projects', loadChildren: './project/project.module#ProjectModule' },
            { path: 'bdoc', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'phasing', loadChildren: './phasing/phasing.module#PhasingModule' },
            { path: 'sysb', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'cmodel', loadChildren: './grid/grid.module#GridModule' },
            { path: 'reports', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
