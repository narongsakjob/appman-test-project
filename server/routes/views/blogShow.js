var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'blog';
	locals.filters = {
		post: req.params.post,
	};
	locals.data = {
		posts: [],
	};

	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('Blog').model.findOne({
			slug: locals.filters.post,
		});

		q.exec(function (err, result) {
			locals.data.post = result;
			next(err);
		});

	});
	view.render('blogShow');
	
};
