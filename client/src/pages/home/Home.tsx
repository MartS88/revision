import React, { useEffect, useState } from 'react';
import classes from './Home.module.scss';
import axios from "axios";
import {IUser} from "@/types/iuser";
import {IAlbum} from "@/types/ialbum";
import Layout from "@/components/layout/Layout";
import User from "@/components/user/User";




const Home = () => {
    const [userData, setUserData] = useState<IUser[]>([]);
    const [albumData, setAlbumData] = useState<IAlbum[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users/get');
                const response2 = await axios.get('http://localhost:5000/albums/get');

                if (response.data.success && response2.data.success) {
                    setUserData(response.data.users);
                    setAlbumData(response2.data.albums);

                }
             return {
                    response,response2
             }
            } catch (error: any) {
                console.log(error);
                setErrorMsg(error.message);
            }
        }
        fetchData();
    }, []);


    return (
        <Layout>
            <div className={classes.home}>
                {userData.length > 0 ? userData.map((user: IUser) => (
                    <div
                        key={user.id}
                        className={classes.users_wrapper}>
                        <User user={user} albums={[...albumData.filter((item:any) => item.userId === user.id)]} />
                    </div>
                )) : (
                    <p>Data not found</p>
                )}
                {errorMsg && <p className={classes.error}>{errorMsg}</p>}
            </div>
        </Layout>
    );
};

export default Home;
