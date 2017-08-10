import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { JobComponent } from './job.component';
import { JobDetailComponent } from './job-detail.component';
import { JobPopupComponent } from './job-dialog.component';
import { JobDeletePopupComponent } from './job-delete-dialog.component';

export const jobRoute: Routes = [
    {
        path: 'job',
        component: JobComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'job/:id',
        component: JobDetailComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const jobPopupRoute: Routes = [
    {
        path: 'job-new',
        component: JobPopupComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'job/:id/edit',
        component: JobPopupComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'job/:id/delete',
        component: JobDeletePopupComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
