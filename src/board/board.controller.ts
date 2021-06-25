import { Body, Controller, Get, Delete, Param, ParseIntPipe, Post, Patch } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
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

    @Post()
    create(@Body() createBoardDto: CreateBoardDto) {
        return this.boardService.create(createBoardDto);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateBoardDto: UpdateBoardDto) {
        return this.boardService.update(id, updateBoardDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.boardService.deleteOne(id);
    }
}
