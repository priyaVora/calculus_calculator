import React from 'react';
import 'tachyons';


class Homepage extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      route: [
        this.props.route
      ],
    };
  }



render() { 
   return (
      <div>
        Homepage is here!!
      </div>
    );
  }
} 
export default Homepage;
