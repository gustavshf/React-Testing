import React, { Component } from 'react';




class ListItem extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    /*this.setState({post: this.props.post})*/
  }
/*shouldComponentUpdate(nextProps, nextState){
  return nextProps.favorites!==this.props.favorites || nextProps.reposts!==this.props.reposts || nextProps.text!==this.props.text;
}*/

  //testing
  render() {
      const { firstName, lastName, sUserName, iRating, reposts, favorites, text } = this.props;
      var sImageName = "img/initials" + (Math.floor(Math.random() * 8)+1) + ".png";
    return (
                <div className="row input-wrap">
   <div className="media">
                <a className="profile-picture" href="#"><img className="media-object" width="75" height="75" src={sImageName}></img></a>
   <div className="body-container">
      <div className="row">
         
         <div className="media-body">
            <h4 className="post-heading">{firstName} {lastName} <a>@{sUserName}</a><span className="timeAgo">  4 minutes ago</span></h4>
            <p className = "post-body">{text}</p>
            <p className = "post-rating">Rating: {iRating}</p>
         </div>
      </div>
      <div className="row">
         <div className="bottom-links">
            <a className="post-property" href="#">Expand</a>
         
               <a className="post-property" href="#">Reply</a>
               <a className="post-property" href="#">Repost ({reposts})</a>
               <a className="post-property" href="#">Star ({favorites})</a>
               <a className="post-property" href="#">More</a>
         </div>
      </div>
      </div>
   </div>
</div>
          )
  }
}

export default ListItem;
