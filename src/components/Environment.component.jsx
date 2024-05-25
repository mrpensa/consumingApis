import React from 'react';
import { Link } from 'react-router-dom';

export function Environment({ paths }) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>Welcome to My React App</h1>
        {paths.map((path, index) => (
          <Link key={index} to={path}>
            <button>Go to {path}</button>
          </Link>
        ))}
      </div>
    );
  }
