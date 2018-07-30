import React, { Component } from 'react';
import './swiper.css';

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.img = this.props.img.concat(this.props.img[0])||[];
    this.time = this.props.time||3000;
    this.timer = '';
    this.state = {
      offset:{left:0},
    }
  }
  componentDidMount(){
    console.log('img',this.img);
    if (this.img.length>1) {
      this.delayAnimation();
    }
  }
  delayAnimation(){
    let width = document.getElementById('swiper-img').width
    console.log('width',width);
    this.timer = setInterval(() => {
      if (this.state.offset.left > -width*(this.img.length-1)) {
        this.setState({
          offset: {
            left: this.state.offset.left - width,
            transition: "left 1s"
          }
        });
      } else {
        this.setState(
          {
            offset: {
              left: 0,
              transition: "none",
            }
          },
          () => {
            setTimeout(() => {
              this.setState({
                offset: {
                  left: this.state.offset.left - width,
                  transition: "left 1s"
                }
              });
            }, 0);
          }
        );
      }
      
    }, this.time)
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render() {
    const {offset}= this.state;
    console.log('offset',offset);
    const img = this.img.map((item,index)=>{
      return <img key={index} src={item} className="swiper-img" id="swiper-img" style={offset} />;
    })
   return(
     <div className="swiper-box">
       <div className="swiper-main">
         {img}
       </div>
     </div>
   )
  }
}
export default Swiper;
