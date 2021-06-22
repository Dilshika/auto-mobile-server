import { Module } from '@nestjs/common';
import { FileUploadResolver } from './resolver/file-upload.resolver';
import { FileUploadService } from './service/file-upload.service';

@Module({
  providers: [FileUploadResolver, FileUploadService],
})
export class FileUploadModule {}
