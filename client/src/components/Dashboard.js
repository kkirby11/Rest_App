import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Form from './Form'

class Dashboard extends React.Component {
  state = { products: [], showForm: false }

  componentDidMount() {
    axios.get('/api/products')
      .then( ({ data }) => this.setState({ products: data }) )
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  submit = (product) => {
    const { products } = this.state
    axios.post('/api/products', { product })
      .then( res => {
        this.setState({
          products: [res.data, ...products],
          showForm: false
        })
      }).catch( e => { 
        // TODO handle better
        console.log(e.response.data.errors)
      })
  }

  form() {
    return <Form submit={this.submit} />
  }

  show() {
    const { products } = this.state
    return (
      <ul>
        { products.map( p =>
            <li key={p.id}>
              <Link to={`/product/${p.id}`}>
                {p.name}
              </Link>
            </li>
          )
        }
      </ul>
    )
  }

  render() {
    const { showForm } = this.state
    return (
      <div>
        <h2>Products</h2>
        <button onClick={this.toggleForm}>
          { showForm ? 'Hide' : 'Show' } form
        </button>
        { showForm ? this.form() : this.show() }
      </div>
    )
  }
}


export default Dashboard




