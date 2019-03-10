import React from 'react';
class PowerRule extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          route: [
            this.props.route
          ],
        };
      }
  render() {
    // let items = [];
    // for(var j = 0; j< this.props.segments; j++) {
    //   for(var i = 0; i < 9; i++) {
    //     items.push(
    //         <div className='small-tic'></div>
    //     );
    //   }
    //   items.push(
    //       <div className='large-tic'></div>
    //   );
    // }

    return (
      <div>
      <p>Here I am!sdf!!</p>
      </div>
    )
  }
}
export default PowerRule;