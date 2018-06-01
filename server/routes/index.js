// Export our app routes
var keystone = require('keystone')
var importRoutes = keystone.importer(__dirname);

var routes = {
  views: importRoutes('./views'),
 };

exports = module.exports = function (app) {
  // Set up the default app route to  http://localhost:3000/index.html
  app.get('/', function (req, res) {
    // Render some simple boilerplate html
    function renderFullPage() {
   // Note the div class name here, we will use that as a hook for our React code
      return `
		<!doctype html>
		<html>
			<head>
				<title>Keystone With React And Redux</title>
			</head>
			<body>
        			<div class="root">
              </div>
              <script src="bundle.js"></script>
			</body>
		</html>
		`;
    }
    // Send the html boilerplate
    res.send(renderFullPage());
  });


  app.get('/blog',routes.views.blog);


};