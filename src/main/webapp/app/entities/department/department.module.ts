import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    DepartmentService,
    DepartmentPopupService,
    DepartmentComponent,
    DepartmentDetailComponent,
    DepartmentDialogComponent,
    DepartmentPopupComponent,
    DepartmentDeletePopupComponent,
    DepartmentDeleteDialogComponent,
    departmentRoute,
    departmentPopupRoute,
} from './';

const ENTITY_STATES = [
    ...departmentRoute,
    ...departmentPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DepartmentComponent,
        DepartmentDetailComponent,
        DepartmentDialogComponent,
        DepartmentDeleteDialogComponent,
        DepartmentPopupComponent,
        DepartmentDeletePopupComponent,
    ],
    entryComponents: [
        DepartmentComponent,
        DepartmentDialogComponent,
        DepartmentPopupComponent,
        DepartmentDeleteDialogComponent,
        DepartmentDeletePopupComponent,
    ],
    providers: [
        DepartmentService,
        DepartmentPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterDepartmentModule {}
