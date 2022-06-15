import React, {useState} from "react";

import "./navbar.styles.css";

import {BiHomeAlt} from "react-icons/bi";
import {CgProfile } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import {FiTwitter} from "react-icons/fi";

 
const NavBar = () => {
    const [val, setVal] = useState(0);
    return (
        <div className="navigation">
            <ul>
                <li className={`list ${val === 0 ? 'active' : null}`} onClick={() => setVal(0)}>
                    <a href="#">
                        <span className="icon">
                            <BiHomeAlt />
                        </span>
                        <div className="text">
                            home
                        </div>
                    </a>
                </li>
                <li className={`list ${val === 1 ? 'active' : null}`} onClick={() => setVal(1)}>
                    <a href="#">
                        <span className="icon">
                            <CgProfile />
                        </span>
                        <div className="text">
                            profile
                        </div>
                    </a>
                </li>
                <li className={`list ${val === 2 ? 'active' : null}`} onClick={() => setVal(2)}>
                    <a href="#">
                        <span className="icon">
                            <BsInstagram />
                        </span>
                        <div className="text">
                            instagram
                        </div>
                    </a>
                </li>
                <li className={`list ${val === 3 ? 'active' : null}`} onClick={() => setVal(3)}>
                    <a href="#">
                        <span className="icon">
                            <FiGithub />
                        </span>
                        <div className="text">
                            github
                        </div>
                    </a>
                </li>
                <li className={`list ${val === 4 ? 'active' : null}`} onClick={() => setVal(4)}>
                    <a href="#">
                        <span className="icon">
                            <FiTwitter />
                        </span>
                        <div className="text">
                            twitter
                        </div>
                    </a>
                </li>
                <div className={`indicator ${val === 0 ? 'right0' : val === 1 ? 'right1' : val===2 ? 'right2' : val === 3 ? 'right3' : val === 4 ? 'right4' : null}`} />
            </ul>
        </div>        
    )
}

export default NavBar;