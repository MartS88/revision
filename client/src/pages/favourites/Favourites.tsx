import React, {useState} from 'react';
import classes from './Favourites.module.scss';
import Layout from "@/components/layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, selectUser} from "@/store/slice/userSlice";
import {useNavigate} from "react-router-dom";
import {isAlbumInFavourites} from "@/utils/isAlbumInFavourites";
import {IAlbum} from "@/types/ialbum";
import Loader from "@/components/loader/Loader";
import Popup from "@/components/popup/Popup";
import {FcRemoveImage} from "react-icons/fc";
import {FaStar} from "react-icons/fa6";

const Favourites = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {favouriteArray} = useSelector(selectUser);
    const [loader, setLoader] = useState<boolean>(false);
    const [loaderId, setLoaderId] = useState<string>('');
    const [popImgId, setPopImgId] = useState<string>('');
    const [popActive, setPopActive] = useState<boolean>(false);


    const addHandler = (item: IAlbum, id: string) => {
        setLoaderId(id);
        setLoader(true);

        setTimeout(() => {
            dispatch(addFavourite(item));
            setLoaderId('');
            setLoader(false);
        }, 1000);
    };
    const popupHandler = (id: string) => {
        setPopImgId(id)
        setPopActive(!popActive);
    };

    return (
        <Layout>
            <div className={classes.favourites}>
                {favouriteArray.length === 0 ? (
                    <div className={classes.no_img_block}>
                        <FcRemoveImage size={50} />
                        <h2>Список избранного пуст</h2>
                        <div className={classes.svg_block}>
                            <span>Чтобы добавить картинку нажмите на</span>
                            <FaStar
                                size={20}
                                className={classes.star}
                                onClick={() => navigate('/')}
                            />
                        </div>
                    </div>
                ) : (
                    <div className={classes.favourites_block}>
                        {favouriteArray.map((album: IAlbum) => (
                            <div key={album.albumId} className={classes.favourite_item}>
                                {popActive && (
                                    <div className={classes.popup_block}>
                                        <Popup img={popImgId}   popupHandler={() => popupHandler('')} popActive={popActive} />
                                    </div>
                                )}
                                {loader && loaderId === album.albumId ? (
                                    <div className={classes.loader_block}>
                                        <Loader width={'20'} height={'20'} color="gray" />
                                    </div>
                                ) : (
                                    <FaStar
                                        color={isAlbumInFavourites(favouriteArray,album.albumId) ? 'gold' : 'gray'}
                                        size={20}
                                        className={classes.star}
                                        onClick={() => addHandler(album, album.albumId)}
                                    />
                                )}
                                <img
                                    src={album.url}
                                    alt='logo'
                                    width={250}
                                    onClick={() => popupHandler(album.url)}
                                />
                                <span className={classes.img_title}>{album.title}</span>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </Layout>
    );
};

export default Favourites;
