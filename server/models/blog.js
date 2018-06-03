var keystone = require('keystone');
var Types = keystone.Field.Types;

// First we gonna create our User list
var Blog = new keystone.List('Blog', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
   });

// Then we gonna add the fields 
Blog.add({
    title: { type: String, required: true },
    image: { type: Types.CloudinaryImage },
    publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
    
    body: { 
      brief :{type:Types.Html,wysiwyg:true,height:150},
      extended:{type:Types.Html,wysiwyg:true,height:400}
   }
});

Blog.register();