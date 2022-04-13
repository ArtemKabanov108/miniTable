import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { serverConfig } from './server.config';
import { dbConfig } from './db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createValidationSchema } from './validation.schemsConfig';
require('dotenv').config({});

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [serverConfig, dbConfig],
      validationSchema: createValidationSchema(),
    }),
    TypeOrmModule.forRoot(
        {
          type: 'postgres',
          host: dbConfig().host,
          port: +dbConfig().port,
          username: dbConfig().username,
          password: dbConfig().password,
          database: dbConfig().database,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
          synchronize: true,
        }
    ),
  ],
})
export class ConfigModule {}