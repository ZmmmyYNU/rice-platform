import React, { useEffect } from "react";
import { Wrapper } from "./style";
import { Link } from "react-router-dom";
import { InfiniteScroll } from "antd-mobile";

import propTypes from "prop-types";
export function GoodsList({ goods }) {
  return (
    <Wrapper>
      <div className="idea-item">
        <ul>
          {goods.map((item) => (
            <li key={item.id}>
              <Link
                to={{
                  pathname: "/goodsdetail", 
                  search: `id=${item.id}`,
                }}
              >
                <img className="img" src={item.imgs[0].img} alt="" />
                <div className="idea-body">
                  <p className="describe">{item.content}</p>
                  <div className="ideaitem-footer">
                    <div className="tag">稻瘟病</div>
                    <div className="price">
                      <span className="price-icon">￥</span>10.5
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
          {/* <InfiniteScroll loadMore={loadMore} hasMore={hasMore} /> */}
        </ul>
      </div>
    </Wrapper>
  );
}

GoodsList.propTypes = {
  goods: propTypes.array.isRequired,
};
