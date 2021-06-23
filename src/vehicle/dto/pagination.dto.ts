/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class PaginationDto{

    @Field()
    order:string;

    @Field(()=>Int)
    first:number;

    @Field(()=>Int)
    offset:number

}