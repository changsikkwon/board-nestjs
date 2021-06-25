import { Injectable, NotFoundException } from '@nestjs/common';

let boards = [
    {
        id: 0,
        user_id: 'a',
        title: 'a',
        content: 'a'
    },
    {
        id: 1,
        user_id: 'a',
        title: 'a',
        content: 'a'
    },
    {
        id: 2,
        user_id: 'a',
        title: 'a',
        content: 'a'
    }
]

@Injectable()
export class BoardService {
    async findAll() {
        return boards;
    }

    async findOne(id: number) {
        const board = boards.filter((board) => board.id === id);

        if (!board) throw new NotFoundException();
        
        return board
    }
}

