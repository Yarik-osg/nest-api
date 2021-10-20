import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from '../entities/form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Form])],
  controllers: [],
  providers: [],
})
export class FormModule {}
