const React = require('react')
const Header = require('./Header')
const Details = (props) => {
    
    return(
        <main>
            <Header/>
            <h2 style={{textAlign: 'center'}}>Flight Details</h2>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
                
            </div>
        </main>
    )
}

module.exports = Details