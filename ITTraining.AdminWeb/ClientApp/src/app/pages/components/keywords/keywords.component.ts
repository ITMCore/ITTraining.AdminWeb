import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { FormControl } from '@angular/forms';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { SubjectDataService } from '../../../@core/data/subject-data.service';

import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-keywords',
  styleUrls: ['./keywords.component.scss'],
  templateUrl: './keywords.component.html',
})

export class KeywordsComponent {
  
  config: ToasterConfig;

  formModule = new KeywordFormMod();

  settings = {
    selectMode: 'multi',
    actions: {
      add: false,
      edit: false,
      select: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Name: {
        title: 'Subject Name',
        type: 'string',
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SubjectDataService, private toasterService: ToasterService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDelete(event): void {
    event.confirm.resolve();
  }

  makeToast() {
    this.showToast();
  }

  private showToast() {
    this.config = new ToasterConfig({
      positionClass: 'toast-top-right',
      timeout: 3000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: true,
      animation: 'fade',
      limit: 5,
    });
    const toast: Toast = {
      type: 'success',
      title: 'Success',
      body: 'Keyword updated',
      timeout: 3000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };

    this.toasterService.popAsync(toast);
  }
}

export class KeywordFormMod {
  keywordName = new FormControl('');
}
