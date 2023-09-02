const React = require('react')

const Header = () => {
    const navStyle = {
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    }
    const noBullet = {
        listStyle: 'none',
        paddingRight: '18px'
    }
    const noDec = {
        textDecoration: 'none',
        color: '#ffffff',
        fontSize: '20px'
    }
    return(
        <nav style={navStyle}>
            <div>
                <ul>
                    <li style={noBullet}>
                        <a style={noDec} href="/">Home</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul style={{display: 'flex'}}>
                    <li style={noBullet}>
                        <a style={noDec} href="/flights">All Flights</a>
                    </li>
                    <li style={noBullet}>
                        <a style={noDec} href="flights/create">Add Flight</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}
module.exports = Header