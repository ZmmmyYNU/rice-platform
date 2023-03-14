import React, { Component } from "react";
import Swiper from "swiper";
import { IdeaTopWrapper } from "./style";

class IdeaTop extends Component {
  componentDidMount() {
    var swiper = new Swiper(".swiper-container", {
      paginationClickable: true, //值为真时，当单击指示器时会执行过渡动画到目标slide
      speed: 300, //slides滑动动画之间的持续时间
      slidesPerView: 4,
      // slideToClickedSlide:true
    });
    swiper.slideTo(this.props.activedIndex);
  }
  render() {
    return (
      <IdeaTopWrapper>
        <div class="swiper-container">
          <div class="swiper-wrapper" style={{ display: "flex" }}>
            <div className="swiper-slide">213</div>
          </div>
        </div>
      </IdeaTopWrapper>
    );
  }
}
export default IdeaTop;
