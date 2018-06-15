import React from 'react'

class Form extends React.Component {
  defaultValues ={ name: '', price: '', description: '', department: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submit(this.state)
    this.setState({...this.defaultValues})
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

  render() {
    const { name, price, description, department } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          name="description"
          placeholder="description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          name="price"
          placeholder="price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
         <input
          name="department"
          placeholder="Department"
          value={department}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form




