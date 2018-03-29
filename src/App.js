
import React, { Component } from 'react';
import './App.css';
import PostList from './PostList';
import ListItem from './ListItem';
import $ from 'jquery';
const products = [{
        name: 'iPad',
        price: 200
    },
    {
        name: 'iPhone',
        price: 650
    }
]
//testing
localStorage.setItem('products', JSON.stringify(products));

class App extends Component {


    constructor(props) {
        super(props);
        
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }
    componentWillMount() {
        /*const products = this.getProducts();
        this.setState({ this.posts });*/
        var posts = [];
             $.ajax({
                url:'http://localhost:3000/posts?_page=1&_limit=100',
                async:false,
                success:function(response){
                    posts=response;
                }.bind(this),
                error:function(){
                    console.log('ERROR');
                }
            });
        this.setState({ posts });
    }
    getProducts() {
        return this.state.posts;

    }
    onAdd(name, price) {
        const posts = this.getProducts();
        posts.push({
            name,
            price
        });
        this.setState({ posts })
    }
    onDelete(name) {
        const products = this.getProducts();
        const filteredProducts = products.filter(product => {
            return product.name !== name;
        });
        this.setState({ products: filteredProducts })
    }
    onEditSubmit(name, price, originalName) {
        let products = this.getProducts();
        products = products.map(product => {
            if (product.name === originalName) {
                product.name = name;
                product.price = price;
            }
            return product;
        });
        this.setState({ products });
    }
    /*{this.state.posts.map(product =>{
          return (
                <PostList
                  key={product.name}
                  {...product}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                  />
          )
        })}*/
    render() {
        var posts=this.state ? this.state.posts :[];

        return (
    <PostList
                  posts={this.state.posts}
                  />
            
        );
    }
}

export default App;