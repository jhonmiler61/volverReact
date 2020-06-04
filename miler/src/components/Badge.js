import React from 'react';
import ReactDom from 'react-dom';
import confLogo from '../images/badge-header.svg'
import "./styles/Badge.css";
import 'bootstrap/dist/css/bootstrap.css';

class Badge extends React.Component{

    render(){

        const firsTName = "Miler";
        const lastName = "Mescua";
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <img 
                    className="Badge__avatar"
                    src='https://s.gravatar.com/avatar/b95af3806efb4827e824bd357220e660?s=80' alt="Avatar"/>
                    <h1>{firsTName} <br/> {lastName} </h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Ingeniero Mil</h3>
                    <div className="">@MilerKun</div>
                </div>
                <div className="Badge__footer">
                    #MilerConf
                </div>
                
            </div>
        );
    };
}

export default Badge;