import React, { useState, useMemo, useEffect } from 'react';
import './index.css'

export default function SuperheroForm() {
    const powerSourceOptions = [
        'Bitten by a strange creature',
        'Radioactive exposure',
        'Science experiment',
        'Alien heritage',
        'Ancient artifact discovery',
        'Other'
    ];

    const powersOptions = [
        'Super Strength',
        'Super Speed',
        'Flight',
        'Invisiblity',
        'Telekinesis',
        'Other'
    ];

    const [heroName, setHeroName] = useState('');
    const [realName, setRealName] = useState('');
    const [powerSource, setPowerSource] = useState('');
    const [powers, setPowers] = useState([]);

    const handlePowersChange = e => {
        const { value, checked } = e.target;
        setPowers(checked ? [...powers, value] : powers.filter(p => p !== value));
    }

    return (
        <div className='form-wrap'>
            <h2>Superhero Application Form</h2>
            <p>Please complete all fields</p>
            <form method='post' action=''></form>
        </div>
    )
}

