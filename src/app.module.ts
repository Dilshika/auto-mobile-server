/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [FileUploadModule,
  GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/file-schema.gql'),
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
