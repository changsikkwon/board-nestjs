import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber } from 'class-validator';
import { CreateBoardDto } from './create-board.dto';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {
    @IsNumber()
    id: number;

    @IsString()
    user_id?: string;

    @IsString()
    title?: string;

    @IsString()
    content?: string;
}
