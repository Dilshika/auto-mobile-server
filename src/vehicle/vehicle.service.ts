/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { gql,request } from 'graphql-request';
import { CreateVehicleInput } from './dto/create-vehicle.input';
import { UpdateVehicleInput } from './dto/update-vehicle.input';

@Injectable()
export class VehicleService {
  create(createVehicleInput: CreateVehicleInput) {
    //create query
  }

  async findAll(offset:number,first:number,order:string) {
    const query=gql`
    query findAll {
      allVehicles(orderBy: ${order}, offset: ${offset}, first: ${first}) {
        nodes {
          ageOfVehicle
          carMake
          carModel
          email
          firstName
          id
          lastName
          manufacturedDate
          nodeId
          vinNumber
        }
      }
    }
    `;
    const Vehicles=await request('http://localhost:5000/graphql',query);
    console.log(Vehicles.allVehicles.nodes);
    return [Vehicles.allVehicles.nodes];
  }

  async findOne(id: number) {
    const query=gql`
    query VehicleById{
      vehicleById(id:${id}) {
        ageOfVehicle
        carMake
        carModel
        email
        firstName
        vinNumber
        nodeId
        manufacturedDate
        id
        lastName
      }
    }
    `
    const vehicle= await request('http://localhost:5000/graphql',query);
    console.log(vehicle)
    return vehicle;
  }

  async update(id: number, updateVehicleInput: UpdateVehicleInput) {
    const query=gql`
    mutation update {
      updateVehicleById(input: {vehiclePatch: {${updateVehicleInput}}, id: ${id}}) {
        vehicle {
          ageOfVehicle
          carMake
          carModel
          email
          firstName
          id
          lastName
          manufacturedDate
          nodeId
          vinNumber
        }
      }
    }`
    await request('http://localhost:5000/graphql',query);
    return `${id} vehicle Updated Sucessfully`

  }

  async remove(id: number) {
    const query=gql`
    mutation delete{
      deleteVehicleById(input:{id:${id}})
    }`
    await request('http://localhost:5000/graphql',query);
    return `Deleted ${id} vehicle`;
  }
}
