var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Blog = new keystone.List('Blog', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Blog.add({
	title: { type: String, required: true },
    content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Blog.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Blog.register();
