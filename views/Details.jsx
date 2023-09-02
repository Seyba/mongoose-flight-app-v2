const React = require('react')
const Header = require('./Header')
const Details = (props) => {
    const { airline, flightNo, destinations, airport, depart } = props.flight

    return(
        <main>
            <Header/>
            <h2 style={{textAlign: 'center'}}>Flight Details</h2>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
                <div>
                    <h4>AIRLINE</h4>
                </div>
                <div>
                    <h4>FLIGHT NUMBER</h4>
                </div>
                <div>
                    <h4>DEPARTURE DATE</h4>
                </div>
                <div>
                    <h4>AIRPORT</h4>
                </div>
            </div>
        </main>
    )
}

module.exports = Details