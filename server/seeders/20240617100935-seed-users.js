'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: "Жанна",
        username: "Evdokim22",
        email: "Milen.OHara39@yandex.ru",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Савва",
        username: "Vyacheslav84",
        email: "Fedor.OReilly@yandex.ru",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Якуб",
        username: "Maksimilukyan80",
        email: "Onufrii.Ziemann@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Александр",
        username: "Alex1988",
        email: "alex1988@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Мария",
        username: "Maria123",
        email: "maria123@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Дмитрий",
        username: "Dmitry56",
        email: "dmitry56@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Ольга",
        username: "Olga78",
        email: "olga78@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "Иван",
        username: "IvanIvanov",
        email: "ivan.ivanov@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "Сергей",
        username: "Sergey85",
        email: "sergey85@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: "Екатерина",
        username: "Kate_K",
        email: "kate_k@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
