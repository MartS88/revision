import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { Album } from './album-model';

@Module({
    imports: [SequelizeModule.forFeature([Album])],
    providers: [AlbumsService],
    controllers: [AlbumsController],
    exports: [AlbumsService]
})
export class AlbumsModule {}
