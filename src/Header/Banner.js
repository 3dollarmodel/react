import React from 'react';

import Image from 'react-bootstrap/Image';
import bannerImage from './Resources/banner_1096x163.png';

const banner = () => {
    return (
        <Image src={bannerImage} fluid />
    );
}

export default banner;