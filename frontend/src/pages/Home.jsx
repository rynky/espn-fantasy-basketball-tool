import "../css/Home.css"
import PlayerCard from "../components/PlayerCard"
import {useState} from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const players = [
        {id: 1, firstName: "LeBron", lastName: "James", position: "Power Forward", team: "Los Angeles Lakers"},
        {id: 2, firstName: "Sandro", lastName: "Mamukelashvili", position: "Power Forward", team: "San Antonio Spurs"},
        {id: 3, firstName: "Anthony", lastName: "Davis", position: "Power Forward", team: "Dallas Mavericks"},
        {id: 4, firstName: "Shai", lastName: "Gilgeous-Alexander", position: "Shooting Guard", team: "Oklahoma City Thunder"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("------")
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for Players..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="trending-players">
            <h2 className="trending-title">Trending Players</h2>
            <div className="players-list"> 
                {players.map(player => <PlayerCard player={player} key={player.id}/>)}
            </div>
        </div>
    </div>
}

export default Home