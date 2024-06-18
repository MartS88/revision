import React from 'react';
import classes from './Popup.module.scss';
import { IoMdCloseCircleOutline } from "react-icons/io";

interface PopupProps {
    img: string;
    popupHandler: (value: boolean) => void;
    popActive: boolean;
}

const Popup: React.FC<PopupProps> = ({ img, popupHandler, popActive }) => {
    return (
        <div className={classes.popup}>
            <div className={classes.popup_block}>
                <IoMdCloseCircleOutline
                    size='50'
                    color='red'
                    className={classes.close}
                    onClick={() => popupHandler(!popActive)}
                />
                <img src={img} alt='img' width='600'/>
            </div>
        </div>
    );
};

export default Popup;
