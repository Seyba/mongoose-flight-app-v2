const React = require('react')
const Header = require('./Header')
const Home = (props) => {
    const px = {
        padding: '0 100px',
        textAlign: 'center'
    }
    return(
        <main>
            <nav>
                <Header/>
            </nav>
            <section style={px}>
                <h2>Welcome to mongoose flight app!</h2>
                <p>Check your flight airline and depature time.</p>
            </section>
        </main> 
    )
}

module.exports = Home