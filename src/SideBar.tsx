import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import './SideBar.css';
import { useAppContext } from "./AppContext";
import LeftData from "./LeftData";

import settings from './assets/settings.png';
import collapse from './assets/collapse.png';
import gh from './assets/gh.png';

interface SideProps { }
const SideBar: React.FC<SideProps> = () => {

    const { setGrid, gridSize, updateGridSize, emptyGrid } = useAppContext();

    const densityRef = useRef<HTMLSelectElement>(null);

    const [sideBarOpen, setSideBarOpen] = useState(true);
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            }
        }
    }
    const slideItem = {
        hidden: {
            opacity: 0,
            x: '32px'
        },
        show: {
            opacity: 1,
            x: '0',
            transition: {
                ease: "easeOut",
            }
        }
    }

    function densityChange() {
        const sel = densityRef.current?.options.selectedIndex ?? 0;
        const density = [20, 30, 40];
        console.log('before', gridSize)
        updateGridSize(density[sel]);
        console.log('after', gridSize)
        emptyGrid && setGrid && setGrid(emptyGrid(density[sel]))
    }

    return (
        <motion.div
            className="sideBar"
            initial={{ width: 52 }}
            animate={{ width: sideBarOpen ? 300 : 52 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className="options"
                variants={container}
                initial="hidden"
                animate={sideBarOpen ? "show" : "hidden"}
            >
                <motion.div className="option" variants={slideItem}>
                    <LeftData />
                </motion.div>
                {/* <motion.div className="option" variants={slideItem}>
                    <div className="option-name">
                        Density
                    </div>
                    <select className="option-values" ref={densityRef} onChange={densityChange}>
                        <option value="20" defaultChecked>Low</option>
                        <option value="30">Medium</option>
                        <option value="40">High</option>
                    </select>
                </motion.div> */}
            </motion.div>
            <div className="side-elem"
                style={{ padding: '12px 0px' }}
                title="Read More"
                onClick={() => window.open('https://github.com/ninjaasmoke/game-of-life#conways-game-of-life', '_blank')} >
                <motion.img
                    src={gh}
                    alt="Gihhub"
                    animate={{ rotateZ: sideBarOpen ? 0 : -360 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.p
                    animate={{
                        display: sideBarOpen ? 'block' : 'none',
                    }}
                >See Doc</motion.p>
            </div>
            <div className="side-elem"
                style={{ padding: '12px 0px' }}
                onClick={() => setSideBarOpen(!sideBarOpen)} >
                <motion.img
                    src={!sideBarOpen ? settings : collapse}
                    alt="Collapse"
                    animate={{ rotateZ: sideBarOpen ? 0 : 180 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.p
                    animate={{
                        display: sideBarOpen ? 'block' : 'none',
                    }}
                >Collapse</motion.p>
            </div>
        </motion.div>
    )
}

export default SideBar;