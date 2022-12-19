import PropTypes from "prop-types";
import React from 'react';

const StoryCanvas = ({sticker, oracle}) => (
    <div className={'main-panel'}>
        <img className={'result-sticker'}
             src={sticker}
        />
        <div className={'oracle-cell'}>
            {oracle}
        </div>
    </div>
);

StoryCanvas.propTypes = {
    id: PropTypes.string,
    go: PropTypes.func,
};

export default StoryCanvas;
