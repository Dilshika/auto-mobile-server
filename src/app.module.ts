/* eslint-disable prettier/prettier */
import { Module, } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
  GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/vehicle-schema.gql'),
    uploads:false
  }),
  VehicleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
