import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';


@Table({ tableName: 'albums' })
export class Album extends Model<Album> {
    @ApiProperty({ example: '88c', description: 'Album ID' })
    @Column({ type: DataType.STRING, defaultValue: DataType.STRING, primaryKey: true })
    albumId: string;

    @ApiProperty({ example: 'Title of the album', description: 'Title of the album' })
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @ApiProperty({ example: 'https://loremflickr.com/150/150/cats?lock=3339024624254976', description: 'URL of the album' })
    @Column({ type: DataType.STRING, allowNull: false })
    url: string;

    @ApiProperty({ example: '1', description: 'ID of the user who owns the album' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @ApiProperty({ example: '2022-12-23T11:19:27.017Z', description: 'Creation date' })
    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
    createdAt: Date;

    @ApiProperty({ example: '2022-12-23T11:19:27.017Z', description: 'Last update date' })
    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
    updatedAt: Date;
}
