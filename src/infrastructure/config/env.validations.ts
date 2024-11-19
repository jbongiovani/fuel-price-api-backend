// codigo copiado, nao funcional
import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, Max, Min, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment = Environment.Development;

  @IsNumber()
  @Min(20000)
  @Max(29999)
  APP_PORT: number;
}

export function envValidate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.map((e) => `${e.property}: ${e.value}`).join('\n'));
  }
  return validatedConfig;
}
