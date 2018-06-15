import React from 'react';
import axios from 'axios';

class Product extends React.Component {
  state = { product: {} }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then( res => this.setState({ product: res.data }) )
  }

  render() {
    let { product: { name, description, price, department }} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
        <h3>{department}</h3>
      </div>
    )
  }
}

export default Product;import React from 'react'
import axios from 'axios'
import Form from './Form'

class Product extends React.Component {
  state = { product: {}, edit: false }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/products/${id}`)
      .then( ({ data }) => this.setState({ product: data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !state.edit }
    })
  }

  submit = (product) => {
    const { id } = this.state.product
    axios.put(`/api/products/${id}`, { product })
    .then( ({ data }) => {
      this.setState({ product: data, edit: false }) 
    })
  }

  show() {
    const { 
      product: { name, description, price, department }
    } = this.state
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
        <h3>{department}</h3>
      </div>
    )
  }

  edit = () => {
    const { id, department, description, price } = this.state.product
    const product = { id, department, description, price }
    return <Form submit={this.submit} {...product} />
  }

  render() {
    const { edit } = this.state;
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>
          { edit ? 'Cancel' : 'Edit' }
        </button>
      </div> 
    )
  }
}

export default Product

