import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this Project</h1>
                <p>This is a training React App made by Guy Thomas</p>
                <p>Version 1.00</p>
                <p>
                    <Link to='/'>Go Back Home</Link>
                </p>
            </div>
        </Card >
    )
}

export default AboutPage
