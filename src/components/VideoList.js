import React from 'react';

const localData = require('./responseData.json');

const downloadIconUrl = 'src/icons/STATUS_DOWNLOADED.png';

const VideoList = (props) => {

    const data = localData || props.data;

    return(
        <div className="container">
            {
                data.map(video => {
                    const thumbnail = video.thumbnail || "",
                        date = video.date || "",
                        status = video.status || "",
                        fileSize = video.fileSize || "",
                        icon = downloadIconUrl,
                        time = "89980890";

                    return(
                        <div>
                            <div className="thumbnail"> <img src={thumbnail} alt="video"/></div> 
                            <div>
                                <div>{date}</div>
                                <div className="status-icon"> <img src="/home/nishant/web-projects/video-files-react-app/src/icons/STATUS_DOWNLOADED.png" alt="status" /></div>
                            </div>
                            <div>
                                <div>{time}</div>
                                <div>{fileSize}</div>
                            </div>
                        </div>
                    );

                })
            };
        </div>
    );
        
};

export default VideoList;