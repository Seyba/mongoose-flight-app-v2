const React = require('react')
const Header = require('./Header')
const Index = (props) => {
    const { flights } = props
    return(
        <main style={{textAlign: 'center'}}>
            
            <Header/>
            <h2 style={{marginLeft: '30px'}}>Flights List</h2>
            <ul>
                { flights.map(flight => {
                    const formattedDate = flight.departs.toISOString().slice(0, 16).replace('T', ' ')
                    const currentDate = new Date().toISOString().slice(0, 16).replace('T', ' ')
                    if(formattedDate <= currentDate){
                        return(
                            <li style={{listStyle: 'none'}}><a key={flight._id} style={{color: 'red', textDecoration: 'none', fontSize: '20px'}} href={`/flights/${flight._id}`}>{flight.airline}</a></li>
                        )
                    } else{
                        return(
                            <li style={{listStyle:'none'}}><a key={flight._id} style={{color: 'black', textDecoration: 'none', fontSize: '20px'}} href={`/flights/${flight._id}`}>{flight.airline}</a></li>
                        )
                    }
                })}
            </ul>
        </main>
    )
}

module.exports = Index