import React from 'react';
import { useAppContext } from './AppContext';
import { Line } from 'react-chartjs-2';
import './LeftData.css';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftData: React.FC = () => {
    const { grid } = useAppContext();
    const alive = grid.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e);
    const [maxAlive, setMaxAlive] = useState(alive);

    const [gData, setGData] = useState<number[]>([0]);
    const [aData, setAData] = useState<number[]>([0]);

    useEffect(() => {
        setGData([...gData, alive]);
        setAData([...aData, alive]);
        if (alive > maxAlive) setMaxAlive(alive);
    }, [alive]);

    const data = {
        labels: gData.map(() => {
            if (gData.length > 10) gData.shift();
            return '';
        }),
        datasets: [
            {
                label: 'Alive',
                data: gData,
                fill: true,
                backgroundColor: '#d44446',
                strokeColor: '#d44446',
            },
        ],
    };

    const allData = {
        labels: aData.map(() => ''),
        datasets: [
            {
                label: 'All Time',
                data: aData,
                fill: true,
                backgroundColor: '#4644d4',
                strokeColor: '#4644d4',
            },
        ],
    };

    useEffect(() => {
        if (grid == [[]]) { setGData([]); setAData([]); }
    }, [grid]);

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
            <Line
                className="graph"
                type="line"
                data={data}
                options={{
                    legend: false,
                    pointRadius: 2,
                    pointHoverRadius: 2,
                    title: false,
                    animation: false,
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem: { yLabel: any; }) {
                                return tooltipItem.yLabel;
                            }
                        }
                    },
                    scales: {
                        yAxis: {
                            max: maxAlive ?? 200,
                            min: 0
                        }
                    }
                }}
                height={200} width={300} />
            <Line
                className="graph"
                type="line"
                data={allData}
                options={{
                    legend: false,
                    pointRadius: 2,
                    pointHoverRadius: 2,
                    title: false,
                    animations: false,
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem: { yLabel: any; }) {
                                return tooltipItem.yLabel;
                            }
                        }
                    },
                    scales: {
                        yAxis: {
                            max: maxAlive ?? 200,
                            min: 0
                        }
                    }
                }
                }
                height={200} width={300} />

        </div>
    );
}

export default LeftData;