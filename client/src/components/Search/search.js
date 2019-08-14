import React, {Component} from "react";


export default class SearchPage extends Component {

    constructor(props) {
        super(props);

        // One of these is needed to access each corresponding method.
        this.onChangeSearchBrand = this.onChangeSearchBrand.bind(this);
        this.onChangeSearchCause = this.onChangeSearchCause.bind(this);
        this.onChangeSearchOrg = this.onChangeSearchOrg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search_brand: "",
            search_cause: "",
            search_org: ""
        }
    }

    onChangeSearchBrand(e) {
        this.setState({
            search_brand: e.target.value
        });
    }

    onChangeSearchCause(e) {
        this.setState({
            search_cause: e.target.value
        });
    }

    onChangeSearchOrg(e) {
        this.setState({
            search_org: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Submitted: `);
        console.log(`Brand Search: ${this.state.search_brand}`);
        console.log(`Cause Search: ${this.state.search_cause}`);
        console.log(`Organization Search: ${this.state.search_org}`);

        this.setState({
            search_brand: "",
            search_cause: "",
            search_org: ""
        })
    }

    render() {
        return(
            <div className="container col-lg-6">
            <div style={{marginTop:20}}>
                <h4>Suggest a Brand or Company to TBH</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Brand/Company Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.brand_name}
                                onChange={this.onChangeAddBrand}
                                />
                    </div>
                    
                    <div className="form-group">
                        <label>What is the Concern:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.search_cause}
                                onChange={this.onChangeSearchCause}
                                />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}