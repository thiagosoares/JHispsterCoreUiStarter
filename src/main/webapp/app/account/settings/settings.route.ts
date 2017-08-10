import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { SettingsComponent } from './settings.component';

export const settingsRoute: Route = {
    path: 'settings',
    component: SettingsComponent,
    data: {
        authorities: ['148.982.3562'],
        pageTitle: 'Settings'
    },
    canActivate: [UserRouteAccessService]
};
