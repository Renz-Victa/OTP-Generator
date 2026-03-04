import React, { useState, useMemo, useEffect } from 'react';
import './index.css'

export default function FruitsSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useStae([]);

    function handleSubmit(e) {
        e.preventDefault();
    }

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }
        const timeoutId = setTimeout(async () => {
            try {
                const response = await fetch(``);
                setResults(DataTransfer.map(fruit = > fruit.name));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }, 700);

    }, [query]);

    return (
        <div id="search-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search-input">Search for fruits:</label>
                <input
                    id="search-input"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            <div id="results">
                {results.length > 0 ? (
                    results.map(item => (
                        results.map(item => (
                            <p key={item} className="result-item>">{item}</p>
                        ))
                    ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

