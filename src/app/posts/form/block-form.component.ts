import { YoutubeBlockFormComponent } from './blocks/youtubeblock-form.component';
import { CutBlockFormComponent } from './blocks/cutblock-form.component';
import { BlocksManager } from './../../@common/blocks/BlocksManager';
import { GalleryBlockFormComponent } from './blocks/galleryblock-form.component';
import { DynamicHostDirective } from 'app/@common/directives/DynamicHostDirective';
import { ViewChild, Component, Input, OnInit, ComponentFactoryResolver, Type } from '@angular/core';
import { PostBlockFormComponent } from './form.component';
import { BasePostBlock, ContentBlockItemType } from 'app/@models/posts/Post';
import { IKeyedCollection, KeyedCollection } from 'app/@common/KeyedCollection';
import { TextBlockFormComponent } from './blocks/textblock-form.component';
import { FileBlockFormComponent } from './blocks/fileblock-form.component';
import { TwitterBlockFormComponent } from './blocks/twitterblock-form.component';
import { Form } from 'app/@common/forms/Form';

@Component({
    selector: 'blockForm',
    template: `
        <ng-template dynamicHost></ng-template>
    `
})
export class BlockFormComponent<TModel extends BasePostBlock> implements OnInit {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
    static forms: IKeyedCollection<Type<any>, string> = new KeyedCollection<Type<any>>();

    @ViewChild(DynamicHostDirective) adHost: DynamicHostDirective;

    @Input()
    public blocksManager: BlocksManager;

    @Input() public Model: TModel;

    @Input()
    public Form: Form;
    ngOnInit(): void {
        if (BlockFormComponent.forms.Count() === 0) {
            BlockFormComponent.forms.Add(ContentBlockItemType.Text, TextBlockFormComponent);
            BlockFormComponent.forms.Add(ContentBlockItemType.Gallery, GalleryBlockFormComponent);
            BlockFormComponent.forms.Add(ContentBlockItemType.File, FileBlockFormComponent);
            BlockFormComponent.forms.Add(ContentBlockItemType.Cut, CutBlockFormComponent);
            BlockFormComponent.forms.Add(ContentBlockItemType.Twitter, TwitterBlockFormComponent);
            BlockFormComponent.forms.Add(ContentBlockItemType.Youtube, YoutubeBlockFormComponent);
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            BlockFormComponent.forms.Item(this.Model.Type)
        );

        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        const instance = <PostBlockFormComponent<TModel>>componentRef.instance;
        instance.Model = this.Model;
        instance.Form = this.Form;
        instance.blocksManager = this.blocksManager;
    }
}
