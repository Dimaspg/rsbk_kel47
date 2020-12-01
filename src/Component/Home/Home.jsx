import React, { } from 'react';
import Cardinfo from '../Cardinfo/Cardinfo';
import Heading from '../Heading.jsx/Heading';
import Api from '../Api/Api';

export default function Home() {
    return (
        <div>
            <div>
                <Heading />
            </div>
            <div>
                <Cardinfo />
            </div>
        </div>

    )
}
