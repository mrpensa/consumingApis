import React from 'react';
import { Link } from 'react-router-dom';

export function Environment({ environment }) {
    const env = `/${environment}`;

    return (
        <div>
            <h1 style={{ color: 'white' }}> Welcome to My React App</h1>
            <Link to={environment}>
                <button>Ir a...</button>
            </Link>
        </div>
    );
}
