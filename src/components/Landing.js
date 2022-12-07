import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import Coin from "./coin";
// css moudle
import Styles from "./Landing.module.css";

//gift
import Loader from "./Loader";
const Landing = () => {
    const [cions, setCoins] = useState([]);
    const [Serach, setSerach] = useState("");
    useEffect(() => {
        const fetchApi = async () => {
            return setCoins(await api());
        };
        fetchApi();
    }, []);

    const chengHandler = (e) => {
        setSerach(e.target.value);
    };

    // filter function
    // اینجا میگیم برو تک تک ابجکت های کویینز نام هاشون رو ببین با جیزی که کاربر وارد میکنه یکی هست یا ن اگه هست برگردون
    const SerachCoins = cions.filter((coin) =>
        coin.name.toLowerCase().includes(Serach.toLowerCase())
    );


    return (
        <div
            style={{ maxWidth: "100%", textAlign: "center" }}
            className={Styles.coinContainer}>
                <h1> Crypto Market </h1>
            <input
                className={Styles.input}
                value={Serach}
                onChange={chengHandler}
                type='text'
                placeholder='Serach'
            />

            {cions.length ? (
                SerachCoins.map((coin) => (
                    <Coin key={coin.id} coinData={coin} />
                    ))
                    ) : (
                        <>
                        <Loader />
                        </>
                        )}
                     
        </div>
    );
};

export default Landing;
