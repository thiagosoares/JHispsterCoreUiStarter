import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd, RoutesRecognized } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { StateStorageService } from '../../shared';

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.coreui.html'
})
export class JhiMainComponent implements OnInit {

    public disabled = false;
    public status: {isopen: boolean} = {isopen: false};

    constructor(
        private titleService: Title,
        private router: Router,
        private $storageService: StateStorageService,
    ) {}

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'jhipsterApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.titleService.setTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });
    }
}
