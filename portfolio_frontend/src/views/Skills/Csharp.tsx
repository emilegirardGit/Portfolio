import React from 'react';
import Nav from '../../components/Nav';
import '../../css/Skills.css';
import { useTranslation } from "react-i18next";
import Backbtn from '../../components/BackBtn';

const Csharp = () => {

    const { t } = useTranslation('skills');

     return (
        <div className='skill'>
            <Nav />
            <Backbtn />
            <h1>C Sharp</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>C#</h2>
                    <p>{t('csharpDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>ASP.NET</h2>
                    <p>{t('aspDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>WPF</h2>
                    <p>{t('wpfDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>Unity 2D</h2>
                    <p>{t('unityDesc')}</p>
                </div>
            </div>
        </div>
    );
}

export default Csharp;