import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnerService],
  controllers: [OwnerController],
  exports: [TypeOrmModule],
})
export class OwnerModule {}
