import React, { Component } from 'react';


class Headermiddel extends Component {
  render() {
    return (
    		<form className="app-headermiddel">

    		 <img alt="load" src="https://www.staples.com/mmx/static/images/staples.svg" /> 
        
    		<input placeholder="Search for all your business needs" />
    	  <div><button className="search-btn" >

  <span className="mmx-icon-search">
</span>Search </button>
</div>
<button>Reorder</button>
<button>Account</button>
<button>Connect</button>
<button>Cart</button>
    		</form>
    );
  }
}

export default Headermiddel