import React, { Component } from 'react';
import TodoList from './TodoList.jsx';
import * as productApi from '../api/productApi';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    productApi
      .getAllProducts()
      .then(res => res.json())
      .then(parsedres => this.setState({ products: parsedres }))
      .catch(error => console.log(error));
  }
  render() {
    const { products } = this.state;
    return (
      <div className="container-fluid">
        <h2 className="text-primary">Todos</h2>
        <TodoList products={products} />
      </div>
    );
  }
}
