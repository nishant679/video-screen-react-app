import React from 'react';
import download from '../icons/STATUS_DOWNLOADED.png';
import upload from '../icons/STATUS_UPLOADED.png';
import none from '../icons/STATUS_NONE.png';

const localData = require('./responseData.json');

const downloadIcon = require('../icons/STATUS_DOWNLOADED.png');

const IconMapper = {
    "STATUS_DOWNLOADED" : download,
    "STATUS_UPLOADED" : upload,
    "STATUS_NONE" : none
}

const VideoList = (props) => {

    const data = localData || props.data,
        loading = props.loading || false;

    if(loading){
        return(
            <h5>Loading</h5>
        );
    };

    return(
        <div className="container">
        <div className="row">
            {
                data.map(video => {
                    const thumbnail = video.thumbnail || "",
                        dateTime = video.dateTime || "",
                        status = video.status || "",
                        fileSize = video.fileSize || "",
                        dateString = new Date(dateTime),
                        date = dateString.toLocaleDateString(),
                        time = dateString.toLocaleTimeString();


                    return(
                        <div className="col-sm-6">
                            <div className="thumbnail container"> <img src={thumbnail} alt="video"/></div> 
                            <div className="d-flex justify-content-around mt-1">
                                <div className="h5">{date}</div>
                                <div className="status-icon h5"> <img src={IconMapper[status]} alt="status" /></div>
                            </div>
                            <div className="d-flex justify-content-around">
                                <div className="h5">{'@ ' + time}</div>
                                <div className="h5 text-muted">{fileSize}</div>
                            </div>
                        </div>
                    );

                })
            };
        </div>
        </div>
    );
        
};

export default VideoList;