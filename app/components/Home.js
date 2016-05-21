var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;

function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Tipoff</h1>
      <p className='lead'>Whose balls are bigger?</p>
      <Link to='/teamAway'>
        <button type='button' className='btn btn-lg btn-success'>3..2..1</button>
      </Link>
    </div>
  )
}

module.exports = Home;
