/* eslint-disable prettier/prettier */
import { CreateVehicleInput } from './create-vehicle.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVehicleInput extends PartialType(CreateVehicleInput) {

  @Field()
  firstName:string;

  @Field()
  lastName:string;

  @Field()
  email:string;

  @Field()
  carMake:string;

  @Field()
  carModel:string;

  @Field()
  vinNumber:string;

  @Field()
  manufacturedDate:string;

  @Field(()=>Int)
  ageOfVehicle:number;
}
