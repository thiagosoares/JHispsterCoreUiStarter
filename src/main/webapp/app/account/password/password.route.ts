import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PasswordComponent } from './password.component';

export const passwordRoute: Route = {
    path: 'password',
    component: PasswordComponent,
    data: {
        authorities: ['148.982.3562'],
        pageTitle: 'Password'
    },
    canActivate: [UserRouteAccessService]
};
