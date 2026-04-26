import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    const object = plainToClass(metatype!, value);
    const errors = await validate(object, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      const fetchError = (report: any, err: any) =>
        Object.keys(err).forEach((key: any) => {
          if (err[key].constraints === undefined) {
            report[err[key].property] = {};
            fetchError(report[err[key].property], err[key].children);
            return;
          }
          const errorKeys = Object.keys(err[key].constraints);
          report[err[key].property] = err[key].constraints[errorKeys[0]];
        });

      const errorReport: any = {};
      fetchError(errorReport, errors);

      throw new BadRequestException(errorReport);
    }

    return object;
  }
}
