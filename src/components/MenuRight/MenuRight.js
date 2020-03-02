import React, { Component } from "react";
import './MenuRight.css';

class MenuRight extends Component {
  render() {
    return (
      <div className="menu-right">
        {/* <div className="menu-right-header">
          <div className="menu-right-header-btn">
            <button><img src="\img\pen-solid.svg" alt="pen" />&nbsp;&nbsp;Edit</button>
            <button><img src="\img\save-solid.svg" alt="save" />&nbsp;&nbsp;Save</button>
            <button><img src="\img\paperclip-solid.svg" alt="clips" />&nbsp;&nbsp;Clips</button>
          </div>
          <div className="menu-right-header-btn-del">
            <button><img src="\img\detete.svg" alt="del" />&nbsp;&nbsp;Delete</button>
          </div>
        </div> */}
        <div className="menu-right-main">
          <div className="memo-title">
            <div className="clock-title">
              <img src="\img\clock-regular.svg" alt="clock" />
              <span>2020/01/27</span>
            </div>
            <div className="tag-soild">
              <img src="\img\tag.svg" alt="tag" />
              <span>category 01</span>
            </div>
          </div>
          <div className="title-bar">
            <h2>Hello World</h2>
            <hr />
          </div>
          <div className="menu-content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante.
              <br />
              <br /> Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
              Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuRight;
