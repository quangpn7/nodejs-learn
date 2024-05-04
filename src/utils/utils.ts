import { Response } from "express";

type ResponseDataType = {
  message?: string;
  data?: unknown;
  status?: number;
};

const responseSuccess = (
  response: Response,
  responseData: ResponseDataType
) => {
  const { data = {}, message = "SUCCESS", status = 200 } = responseData;
  return response.status(status).json({ data, message });
};

const responseFail = (response: Response, responseData?: ResponseDataType) => {
  const { data = {}, message = "FAILED", status = 500 } = responseData;
  return response.status(status).json({ data, message });
};

export { responseSuccess, responseFail };
