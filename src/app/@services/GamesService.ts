import { Injectable } from '@angular/core';
import { AbstractContentEntityService } from '@common/abstract-content-entity-service';
import { RestClient } from '@common/HttpClient';
import { Game } from '@models/Game';

@Injectable()
export class GamesService extends AbstractContentEntityService<Game> {
    constructor(httpClient: RestClient) {
        super(httpClient);
    }

    protected _getResource(): string {
        return 'games';
    }
}
