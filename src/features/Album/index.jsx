import React from 'react';
import AlbumList from './components/AlbumList/index';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {

    const albumList = [

        {
            id: '1',
            name: 'Nhac hoa',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/b/9/c/db9c89bc1c980480cb0ccd5adc56bddc.jpg'
        },

        {
            id: '2',
            name: 'Nhac Viet',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/7/b/0/67b0738328d0c9c135736f5e2d9c8c25.jpg'
        },

        {
            id: '3',
            name: 'Nhac Trung',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/1/a/a/91aafed203ef96377b20900c0c35224e.jpg'
        },
    ]

    return (
        <div>
            <h2>Co the ban se thich day</h2>

            <AlbumList albumList ={albumList}/>
        </div>
    );
}

export default AlbumFeature;