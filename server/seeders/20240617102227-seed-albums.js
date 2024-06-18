'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('albums', [
      {
        albumId: '88c',
        title: 'Задания задача и правительством требует за сомнений реализация значимость особенности.',
        url: 'https://loremflickr.com/150/150/cats?lock=3339024624254976',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c1',
        title: 'Оценить постоянное анализа соответствующей реализация повседневная этих за создание на.',
        url: 'https://loremflickr.com/150/150/cats?lock=2042427110064128',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c2',
        title: 'Значимость этих информационно-пропогандистское представляет занимаемых же разнообразный.',
        url: 'https://loremflickr.com/150/150/cats?lock=8457497371213824',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c3',
        title: 'Новые технологии открывают перед нами новые горизонты.',
        url: 'https://loremflickr.com/150/150/cats?lock=1234567890',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c4',
        title: 'Будущее информационных технологий непредсказуемо.',
        url: 'https://loremflickr.com/150/150/cats?lock=2345678901',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c5',
        title: 'Инновации и новые подходы к бизнесу.',
        url: 'https://loremflickr.com/150/150/cats?lock=3456789012',
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c6',
        title: 'Успешные проекты и их реализация.',
        url: 'https://loremflickr.com/150/150/cats?lock=4567890123',
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c7',
        title: 'Создание и развитие новых идей.',
        url: 'https://loremflickr.com/150/150/cats?lock=5678901234',
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c8',
        title: 'Преимущества и недостатки современных технологий.',
        url: 'https://loremflickr.com/150/150/cats?lock=6789012345',
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c9',
        title: 'Эволюция и перспективы технологий.',
        url: 'https://loremflickr.com/150/150/cats?lock=7890123456',
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c10',
        title: 'Переосмысление подходов к разработке ПО.',
        url: 'https://loremflickr.com/150/150/cats?lock=8901234567',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c11',
        title: 'Ключевые аспекты успешного бизнеса.',
        url: 'https://loremflickr.com/150/150/cats?lock=9012345678',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c12',
        title: 'Развитие технологий будущего.',
        url: 'https://loremflickr.com/150/150/cats?lock=1029384756',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c13',
        title: 'Инновационные подходы в бизнесе.',
        url: 'https://loremflickr.com/150/150/cats?lock=1122334455',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c14',
        title: 'Технологические прорывы и их значение.',
        url: 'https://loremflickr.com/150/150/cats?lock=2233445566',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c15',
        title: 'Будущее искусственного интеллекта.',
        url: 'https://loremflickr.com/150/150/cats?lock=3344556677',
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c16',
        title: 'Применение машинного обучения в бизнесе.',
        url: 'https://loremflickr.com/150/150/cats?lock=4455667788',
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c17',
        title: 'Автоматизация и ее преимущества.',
        url: 'https://loremflickr.com/150/150/cats?lock=5566778899',
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c18',
        title: 'Будущее виртуальной реальности.',
        url: 'https://loremflickr.com/150/150/cats?lock=6677889900',
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c19',
        title: 'Потенциал блокчейн технологий.',
        url: 'https://loremflickr.com/150/150/cats?lock=7788990011',
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumId: '88c20',
        title: 'Прорывные технологии в финансах.',
        url: 'https://loremflickr.com/150/150/cats?lock=8899001122',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('albums', null, {});
  }
};
