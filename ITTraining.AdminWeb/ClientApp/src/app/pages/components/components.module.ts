import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';

import { TreeModule } from 'angular-tree-component';
import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';
import { SubjectDataService } from '../../@core/data/subject-data.service';

@NgModule({
  imports: [
    ThemeModule,
    ComponentsRoutingModule,
    TreeModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SubjectDataService,
  ]
})
export class ComponentsModule { }
