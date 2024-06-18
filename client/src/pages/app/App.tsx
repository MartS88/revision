import React, { Suspense, useEffect, useState } from 'react';
import classes from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Loader from '@/components/loader/Loader';
import Home from "@/pages/home/Home";
import Favourites from "@/pages/favourites/Favourites";




const allRoutes = [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/favourites', element: <Favourites/> },
];

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const loadTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        const loaderTimer = setTimeout(() => {
            setShowLoader(false);
        }, 1500);

        return () => {
            clearTimeout(loadTimer);
            clearTimeout(loaderTimer);
        };
    }, []);

    return (
        <Suspense
            fallback={
                <div className={classes.loader}>
                    <div className={classes.loader_block}>
                        <Loader height={'65'} width={'65'} color="whitesmoke" />
                    </div>
                </div>
            }
        >
            {showLoader ? (
                <div className={classes.loader}>
                    <div className={classes.loader_block}>
                        <Loader height={'65'} width={'65'} color="whitesmoke" />
                    </div>
                </div>
            ) : (
                <Routes>
                    {allRoutes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            )}
        </Suspense>
    );
};

export default App;
