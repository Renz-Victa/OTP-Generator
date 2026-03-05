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
    const [powers, setPowers] = useState('');
}

