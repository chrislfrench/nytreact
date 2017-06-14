// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function - a note - the Search and Saved Articles buttons in the navbar trigger the url routing functions on the server.js page. 

  render: function() {

    return(

      <div className="main-container">
        

        <div className="container">

          <nav className="navbar navbar-default" role="navigation">
           <div className="container-fluid">
            <div className="navbar-header">
             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
             </button>
             <a className="navbar-brand" href="#">NYT-React</a>
            </div>
           </div>

           <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#/search">Search</a></li>
              <li><a href="#/saved">Saved Articles</a></li>
            </ul>
           </div>
          </nav>
          
          <div className="jumbotron" style="background-color: #20315A ; color: white;">
            <h2 className="text-center"><strong>New York Times Scrubber</strong></h2>
          </div>

          

            {/* This code will dump the correct Child Component */}
            {this.props.children}

          </div>

        </div>

       

    );
  }
});

// Export the component back for use in other files
module.exports = Main;
