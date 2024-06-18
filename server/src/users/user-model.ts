import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
    name: string;
    username: string;
    email: string;

}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Martin', description: 'Name' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: 'user1', description: 'Username' })
    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    username: string;

    @ApiProperty({ example: 'user@example.com', description: 'Email' })
    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    email: string;


}
