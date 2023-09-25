
import React from 'react/lib/React';
import logo from './logo.svg';

export default function nav() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
                <h1>React</h1>
            </div>
            <p>
                React Project-course
            </p>
        </nav>
    );
}
