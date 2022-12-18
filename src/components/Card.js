import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

export const Card = ({ rocket }) => (
    <div className="col-sm-6">
        <div key={rocket.id} className="card " >
            <img src={rocket.flickr_images[1]} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{rocket.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" data-bs-toggle="modal" data-bs-target={`#popup${rocket.id}`} className="btn btn-primary">View More</a>
            </div>
        </div>
    </div>)
 
