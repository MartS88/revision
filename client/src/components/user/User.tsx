import React, {useState} from 'react';
import classes from './User.module.scss';
import {IUser} from "@/types/iuser";
import {IAlbum} from "@/types/ialbum";
import {CiCirclePlus, CiCircleMinus} from "react-icons/ci";
import {FaStar} from "react-icons/fa6";
import Loader from "@/components/loader/Loader";
import Popup from "@/components/popup/Popup";
import {addFavourite, selectUser} from "@/store/slice/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {isAlbumInFavourites} from "@/utils/isAlbumInFavourites";

export interface UserProps {
    user: IUser,
    albums: IAlbum[],
}

const User: React.FC<UserProps> = ({user, albums}) => {
    const dispatch = useDispatch();
    const {favouriteArray} = useSelector(selectUser);
    const [activeId, setActiveId] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [imgActive, setImgActive] = useState<string>('');
    const [popImgId, setPopImgId] = useState<string>('');
    const [popActive, setPopActive] = useState<boolean>(false);

    const popupHandler = (id: string) => {
        setPopImgId(id)
        setPopActive(!popActive);
    };

    const imgIdHandler = (id: string) => {
        setImgActive(id);
    };

    const activeHandler = (id: number | null) => {
        setActiveId(id);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };


    const addHandler = (item: IAlbum) => {
        dispatch(addFavourite(item));
    };

    return (
        <div className={classes.user_item}>
            <div className={classes.user_buttons_block}>
                {activeId === user.id
                    ? <CiCircleMinus size='20' color='red' onClick={() => activeHandler(null)}/>
                    : <CiCirclePlus size='20' color='blue' onClick={() => activeHandler(user.id)}/>}
                <span className={classes.user_title}>{user.name}</span>
            </div>
            {activeId === user.id && (
                <div className={classes.user_info}>
                    {loading ? (
                        <div className={classes.loader_block}>
                            <Loader width={'70'} height={'70'} color='gray'/>
                        </div>
                    ) : (
                        <div className={classes.user_wrapper}>
                            <div className={classes.email}>Email: {user.email}</div>
                            <div className={classes.img_block}>
                                {albums.map((album: IAlbum) => (
                                    <div key={album.albumId} className={classes.img_wrapper}>
                                        {popActive && (
                                            <div className={classes.popup_block}
                                                 onClick={() => popupHandler('')}
                                            >
                                                <Popup
                                                    img={popImgId}
                                                    popupHandler={() => popupHandler('')}
                                                    popActive={popActive}
                                                />
                                            </div>
                                        )}
                                        <span
                                            className={classes.img_title}>{imgActive === album.albumId ? album.title : ''}</span>
                                        <FaStar
                                            color={isAlbumInFavourites(favouriteArray,album.albumId) ? 'gold' : 'gray'}
                                            size={20}
                                            className={classes.star}
                                            onClick={() => addHandler(album)}
                                        />
                                        <img
                                            src={album.url}
                                            alt='logo'
                                            width={250}
                                            onMouseEnter={() => imgIdHandler(album.albumId)}
                                            onMouseLeave={() => imgIdHandler('')}
                                            onClick={() => popupHandler(album.url)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default User;
