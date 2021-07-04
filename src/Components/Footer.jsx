import React from 'react'

function Footer() {
    return (
        <footer className="#00c853 green accent-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/AstakhovV">AstakhovV</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer