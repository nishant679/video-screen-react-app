import React from 'react';
import Search from '../icons/Search.png';
import Calander from '../icons/Calendar.png';

const Header = () => {
    return(
        <div className="container d-flex justify-content-between mt-3 p-5">
            <div><h1>Video Files</h1></div>
            <div className="d-flex">
                <div className="p-2"> <img src={Search} alt="search"/> </div>
                <div className="p-2" > <img src={Calander} alt="calander" /> </div>
            </div>
        </div>
    );
};

export default Header;