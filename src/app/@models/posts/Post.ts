import { Model } from '../base/Model';
import { ISiteEntity } from '../interfaces/ISiteEntity';
import { ISectionEntity } from '../interfaces/ISectionEntity';
import { User } from '../User';
import { Icon } from 'app/@common/shared/icon/Icon';

export class Post extends Model implements ISiteEntity, ISectionEntity {
    public Id = '';
    public AuthorId: number;
    public Author: User;
    public Url: string;
    public DateAdded: string;
    public DateUpdated: string;
    public DatePublished: string;
    public IsPinned: boolean;
    public ForumTopicId: number;
    public ForumPostId: number;
    public CommentsCount: number;
    public SectionIds: string[];
    public SiteIds: string[];
    TagIds: string[];

    public Blocks: BasePostBlock[];

    public Sections: any[];
    public Sites: any[];
    Tags: any[];
}

export abstract class BasePostBlock {
    public Id: string;
    public abstract Type: ContentBlockItemType;
    public Position: number;
    public InFocus = false;
    public abstract Title: string;
    public abstract Icon: Icon;
}

export abstract class PostBlock<T extends PostBlockData> extends BasePostBlock {
    public abstract Data: T;
}

export enum ContentBlockItemType {
    Text = 'BioEngine.Core.Entities.Blocks.TextBlock',
    File = 'BioEngine.Core.Entities.Blocks.FileBlock',
    Gallery = 'BioEngine.Core.Entities.Blocks.GalleryBlock',
    Cut = 'BioEngine.Core.Entities.Blocks.CutBlock',
    Twitter = 'BioEngine.Core.Entities.Blocks.TwitterBlock',
    Youtube = 'BioEngine.Core.Entities.Blocks.YoutubeBlock'
}

export abstract class PostBlockData {}
