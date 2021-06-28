import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardService } from './board/board.service';
import { BoardController } from './board/board.controller';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [BoardModule, TypeOrmModule.forRoot()],
    controllers: [AppController, BoardController],
    providers: [AppService, BoardService],
})
export class AppModule {}
