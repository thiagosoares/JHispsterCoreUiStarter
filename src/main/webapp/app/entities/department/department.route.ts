import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentPopupComponent } from './department-dialog.component';
import { DepartmentDeletePopupComponent } from './department-delete-dialog.component';

export const departmentRoute: Routes = [
    {
        path: 'department',
        component: DepartmentComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Departments'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'department/:id',
        component: DepartmentDetailComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Departments'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const departmentPopupRoute: Routes = [
    {
        path: 'department-new',
        component: DepartmentPopupComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Departments'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'department/:id/edit',
        component: DepartmentPopupComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Departments'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'department/:id/delete',
        component: DepartmentDeletePopupComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Departments'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
