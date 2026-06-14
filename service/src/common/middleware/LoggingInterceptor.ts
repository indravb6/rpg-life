import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger("HTTP");

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    const start = Date.now();

    this.logger.log({
      method: req.method,
      path: req.originalUrl,
      query: req.query,
      params: req.params,
      body: req.body,
    });

    return next.handle().pipe(
      tap(() => {
        const res = context.switchToHttp().getResponse();

        this.logger.log({
          method: req.method,
          path: req.originalUrl,
          status: res.statusCode,
          durationMs: Date.now() - start,
        });
      }),
    );
  }
}
