import React from 'react';
import PropTypes from 'prop-types';
import './home.css'
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<div className={'main-panel'} id={id}>

		<div className={'suggest-cell'}>
			Нажми на шар и узнай, что тебя ждет!
		</div>

		<img className={'magic-ball'}
			 src={"https://vk.com/sticker/1-53396-512b"}
			 onClick={() => {go('persik')}}
		/>
	</div>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
