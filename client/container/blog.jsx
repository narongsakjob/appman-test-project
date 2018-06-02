import React from 'react'
import axios from 'axios'
import _ from 'lodash'

export default class Blog extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {blog: []};
  }

  componentDidMount() {
    axios.get(`/api/blog`)
      .then(res => {
        const blog = res.data.blog
        this.setState({ blog })
      })
  }

  render() {
    return (
      <div>
        Hello blog list
        <div>
          { _.map(this.state.blog, (item, i) => 
            <div key={item.slug}>
              <a href={item.slug}>{item.title}</a>
            </div>
          )}
        </div>
      </div>
    )
  }
}