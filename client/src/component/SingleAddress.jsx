import React from 'react'

function SingleAddress({ r }) {
  return (
    <div className="container">
      <div class="card w-25 my-3">
        <div class="card-body">
          <h5 class="card-title">{r.payload_id}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{r.customers}</h6>
          <p class="card-text">
            <div className="row">
                <div className="col-lg-6">
                    <h5 class="card-title">{r.manufacturer}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{r.payload_type}</h6>
                </div>
                <div className="col-lg">
                    <h5 class="card-title">{r.orbit}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{r.orbit_params.reference_system}</h6>
                </div>
            </div>
          </p>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  )
}

export default SingleAddress
