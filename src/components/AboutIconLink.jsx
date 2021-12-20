import { FaQuestion, faQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function AboutIconLink() {
    return (
        <div className='about-link'>

            <Link to={{
                pathname: '/about',
                search: '?sort=name',
                hash: 'faq'
            }}>
                <FaQuestion size={30} />
            </Link>

        </div>
    )
}

export default AboutIconLink
