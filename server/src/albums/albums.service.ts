import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './album-model';

@Injectable()
export class AlbumsService {
    constructor(
        @InjectModel(Album)
        private readonly albumRepository: typeof Album,
    ) {}

    async getAlbums(): Promise<Album[]> {
        try {
            return await this.albumRepository.findAll();
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching albums');
        }
    }
}
