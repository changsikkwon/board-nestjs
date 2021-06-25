import { IsString } from 'class-validator';

export class CreateBoardDto {
    @IsString()
    user_id: string;

    @IsString()
    title: string;

    @IsString()
    content: string;
}
