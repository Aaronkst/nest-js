interface IResponse {
  status: string;
  timestamp?: number;
}

export interface ISuccess extends IResponse {
  data: unknown;
  length?: number;
}

export interface IError extends IResponse {
  message: string;
}
