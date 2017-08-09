import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterRegionMySuffixModule } from './region/region-my-suffix.module';
import { JhipsterCountryMySuffixModule } from './country/country-my-suffix.module';
import { JhipsterLocationMySuffixModule } from './location/location-my-suffix.module';
import { JhipsterDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { JhipsterTaskMySuffixModule } from './task/task-my-suffix.module';
import { JhipsterEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { JhipsterJobMySuffixModule } from './job/job-my-suffix.module';
import { JhipsterJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterRegionMySuffixModule,
        JhipsterCountryMySuffixModule,
        JhipsterLocationMySuffixModule,
        JhipsterDepartmentMySuffixModule,
        JhipsterTaskMySuffixModule,
        JhipsterEmployeeMySuffixModule,
        JhipsterJobMySuffixModule,
        JhipsterJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEntityModule {}
