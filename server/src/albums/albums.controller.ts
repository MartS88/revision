import {Controller, Get} from '@nestjs/common';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {AlbumsService} from "./albums.service";

@Controller('albums')
export class AlbumsController {
    constructor(private readonly albumService: AlbumsService) {
    }

    @ApiOperation({summary: 'Get albums'})
    @ApiResponse({status: 200, description: 'Data fetched successfully'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    @Get('get')
    async fetchAlbums() {
        try {
            const albums = await this.albumService.getAlbums()
            return {success: true, albums};
        } catch (error) {
            return {success: false, error: error.message};
        }
    }


}
