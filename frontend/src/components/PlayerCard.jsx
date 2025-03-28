import "../css/PlayerCard.css"

function PlayerCard({player}) {
    
    function onAddClick() {
        alert("Clicked!");
    } 

    return <div className="player-card">
        <div className="head-shot">
            <img src={player.url} alt={`${player.firstName} ${player.lastName}`}/>
        </div>
        <div className="player-info">
            <h3>{player.firstName} {player.lastName}</h3>
            <p>{player.position}</p>
            <p>{player.team}</p>
            <div className="card-overlay">
                <button className="add-button" onClick={onAddClick}>
                    Add
                </button>
            </div>
        </div>
    </div>
}

export default PlayerCard