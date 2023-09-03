const React = require('react')
const Header = require('./Header')
const Details = (props) => {
    const { airline, flightNo, destinations, airport, departs } = props.flight
    const departureDate = departs.toISOString().slice(0, 16).replace('T', ' ')
    const arrivalTime = destinations.arrival
    const arrival = destinations.arrival
    
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
                    <h5>{arrival}|{arrivalTime}</h5>
                </div>
            </div>
        </main>
    )
}

module.exports = Details