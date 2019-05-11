import { Component } from '@angular/core';
import { AbstractBaseService } from '@common/abstract-base-service';
import { AbstractFormPageComponent } from '@common/forms/abstract-form-component';
import { PageContext } from '@common/abstract-page-component';
import { Ad } from '@models/Ad';
import { SaveAdResponse } from '@models/results/Ad';
import { AdsService } from '@services/AdsService';

@Component({
    selector: 'ad-form-page',
    template: `
        <ad-form class="model-form" #modelForm [model]="model"></ad-form>
    `,
    providers: [PageContext]
})
export class AdFormPageComponent extends AbstractFormPageComponent<
    Ad,
    SaveAdResponse
> {
    constructor(protected _adsService: AdsService, context: PageContext) {
        super(context);
    }

    protected _getNewModelTitle(): string {
        return 'Создание баннера';
    }
    protected _getService(): AbstractBaseService<Ad> {
        return this._adsService;
    }

    protected _getRoute(): string {
        return '/ads';
    }
}