import { Icon } from '@common/shared/icon/Icon';
import { AbstractContentBlock } from '../base/AbstractContentBlock';
import { ContentBlockItemType } from './ContentBlockItemType';
import { PictureBlockData } from './PictureBlockData';

export class PictureBlock extends AbstractContentBlock<PictureBlockData> {
    public title = 'Картинка';
    public icon = new Icon('fa-image');
    public type: ContentBlockItemType = ContentBlockItemType.Picture;
    data: PictureBlockData = new PictureBlockData();

    static isEmpty(block: PictureBlock): boolean {
        return !block.data.picture;
    }
}
