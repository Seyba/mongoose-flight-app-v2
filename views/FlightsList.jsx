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
                    return(<div style={{display: 'flex', justifyContent:'center'}}>
                        <li style={{listStyle: 'none', display: 'flex'}}>
                            <div style={{fontSize: '20px', padding: '5px 5px'}}>{flight.airline}</div>
                            <a style={{textDecoration: 'none',fontSize: '20px', padding: '5px 5px'}} href={`/flights/list/${flight._id}`}>Details</a>
                        </li>
                    </div>)
                })
            }
            </ul>   
        </main>
    )
}

module.exports = FlightsList