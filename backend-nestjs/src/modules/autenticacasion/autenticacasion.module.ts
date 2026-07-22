import { Module } from '@nestjs/common';
import { AutenticacasionController } from './autenticacasion.controller';
import { AutenticacasionService } from './autenticacasion.service';

@Module({
  controllers: [AutenticacasionController],
  providers: [AutenticacasionService]
})
export class AutenticacasionModule {}
