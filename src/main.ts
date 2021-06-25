import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // DTO에 작성한 검증값 이외에는 서버가 받지 않도록 설정
            forbidNonWhitelisted: true, // DTO에 작성한 검증값 이외의 값이 들어오면 에러 발생(400 error)
            transform: true, // 요청으로 넘어온 데이터 타입 변환
        }),
    );
    await app.listen(3000);
}
bootstrap();
