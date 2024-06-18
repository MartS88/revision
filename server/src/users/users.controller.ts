import {
  Controller, Get,

} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @ApiOperation({summary: 'Get users'})
  @ApiResponse({status: 200, description: 'Data fetched successfully'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  @Get('get')
  async fetchUsers() {
    try {
      const users = await this.usersService.getUsers()
      return {success: true, users};
    } catch (error) {
      return {success: false, error: error.message};
    }
  }





}