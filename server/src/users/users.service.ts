import {User} from './user-model';
import {InjectModel} from '@nestjs/sequelize';
import {Injectable} from '@nestjs/common';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
    ) {
    }

    async getUsers() {
        try {
            const users = await this.userRepository.findAll()
            return users;

        } catch (error) {
            console.log(error)
        }
    }


}
