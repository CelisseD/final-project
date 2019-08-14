import React from "react";
import './landing.css';

function LandingPage() {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">TBH</h1>
            <p className="lead">An Honest Approach to Consumer Consciousness</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

                <div className="col-lg-6 offset-lg-3">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
            </div>
    )
}




export default LandingPage;