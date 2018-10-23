import {Type} from 'class-transformer';

export class RestError {
  public Message: string;
  public Field: string;
}

export class RestResult {
  public Code: number;
  @Type(() => RestError)
  public Errors: RestError[] = [];
  public Message: string;
  public IsSuccess: boolean;
}
