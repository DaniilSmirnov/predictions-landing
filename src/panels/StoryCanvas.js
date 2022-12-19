import PropTypes from "prop-types";
import React from 'react';
import "@vkontakte/vkui/dist/vkui.css";

const StoryCanvas = ({sticker, oracle}) => (
  <div id='storyCanvas' className={'canvas-panel'}>
    <img className={'result-sticker'}
         src={sticker}
    />
    <div className={'canvas-oracle-cell'}>
      {oracle}
    </div>
  </div>
);

StoryCanvas.propTypes = {
  id: PropTypes.string,
  go: PropTypes.func,
};

export default StoryCanvas;
