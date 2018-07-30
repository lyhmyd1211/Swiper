import React from 'react';
import Swiper from '../../index.js';
import { render } from 'react-dom';
var element = document.getElementById("root");
render(
  <div >
    test
    <Swiper
      img={['../image/aaa.jpg', '../image/bbb.jpg', '../image/ccc.jpg']}
    time={3000}
    />
  </div>, element);