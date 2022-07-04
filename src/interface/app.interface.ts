export interface IResponse {
  status: number;
  timestamp?: number;
}

export interface IErrorResponse extends IResponse {
  message: string;
}

export interface ISuccessResponse extends IResponse {
  total?: number;
  data: any;
}

export interface IHello {
  data: string;
}
