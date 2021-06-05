import React from 'react';

const localData = require('./responseData.json');

const VideoList = (props) => {

    const data = props.data;

    return(
        <div>
            {
                data.map(video => {
                    const thumbnail = video.thumbnail || "",
                        date = video.date || "",
                        status = video.status || "",
                        fileSize = video.fileSize || "";

                    return(
                        <div>
                            <div className="thumbnail"> <img src={thumbnail} alt="video"/></div> 
                            <div>
                                <div>{date}</div>
                                <div className="status-icon"> <img src={icon} alt="status" /></div>
                            </div>
                        </div>
                    );

                })
            }
        </div>
    );
        
}