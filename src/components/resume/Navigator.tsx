import React from 'react';

function Navigator(): JSX.Element {
    return (
        <nav>
            <div className="nav-wrapper">
                <h1 className="nav-logo">안녕하세요 권우석입니다<span className="period-mark">.</span></h1>
                <ul className="nav-menu">
                    <li><a href="#work-experience">Work Experience</a></li>
                    <li><a href="#other-experience">Other Experience</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#certificate">Certificate</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigator