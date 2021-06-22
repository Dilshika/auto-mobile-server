/* eslint-disable prettier/prettier */
import { Args, Mutation, Resolver,Query } from '@nestjs/graphql';
import { createWriteStream } from 'fs';
import { GraphQLUpload, FileUpload } from 'graphql-upload';



@Resolver(()=>String)
export class FileUploadResolver {

    @Query(()=>String)
    async get(){
        return 'true';
    }

    
    @Mutation(() => Boolean)
    async uploadFile(@Args({name: 'file', type: () => GraphQLUpload})
    {
        createReadStream,
        filename
    }: FileUpload): Promise<boolean> {
        return new Promise(async (resolve, reject) => 
            createReadStream()
                .pipe(createWriteStream(`./uploads/${filename}`))
                .on('finish', () => resolve(true))
                .on('error', () => reject(false))
        );
    }
}
