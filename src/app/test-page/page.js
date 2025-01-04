'use client'
import Style from "./scss/style.module.scss";
import Image from "next/image";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Contact() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <main className={`${Style.main}`}>
            <div className={`${Style.section}`}>
                <div className={`${Style.image_container}`}>
                    <div className={`${Style.image_bg}`}>
                        <div className={`${Style.image_inside}`}>
                            <Image
                                className="w-full"
                                src="/images/imp_logo.svg"
                                width={800}
                                height={800}
                                alt="Sunset in the mountains"
                            />
                        </div>
                    </div>
                </div>
                <div className={`${Style.input_container}`}>
                    <div className={`${Style.row}`}>
                        <label>Email</label>
                        <input type="text" placeholder="Please Enter Email" />
                    </div>
                    <div className={`${Style.row}`}>
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Please Enter Password"
                        />
                        <span onClick={handleTogglePassword} className={showPassword ? "text" : "password"}>
                            {showPassword ? (
                                <FaRegEyeSlash className={`${Style.eye}`} />
                            ) : (
                                <FaRegEye className={`${Style.eye}`} />
                            )}
                        </span>
                    </div>
                    <div className={`${Style.row}`}>
                        <button className={`${Style.button}`}>Submit</button>
                    </div>
                </div>
            </div>
        </main>
    )
}