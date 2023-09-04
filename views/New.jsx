const React = require('react')
const Header = require('./Header')

const New = () => {
    const container = {
        fontSize: '25px', padding:'10px 0'
    }
    return(
        <main>
            <Header/>
            <section style={{display: 'flex', justifyContent: 'center'}}>
                <form action="/flights" method="POST">
                    <div style={container}>
                        <label htmlFor="airline">Select Airline: </label>
                        <select name="airline">
                            <option value="American">American</option>
                            <option value="Southwest">Southwest</option>
                            <option value="United">United</option>
                        </select>
                    </div>
                    <div style={container}>
                        <label htmlFor="flightNo">Flight Number: </label>
                        <input type="number" placeholder="Enter flight number" name="flightNo"/><br/>
                    </div>
                    <div style={container}>
                        <label htmlFor="departs">Departs Date: </label>
                        <input type="datetime-local" name="departs"/>
                    </div>
                    <div style={container}>
                        <label htmlFor="airport">Select Airport: </label>
                        <select name="airport">
                            <option value="AUS">AUS</option>
                            <option value="DAL">DAL</option>
                            <option value="LAX">LAX</option>
                            <option value="SAN">SAN</option>
                            <option value="SEA">SEA</option>
                        </select>
                    </div>
                    <div style={container}>
                        <input type="submit" name="" value="Create Flight"/>
                    </div>
                </form>
            </section>
            
        </main>
    )
}
module.exports = New