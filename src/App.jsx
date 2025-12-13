import { Navbar, Welcome } from '#components'
import React from 'react'

/**
 * Root application component that renders the navigation bar and welcome section.
 *
 * @returns {JSX.Element} A JSX element containing a wrapping div with <Navbar /> followed by <Welcome />.
 */
function App() {
    return (
    <div>
        <Navbar />
        <Welcome />
    </div>
    )
}

export default App