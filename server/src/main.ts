import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as process from 'process';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';



async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, Accept',
  });

  const config = new DocumentBuilder()
    .setTitle('Fullstack Dapp')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('Fullstack Dapp')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(5000, () => console.log(`Server started on ${PORT} port`));
}

bootstrap();






//
// 'use strict';
//
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkInsert('Albums', [
//       {
//         albumId: 'c2d48df7-23db-4b1b-a6dc-f2cfe13ce88c',
//         id: '749b9cc9-edf8-46f9-9f65-d01aa2c3d87f',
//         title: 'Задания задача и правительством требует за сомнений реализация значимость особенности.',
//         url: 'https://loremflickr.com/150/150/cats?lock=3339024624254976',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'c2d48df7-23db-4b1b-a6dc-f2cfe13ce88c',
//         id: 'bb6a41f3-0f3a-41e1-9618-9e258ac5cb09',
//         title: 'Оценить постоянное анализа соответствующей реализация повседневная этих за создание на.',
//         url: 'https://loremflickr.com/150/150/cats?lock=2042427110064128',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'c2d48df7-23db-4b1b-a6dc-f2cfe13ce88c',
//         id: '7de48cd1-783c-4638-8518-2b79c7560861',
//         title: 'Значимость этих информационно-пропогандистское представляет занимаемых же разнообразный.',
//         url: 'https://loremflickr.com/150/150/cats?lock=8457497371213824',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'a1b2c3d4-5678-9abc-def0-1234567890ab',
//         id: '1a2b3c4d-5678-9abc-def0-1234567890ab',
//         title: 'Новые технологии открывают перед нами новые горизонты.',
//         url: 'https://loremflickr.com/150/150/cats?lock=1234567890',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'a1b2c3d4-5678-9abc-def0-1234567890ab',
//         id: '2b3c4d5e-6789-0abc-def0-1234567890ab',
//         title: 'Будущее информационных технологий непредсказуемо.',
//         url: 'https://loremflickr.com/150/150/cats?lock=2345678901',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'a1b2c3d4-5678-9abc-def0-1234567890ab',
//         id: '3c4d5e6f-7890-1abc-def0-1234567890ab',
//         title: 'Инновации и новые подходы к бизнесу.',
//         url: 'https://loremflickr.com/150/150/cats?lock=3456789012',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'b2c3d4e5-6789-0abc-def0-1234567890ab',
//         id: '4d5e6f7g-8901-2abc-def0-1234567890ab',
//         title: 'Успешные проекты и их реализация.',
//         url: 'https://loremflickr.com/150/150/cats?lock=4567890123',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'b2c3d4e5-6789-0abc-def0-1234567890ab',
//         id: '5e6f7g8h-9012-3abc-def0-1234567890ab',
//         title: 'Создание и развитие новых идей.',
//         url: 'https://loremflickr.com/150/150/cats?lock=5678901234',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'b2c3d4e5-6789-0abc-def0-1234567890ab',
//         id: '6f7g8h9i-0123-4abc-def0-1234567890ab',
//         title: 'Преимущества и недостатки современных технологий.',
//         url: 'https://loremflickr.com/150/150/cats?lock=6789012345',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'c3d4e5f6-7890-1abc-def0-1234567890ab',
//         id: '7g8h9i0j-1234-5abc-def0-1234567890ab',
//         title: 'Эволюция и перспективы технологий.',
//         url: 'https://loremflickr.com/150/150/cats?lock=7890123456',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'c3d4e5f6-7890-1abc-def0-1234567890ab',
//         id: '8h9i0j1k-2345-6abc-def0-1234567890ab',
//         title: 'Переосмысление подходов к разработке ПО.',
//         url: 'https://loremflickr.com/150/150/cats?lock=8901234567',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         albumId: 'c3d4e5f6-7890-1abc-def0-1234567890ab',
//         id: '9i0j1k2l-3456-7abc-def0-1234567890ab',
//         title: 'Ключевые аспекты успешного бизнеса.',
//         url: 'https://loremflickr.com/150/150/cats?lock=9012345678',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ], {});
//   },
//
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete('Albums', null, {});
//   }
// };
