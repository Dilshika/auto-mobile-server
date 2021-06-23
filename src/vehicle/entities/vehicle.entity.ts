/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Vehicle {
  @Field(() => Int)
  id:number;

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
