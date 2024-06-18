import React, { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../../index.scss';
import classes from './Layout.module.scss';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [activeButton, setActiveButton] = React.useState<string>('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('favourites')) {
            setActiveButton('favourites');
        } else {
            setActiveButton('home');
        }
    }, [location]);

    const clickHandler = (url: string, buttonName: string) => {
        setActiveButton(buttonName);
        navigate(url);
    };

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <button
                    className={activeButton === 'home' ? classes.active : ''}
                    onClick={() => clickHandler('/home', 'home')}
                >
                    Каталог
                </button>

                <button
                    className={activeButton === 'favourites' ? classes.active : ''}
                    onClick={() => clickHandler('/favourites', 'favourites')}
                >
                    Избранное
                </button>
            </div>
            <div className={classes.main}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
