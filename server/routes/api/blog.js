var keystone = require('keystone')

var Blog = keystone.list('Blog')

exports.list = (req, res) => {
  Blog.model.find((err, items) => {
    if (err) return res.apiError('database error', err)
    res.apiResponse({
      blog: items
    })
  })
}