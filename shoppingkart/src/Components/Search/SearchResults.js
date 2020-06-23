import React, {Component} from "react";
import './SearchResults.css'
import Card from "./ResultCard/Card";
import {DropdownButton, Dropdown} from "react-bootstrap";
import Navigation from "../NavBar/NavBar";

class Result extends Component {

    currentItems;
    beforeSortItems;

    constructor(props) {
        super(props);

        this.state = {
            matchedProducts: [],
            filterApplied:false,
            sortApplied:false
        };

        this.product = [
            {'name': 'Yellow Potato', 'brand': 'vegetable', 'price': 50,'popularity':11},
            {'name': 'Yellow Potato', 'brand': 'vegetable', 'price': 20,'popularity':2},
            {'name': 'Yellow Potato', 'brand': 'vegetable', 'price': 40,'popularity':13},
            {'name': 'Yellow Potato', 'brand': 'vegetable', 'price': 30,'popularity':18},
            {'name': 'Yellow Potato', 'brand': 'fruit', 'price': 60,'popularity':1},
            {'name': 'Yellow Potato', 'brand': 'fruit', 'price': 60,'popularity':2},
            {'name': 'Spring Onions', 'brand': 'vegetable', 'price': 80,'popularity':3},
            {'name': 'Onions', 'brand': 'vegetable', 'price': 80,'popularity':7},
            {'name': 'White Potato', 'brand': 'vegetable', 'price': 60,'popularity':9},
            {'name': 'Sweet Potato', 'brand': 'vegetable', 'price': 78,'popularity':2},
            {'name': 'Green Pepper', 'brand': 'vegetable', 'price': 34,'popularity':3},
            {'name': 'Yellow Pepper', 'brand': 'vegetable', 'price': 23,'popularity':6},
            {'name': 'Red Onions', 'brand': 'vegetable', 'price': 98,'popularity':14},
            {'name': 'Pink Cabbage', 'brand': 'vegetable', 'price': 100,'popularity':15},
            {'name': 'Green Cabbage', 'brand': 'vegetable', 'price': 45,'popularity':18},
            {'name': 'Broccoli', 'brand': 'vegetable', 'price': 50,'popularity':16},
            {'name': 'Apple', 'brand': 'fruit', 'price': 90,'popularity':10},
            {'name': 'Pineapple', 'brand': 'fruit', 'price': 40,'popularity':11},
            {'name': 'Banana', 'brand': 'fruit', 'price': 90,'popularity':11},
            {'name': 'Kiwi', 'brand': 'fruit', 'price': 30,'popularity':4},
            {'name': 'Watermelon', 'brand': 'fruit', 'price': 33,'popularity':6},
            {'name': 'Straw Berry', 'brand': 'fruit', 'price': 46,'popularity':9},
            {'name': 'Black Berry', 'brand': 'fruit', 'price': 80,'popularity':11},
            {'name': 'Mushrooms', 'brand': 'vegetable', 'price': 80,'popularity':12},
            {'name': 'Tomato', 'brand': 'vegetable', 'price': 58,'popularity':13},
            {'name': 'Cherry Tomato', 'brand': 'vegetable', 'price': 70,'popularity':8}
        ];
        this.currentItems = this.product;

    }

    applyFilterItems(){

        this.currentItems = this.product;
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

    applySortItems()
    {
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
        const match = this.currentItems.filter(item => {
            // return item.name === this.props.location.state.id;
            return item.name === "Yellow Potato";
        });

        if(match.length === 0){
            return (
                <div className="nomatch">No Match Found</div>
            );
        }

        return(
            match.map((item, index) =>{
                return(
                    <Card key={index} name={item.name}
                          price={item.price} brand={item.brand} />
                )
            })
        );
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div>
                    <div className="result_tag">Showing Results: Yellow Potato{/*this.props.location.state.id*/}</div>
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
