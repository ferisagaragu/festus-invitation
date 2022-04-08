import { throwError } from 'rxjs';
import { ServerErrorConst } from '../const/server-error.const';

export const validateServerErrorFunction = (err: any, completeTrace?: boolean) => {
  return err.statusText !== ServerErrorConst.unknownError ?
    throwError(validateCompleteTrace(err, completeTrace)) :
    throwError(ServerErrorConst.message)
}

const validateCompleteTrace = (err: any, completeTrace?: boolean): any => {
  if (completeTrace) {
    return err.error;
  }

  return  err.error.message;
}
