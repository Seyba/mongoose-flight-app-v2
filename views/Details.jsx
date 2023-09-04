const React = require('react')
const Header = require('./Header')
const Details = (props) => {
    const { airline, flightNo, destinations, airport, departs, _id } = props.flight
    const departureDate = departs.toISOString().slice(0, 16).replace('T', ' ')
    const destPlaceholder = (destinations.length? (
        destinations.map(dest => {
            const formattedArrival = dest.arrival.toISOString().slice(0, 16).replace('T', ' ')
            return <li style={{listStyle: 'none'}}>{dest.airport} | {formattedArrival} </li>
        })
    ):(
        "No Destinations"
    ))
    
    const destInfo = destinations.map(dest => {
        const formattedArrival = dest.arrival.toISOString().slice(0, 16).replace('T', ' ')
        return <li>{dest.airport} | {formattedArrival} </li>
    })
    
    return(
        <main>
            <Header/>
            <h2 style={{textAlign: 'center'}}>Flight Details</h2>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
                <div>
                    <h4>AIRLINE</h4>
                    <h5>{airline}</h5>
                </div>
                <div>
                    <h4>FLIGHT NUMBER</h4>
                    <h5>{flightNo}</h5>
                </div>
                <div>
                    <h4>DEPARTURE DATE</h4>
                    <h5>{departureDate}</h5>
                </div>
                <div>
                    <h4>AIRPORT</h4>
                    <h5>{airport}</h5>
                </div>
                <div>
                    <h4>DESTINATIONS</h4>
                    <h5>{destPlaceholder}</h5>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h3>Add Destination</h3>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
                
                <form action={`/flights/list/${_id}?_method=PUT`}method="POST">
                    <label htmlFor="airport">Destination Airport</label>
                    <select name="airport">
                        <option value="AUS">AUS</option>
                        <option value="DAL">DAL</option>
                        <option value="LAX">LAX</option>
                        <option value="SAN">SAN</option>
                        <option value="SEA">SEA</option>
                    </select>

                    <label htmlFor="arrival">Arrival Date</label>
                    <input type="datetime-local" name="arrival"/>
                    
                    <input type="submit" name="" value="Add Destination"/>
                </form>
            </div>
        </main>
    )
}

module.exports = Details