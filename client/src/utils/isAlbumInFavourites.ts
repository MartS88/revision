import {IAlbum} from "@/types/ialbum";

export const isAlbumInFavourites = (array: IAlbum[], id: string): boolean => {
    return array.some((album: IAlbum) => album.albumId === id);
}
