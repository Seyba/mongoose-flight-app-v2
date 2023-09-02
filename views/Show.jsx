const React = require('react')
const Header = require('./Header')
const Show = (props) => {
    const { airline, flightNo, departs } = props.flight
    const formattedDate = departs.toISOString().slice(0, 16).replace('T', ' ')
    
    return(
        <main>
            <Header/>
            <h2 style={{textAlign: 'center'}}>Flight</h2>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
                <div>
                    <h3 >AIRLINE</h3>
                    <h5>{airline}</h5>
                </div>
                <div>
                    <h3>FLIGHT NUMBER</h3>
                    <h5>{flightNo}</h5>
                </div>
                <div>
                    <h3>DEPARTURE DATE</h3> 
                    <h5>{formattedDate}</h5>
                </div>
            </div>
        </main>
    )
}

module.exports = Show