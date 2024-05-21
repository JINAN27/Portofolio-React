import React from 'react';
import ahul from './asset/ahul.jpg';

export default class Header extends React.Component {
    render() {
        return(
            <header>
            <div class="header-container">
                <div class="profile-pic">
                    <img src={ahul} alt="foto profil" width="150px"></img>
                </div>
                <div class="about-me">
                    <h1>MUHAMMAD MIFTAHUL JINAN</h1>                
                </div>
            </div>
        </header>
        )
    }
}