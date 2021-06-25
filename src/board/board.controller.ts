import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.findOne(id);
  }

    @Get()
    findAll() {
        return this.boardService.findAll();
    }
}
