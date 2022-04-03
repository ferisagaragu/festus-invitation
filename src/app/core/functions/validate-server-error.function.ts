import { throwError } from 'rxjs';
import { ServerErrorEnum } from '../enum/server-error.enum';

export const validateServerErrorFunction = (err: any, completeTrace?: boolean) => {
  return err.statusText !== ServerErrorEnum.unknownError ?
    throwError(validateCompleteTrace(err, completeTrace)) :
    throwError(ServerErrorEnum.message)
}

const validateCompleteTrace = (err: any, completeTrace?: boolean): any => {
  if (completeTrace) {
    return err.error;
  }

  return  err.error.message;
}
