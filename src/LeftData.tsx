import React from 'react';
import { useAppContext } from './AppContext';
import './LeftData.css';

const LeftData: React.FC = () => {
    const { grid } = useAppContext();
    const alive = grid.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e);
    return (
        <div className="leftData">
            <h4>Data</h4>
            <div className="data">
                <div className="data-data">
                    <p>Alive: </p>
                    <p>Dead: </p>
                </div>
                <div className="data-data">
                    <p>{alive}</p>
                    <p>{900 - alive}</p>
                </div>
            </div>
            <div className="data">
                <div className="data-data">
                    <p>Ratio: </p>
                </div>
                <div className="data-data">
                    <p>{(alive / (900 - alive) * 100).toPrecision(2)}%</p>
                </div>
            </div>
        </div>
    );
}

export default LeftData;