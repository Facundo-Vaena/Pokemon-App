import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <h1>Soy Home</h1>
            <button><Link to='/'>Landing</Link></button>
            <button><Link to='/creation'>Pokemon Creation</Link></button>
            <button><Link to='/detail'>Details</Link></button>
        </div>
    )
}