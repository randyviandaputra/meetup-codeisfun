import React from 'react'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {search: ''}
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    this.props.onSearch(e.target.value)
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <input
        placeholder="Search ..."
        value={this.state.search}
        onChange={this.handleSearch}
        style={styles.textInput}
      />
    )
  }
}

const styles = {
  textInput: {
    height: '25px',
    fontSize: '14px',
    outline: 'none',
    border: '1px solid #20232a',
    padding: '5px',
    borderRadius: '5px',
    color: '#20232a',
  },
}

export default Search
