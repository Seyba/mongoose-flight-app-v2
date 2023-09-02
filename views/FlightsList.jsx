const React = require('react')
const Header = require('./Header')
const FlightsList = (props) => {
    const { flights } = props
    return(
        <main>
            <Header/>
            <h2 style={{textAlign: 'center'}}>Flights List</h2>
             <ul>
                {
                    flights.map(flight => {
                        return(<div>
                            <li>{flight.airline}</li>
                            <a href={`/flights/list/${flight._id}`}>Details</a>
                        </div>)
                    })
                }
             </ul>   
            
        </main>
    )
}

module.exports = FlightsList