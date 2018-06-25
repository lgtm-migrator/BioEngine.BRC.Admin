import {ChangeDetectorRef, Component} from '@angular/core';
import {FormInput} from './FormInput';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cke-input',
  templateUrl: './CKEInputComponent.html'
})
export class CKEInputComponent extends FormInput {
  public config = {
    uiColor: '#2979ff',
    height: '600',
    extraAllowedContent: true,
    customConfig: '',
    toolbar: [
      {name: 'clipboard', items: ['Undo', 'Redo']},
      {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting']},
      {name: 'align', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
      {name: 'insert', items: ['Image', 'Iframe', 'Table']},
      {name: 'links', items: ['Link', 'Unlink']},
      {name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']},
      {name: 'styles', items: ['Format', 'Font', 'FontSize']},
      {name: 'colors', items: ['TextColor', 'BGColor']},
      {name: 'tools', items: ['Maximize', 'Source']},
    ],
    filebrowserBrowseUrl: '',
    filebrowserWindowWidth: '1000',
    filebrowserWindowHeight: '700'
  };

  public constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
}

