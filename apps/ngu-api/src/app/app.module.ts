import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../../../ngu-nx2/src/app/app.server.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/ngu-nx2/browser')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
