import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    loading: boolean;
    collapedSideBar: boolean;

    constructor(private router: Router) {
        this.loading = true;
        this.router.events.subscribe((event: RouterEvent) => {
            this.routerEventInterceptor(event)
        })
    }

    ngOnInit() { }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    routerEventInterceptor(event: RouterEvent) {
        if (event instanceof NavigationStart) {
            this.loading = true
        }
        if (event instanceof NavigationEnd) {
            this.loading = false
        }
        if (event instanceof NavigationCancel) {
            this.loading = false
        }
        if (event instanceof NavigationError) {
            this.loading = false
        }
    }
}
