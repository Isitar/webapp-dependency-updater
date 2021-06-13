import {AxiosError} from "axios";
import ValidationError from "~/services/errors/ValidationError";

export default class AxiosResponseCatcher {
  public static handleAxiosError(e: AxiosError): any {
    if (400 === e.response?.status) {
      const valErr = new ValidationError();
      valErr.errors = e.response.data as unknown as { [key: string]: string[] };
      return valErr;
    }
    return e.response;
  }
}
