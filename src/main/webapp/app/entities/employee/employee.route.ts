import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeePopupComponent } from './employee-dialog.component';
import { EmployeeDeletePopupComponent } from './employee-delete-dialog.component';

@Injectable()
export class EmployeeResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const employeeRoute: Routes = [
    {
        path: 'employee',
        component: EmployeeComponent,
        resolve: {
            'pagingParams': EmployeeResolvePagingParams
        },
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'employee/:id',
        component: EmployeeDetailComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const employeePopupRoute: Routes = [
    {
        path: 'employee-new',
        component: EmployeePopupComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'employee/:id/edit',
        component: EmployeePopupComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'employee/:id/delete',
        component: EmployeeDeletePopupComponent,
        data: {
            authorities: ['148.982.3562'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
