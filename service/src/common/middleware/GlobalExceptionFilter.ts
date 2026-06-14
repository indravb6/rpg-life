import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger("Exception");

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const req = ctx.getRequest();
    const res = ctx.getResponse();

    const status = exception instanceof HttpException ? exception.getStatus() : 500;

    this.logger.error({
      method: req.method,
      path: req.originalUrl,
      body: req.body,
      query: req.query,
      error: exception.message,
      data: exception.response,
      stack: exception.stack,
    });

    res.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}
