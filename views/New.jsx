const React = require('react')
const Header = require('./Header')

const New = () => {
    return(
        <main>
            <Header/>
            <section style={{display: 'flex', justifyContent: 'center'}}>
                <form action="/flights" method="POST">
                    <label htmlFor="airline">Select Airline</label><br/>
                    <select name="airline">
                        <option value="American">American</option>
                        <option value="Southwest">Southwest</option>
                        <option value="United">United</option>
                    </select><br/>
                    <label htmlFor="flightNo">Flight Number</label><br/>
                    <input type="number" name="flightNo"/><br/>
                    <label htmlFor="departs">Departs Date</label><br/>
                    <input type="datetime-local" name="departs"/><br/>
                    <input type="submit" name="" value="Create Flight"/>
                </form>
            </section>
            
        </main>
    )
}
module.exports = New