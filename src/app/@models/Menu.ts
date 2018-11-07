import { Model } from './base/Model';
import { ISingleSiteEntity } from './interfaces/ISiteEntity';
import { Type } from 'class-transformer';

export class MenuItem {
    public Label: string;
    public Url: string;
    @Type(() => MenuItem)
    public Items: MenuItem[] = [];
}

export class Menu extends Model implements ISingleSiteEntity {
    public Id: number;
    public Title: string;
    public Url: string;
    public Text: string;
    public SiteId: number;

    @Type(() => MenuItem)
    public Items: MenuItem[] = [];
}
