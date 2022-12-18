export const Modal = ({ rocket }) => (
    <div className="modal fade" id={`popup${rocket.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{rocket.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <div id={`carousel${rocket.id}Controls`} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={rocket.flickr_images[0]} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={rocket.flickr_images[1]} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${rocket.id}Controls`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carousel${rocket.id}Controls`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='row rocket-info'>
                        <div className='col-sm-4'>
                            <h4>Height</h4>
                            <p>{rocket.height.feet} Feet</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>Diameter</h4>
                            <p>{rocket.diameter.feet} Feet</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>Mass</h4>
                            <p>{rocket.mass.kg/1000} Tonne</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>First Flight</h4>
                            <p>{rocket.first_flight} feet</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>Active</h4>
                            <p>{rocket.active ? 'yes' : 'no'}</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>Cost/Launch</h4>
                            <p>{rocket.cost_per_launch/100000} Million</p>
                        </div>
                    </div>
                    <p>{rocket.description}</p>
                    <a href={rocket.wikipedia} className="btn btn-primary btn-block" target="_blank" rel="noreferrer">Learn More on WikiPedia</a>

                </div>
            </div>
        </div>
    </div>
)