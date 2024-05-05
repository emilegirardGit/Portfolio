import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/BackBtn.css';

const Backbtn: React.FC = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <button className="back-button" onClick={goBack}>
        Back
        </button>
    );
};

export default Backbtn;