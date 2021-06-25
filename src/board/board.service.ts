import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

let boards = [
    {
        id: 0,
        user_id: 'a',
        title: 'a',
        content: 'a',
    },
    {
        id: 1,
        user_id: 'a',
        title: 'a',
        content: 'a',
    },
    {
        id: 2,
        user_id: 'a',
        title: 'a',
        content: 'a',
    },
];

@Injectable()
export class BoardService {
    async findAll() {
        return boards;
    }

    async findOne(id: number) {
        const board = boards.filter((board) => board.id === id);

        if (!board) throw new NotFoundException();

        return board;
    }

    async create(createBoardDto: CreateBoardDto) {
        boards = [
            ...boards,
            {
                id: boards[boards.length - 1].id + 1,
                user_id: createBoardDto.user_id,
                title: createBoardDto.title,
                content: createBoardDto.content,
            },
        ];
        return boards;
    }

    async update(id: number, updateBoardDto: UpdateBoardDto) {
        await this.findOne(id);

        const oldBoards = boards.filter((board) => board.id !== id);
        const oldBoard = boards.find((board) => board.id == id);

        const newBoard = {
            ...oldBoard,
            ...updateBoardDto,
        };

        boards = [...oldBoards, newBoard].sort((a, b) => a.id - b.id);

        return boards;
    }

    async deleteOne(id: number) {
        await this.findOne(id);

        const newBoards = boards.filter((board) => board.id !== id);

        boards = newBoards;

        return boards;
    }
}
