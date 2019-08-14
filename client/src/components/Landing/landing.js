import React from "react";
import './landing.css';

function LandingPage() {
    return (
        <div className="jumbotron col-lg-6 text-center">
            <h1 className="display-4">TBH</h1>
            <p className="lead">An Honest Approach to Consumer Consciousness</p>
            <hr className="my-4" />
            <p className="lead">Want to know how your specific purchases impact politics, the environment, and other social causes? At TBH our mission is to help consumers make conscious decisions about where their dollars are going, so we can all leave the world a little better than we found it.</p><br />

            <p className="lead">Use the search feature to look up specific brands and companies, to find out what organizations they donate money to, what positive social causes they support, and what conflicting causes they support.</p><br />

                <div className="col-lg-6 offset-lg-3">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">Get Started</button>
                        </span>
                    </div>
                </div>
            </div>
    )
}




export default LandingPage;