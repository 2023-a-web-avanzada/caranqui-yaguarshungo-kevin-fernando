import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], //controlares que recibe
  providers: [AppService],
})
export class AppModule {}
