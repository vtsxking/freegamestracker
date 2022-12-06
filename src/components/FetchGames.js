import axios from "axios";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";

function FetchGames() {
    const [gameData, setGameData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                console.log("fetching games...");
                const response = await axios.get('https://games.vtsxcode.xyz/getGames')
                console.log(response.data);
                setGameData(response.data);
            }
            catch (err) {
                console.log(err.message);
            }
        }
        getData();
    }, []);

    return (
        <>
            <div>
                {gameData.map((game) => {return <GameCard key={game.game.id} title={game.game.title} gameArt={game.game.image.url}/>})}
            </div>
        </>
    );
}

export default FetchGames;