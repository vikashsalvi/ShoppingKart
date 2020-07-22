import React, {Component} from "react";
import './SearchResults.css'
import Card from "./ResultCard/Card";
import Axios from "axios";

class Result extends Component {

    beforeSortItems;

    constructor(props) {
        super(props);

        this.state = {
            updated: false,
            product: this.props.location.state.data,
            shownProducts: this.props.location.state.data,
        };

        this.filter = this.filter.bind(this);
        this.sort = this.sort.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.updated === false || this.props.location.state.check === false){
            this.props.location.state.check = true;
            this.setState({
                product: this.props.location.state.data,
                shownProducts: this.props.location.state.data,
                updated: true
            })
        }
    }

    filter(e) {

        const current = e.target.value;

        let currentItems;

        if (current === "default") {
            currentItems = this.state.product;
        } else {
            currentItems = this.state.product.filter((item) => {
                return item.category === current;
            });
        }

        this.setState({
            shownProducts: currentItems
        });
    }

    sort(e) {

        const current = e.target.value;

        if(current === "price"){
            this.state.shownProducts.sort((a, b) => {
                return (a.productPrice > b.productPrice ? 1 : -1)
            });
        }else if(current === "popularity"){
            this.state.shownProducts.sort((a, b) => {
                return (a.productPopularity > b.productPopularity ? 1 : -1)
            });
        }

        this.updateList();
    }

    updateList() {
        if (this.state.shownProducts.length === 0) {
            if (this.props.location.state.query === "") {
                return (
                    <div className="nomatch">No search text entered</div>
                );
            }

            return (
                <div className="nomatch">No Match Found</div>
            );
        }

        return (
            this.state.shownProducts.map((item, index) => {
                return (
                    <Card key={index}
                          id={item.productID}
                          name={item.productName}
                          price={item.productPrice}
                          brand={item.productBrand}
                          image={item.imageUrl}
                    />
                )
            })
        );
    }

    render(props) {
        return (
            <div>
                <div>
                    <div className="result_tag">Showing Results: {this.props.location.state.query}</div>
                    <div className="sort-filter">
                        <div className="filter">
                            <label>Filter</label>
                            <select className="drop-down" id={"filterType"} onChange={this.filter}>
                                <option value={"default"}> -</option>
                                <option value={"vegetable"}>Vegetables</option>
                                <option value={"fruit"}>Fruits</option>
                            </select>
                        </div>
                        <div className="sort">
                            <label>Sort</label>
                            <select className="drop-down" id={"sortType"} onChange={this.sort}>
                                <option value={"default"}> -</option>
                                <option value={"price"}>Price</option>
                                <option value={"popularity"}>Popularity</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="products">{this.updateList()}</div>
            </div>
        );
    }
}

export default Result;
