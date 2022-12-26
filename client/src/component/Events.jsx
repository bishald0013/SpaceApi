import "./event.css"
import { Link } from 'react-router-dom'

function Events({ t }) {
  return (
    <div className='my-5 d-flex event_container'>
      <div className="card w-25">
        <div className="card-body">
          <h5 className="card-title">{t.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{t.event_date_utc}</h6>
          <p className="card-text">
            {t.flight_number}
          </p>
          <Link href="#" className="card-link">
            {t.links.article}
          </Link>
          <a href="#" className="card-link">
            {t.links.wikipedia}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Events
