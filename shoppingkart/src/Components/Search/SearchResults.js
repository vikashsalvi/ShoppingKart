import React, {Component} from "react";
import './SearchResults.css'
import Card from "./ResultCard/Card";
import Axios from "axios";

class Result extends Component {

    currentItems;
    beforeSortItems;

    constructor(props) {
        super(props);

        this.state = {
            matchedProducts: [],
            filterApplied:false,
            sortApplied:false,
            product: []
        };
    }

    async componentDidMount() {
        const data  = await Axios.get("http://localhost:5000/product/getSearchedProduct/" + this.props.location.state.query);
        this.setState({
            product: data.data.data
        })
    }

    async componentDidUpdate() {
        const data  = await Axios.get("http://localhost:5000/product/getSearchedProduct/" + this.props.location.state.query);
        this.setState({
            product: data.data.data
        })
    }

    applyFilterItems(){

        this.currentItems = this.state.product;
        var typeFilter = document.getElementById("filterType").value;

        if(typeFilter === "default"){
            this.setState({filterApplied:!this.state.filterApplied});
            return true;
        }
        var filterItems = [];
        this.currentItems.map((item,index)=>(
            filterItems.push((item.brand===typeFilter)?item:null)
        ))

        var filtered = filterItems.filter(function (el) {
            return el != null;
        });
        this.currentItems = filtered;
        this.setState({filterApplied:!this.state.filterApplied});
    }

    compareValues(key) {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }
            const firstVariable = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const secondVariable = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let result = 0;
            if (firstVariable > secondVariable) {
                result = 1;
            } else if (firstVariable < secondVariable) {
                result = -1;
            }
            return (
                result
            );
        };
    }

    applySortItems() {
        var typeSort = document.getElementById("sortType").value;
        if(typeSort === "default"){
            this.currentItems = this.beforeSortItems;
            this.setState({sortApplied : !this.state.sortApplied})
            return true;
        }
        else {
            this.beforeSortItems = this.currentItems;
            this.currentItems.sort(this.compareValues(typeSort));
            this.setState({sortApplied : !this.state.sortApplied})
        }
    }

    updateList(){
        if(this.state.product.length === 0){
            if(this.props.location.state.query === ""){
                return (
                    <div className="nomatch">No search text entered</div>
                );
            }

            return (
                <div className="nomatch">No Match Found</div>
            );
        }

        return(
            this.state.product.map((item, index) =>{
                return(
                    <Card key={index} name={item.productName} price={item.productPrice} />
                )
            })
        );
    }

    render() {
        return (
            <div>
                <div>
                    <div className="result_tag">Showing Results: {this.props.location.state.query}</div>
                    <div style={{textAlign: 'right'}}>
                        <select className="selectpicker"
                                id={"filterType"} onChange={this.applyFilterItems.bind(this)}>
                            <option value={"default"}>Filter By</option>
                            <option value={"vegetable"}>Vegetables</option>
                            <option value={"fruit"}>Fruits</option>
                        </select>
                        <select className="selectpicker"
                                id={"sortType"} onChange={this.applySortItems.bind(this)}>
                            <option value={"default"}>Sort By</option>
                            <option value={"price"}>Price</option>
                            <option value={"popularity"}>Popularity</option>
                        </select>
                    </div>
                </div>
                <div className="products">{this.updateList()}</div>
            </div>
        );
    }
}

export default Result;
