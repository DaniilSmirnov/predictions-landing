import React from 'react';
import PropTypes from 'prop-types';
import htmlToImage from 'dom-to-image';

import {Button} from '@vkontakte/vkui';

import './Persik.css';
import bridge from "@vkontakte/vk-bridge";
import ReactDOM from "react-dom";
import StoryCanvas from "./StoryCanvas";

const stickers = ['https://vk.com/sticker/1-53397-512b', 'https://vk.com/sticker/1-53435-512b', 'https://vk.com/sticker/1-53397-512b', 'https://vk.com/sticker/1-53435-512b']

const oracles = ["В этом году вы отправитесь в незабываемое путешествие",
"В этом году вас ждёт увлекательная романтическая история",
"Благодаря новым знаниям вы сможете рассчитывать на большее",
"Вас ждёт огромное количество везения и удачных совпадений",
"Тепло и забота исходящие от вас будут создавать прекрасную атмосферу в новом году",
"Вы двигаетесь в правильном направлении. Главное - не останавливаться",
"В этом году вы найдете ответы на все волнующие вопросы",
"Проявив немного терпения, вы получите нечто особенное",
"Грядут очень важные перемены",
"Лучше попробовать, чем пожалеть о несделанном",
"Никогда не говорите никогда!",
"Выбирая, прислушивайтесь к интуиции, в этом году она вас не подведет",
"Только вы сможете определить пределы возможностей, не ограничивайте себя!",
"Возможности финансового успеха ждут вас в этом году",
"Новые люди, приходящие в вашу жизнь, подарят вам множество различных впечатлений",
"Действуйте, но не так как вы привыкли",
"Вас ждёт получение неожиданной информации",
"Плывите по течению - именно оно укажет вам правильное направление",
"Как вы относитесь к миру, так и мир будет относиться к вам",
"Этот год станет началом большого пути к успеху",
"Тщательно планируйте свое время, в этом году его будет не так много!",
"Не позволяйте другим сбить вас с пути",
"На место старого всегда приходит нечто новое",
"С каждым днем вы будете становиться лучшей версией себя",
"У вас есть все, чтобы реализовать цель в новом году",
"Все риски будут оправданы, особенно если их хорошо просчитать",
"Слушайте каждого, идеи будут приходить отовсюду",
"В этом году вы отправитесь в незабываемое путешествие",
"Обязательно двигайтесь к цели, никогда не оставайтесь на месте и не считаете 'нет', окончательным ответом",
"В этом году вас ждёт увлекательная романтическая история",
"Благодаря новым знаниям вы сможете рассчитывать на большее",
"Вас ждёт огромное количество везения и удачных совпадений",
"Тепло и забота исходящие от вас будут создавать прекрасную атмосферу в новом году",
"Вы двигаетесь в правильном направлении. Главное - не останавливаться",
"В этом году вы найдете ответы на все волнующие вопросы",
"Проявив немного терпения, вы получите нечто особенное",
"Грядут очень важные перемены",
"Лучше попробовать, чем пожалеть о несделанном",
"Никогда не говорите никогда!",
"Выбирая, прислушивайтесь к интуиции, в этом году она вас не подведет",
"Только вы сможете определить пределы возможностей, не ограничивайте себя!",
"Возможности финансового успеха ждут вас в этом году",
"Новые люди, приходящие в вашу жизнь, подарят вам множество различных впечатлений",
"Действуйте, но не так как вы привыкли",
"Вас ждёт получение неожиданной информации",
"Плывите по течению - именно оно укажет вам правильное направление",
"Как вы относитесь к миру, так и мир будет относиться к вам",
"Этот год станет началом большого пути к успеху",
"Тщательно планируйте свое время, в этом году его будет не так много!",
"Не позволяйте другим сбить вас с пути",
"На место старого всегда приходит нечто новое",
"С каждым днем вы будете становиться лучшей версией себя",
"У вас есть все, чтобы реализовать цель в новом году",
"Все риски будут оправданы, особенно если их хорошо просчитать",
"Слушайте каждого, идеи будут приходить отовсюду",
"Впереди масса интересных возможностей",
"Поскорее завершайте старые дела, и отправляйтесь реализовывать новые",
"Ваши таланты будут оценены по достоинству",
"В этом году вы сможете осуществить гораздо больше, чем можете себе представить",
"Главное - делайте то, что любите. Именно это залог успеха в Новом Году",
"Если вы проявите инициативу, успех не заставит себя ждать",
"Настало время, чтобы расслабиться и отдохнуть",
"Вы будете очень ярко блистать в новом году",
"Кто то будет сильно волновать ваши чувства",
"Вас ждёт интересная встреча",
"Никогда не забывайте о себе",
"Будьте внимательны к знакам судьбы, они вам очень помогут", "Впереди масса интересных возможностей",
"Поскорее завершайте старые дела, и отправляйтесь реализовывать новые",
"Ваши таланты будут оценены по достоинству",
"В этом году вы сможете осуществить гораздо больше, чем можете себе представить",
"Главное - делайте то, что любите. Именно это залог успеха в Новом Году",
"Если вы проявите инициативу, успех не заставит себя ждать",
"Настало время, чтобы расслабиться и отдохнуть",
"Вы будете очень ярко блистать в новом году",
"Кто то будет сильно волновать ваши чувства",
"Вас ждёт интересная встреча",
"Никогда не забывайте о себе",
"Будьте внимательны к знакам судьбы, они вам очень помогут"]

function getRandomInt(max) {
	let random = Math.floor(Math.random() * max)
	return random;
}

function generateStory(sticker, oracle){
	ReactDOM.render(<StoryCanvas sticker={sticker} oracle={oracle}/>, document.getElementById('storyWrapper'))
	const anal = () => htmlToImage.toJpeg(document.getElementById('storyCanvas'), {quality: 0.7})
		.then(async function (dataUrl) {
			await bridge.send("VKWebAppShowStoryBox", {
				"background_type": "image",
				"blob": dataUrl,
				"locked": true,
				"attachment": {
					"text": "go_to",
					"type": "url",
					"url": "https://vk.com/app51441454"
				}
			}).then(() => {
				//changeSnackbar("История успешно опубликована!")
			})
				.catch((e) => {
					if (e.error_data.error_reason !== "User denied") {
						//changeSnackbar("Произошла проблема при публикации истории. Попробуй еще раз!")
					}
				})
				.finally(() => {
					ReactDOM.unmountComponentAtNode(storyWrapper);
				});
		});
	setTimeout(anal, 1000);
}

const Persik = props => (
	<div className={'main-panel'} id={props.id}>
		<img className={'result-sticker'}
			 src={stickers[getRandomInt(3)]}
		/>
		<div className={'oracle-cell'}>
			{oracles[getRandomInt(oracles.length -1)]}
		</div>
		<div className={'padded-div'}>
				<Button
					size="l" appearance="accent" stretched mode="secondary"
				>
					Хочу знать точно!
				</Button>
		</div>
		<div className={'padded-div'}>
				<Button
					size="l" appearance="accent" stretched mode="secondary"
					onClick={() => {
						generateStory(
							document.getElementsByClassName('result-sticker')[0].getAttribute('src'),
							document.getElementsByClassName('oracle-cell')[0].textContent
						)
					}}
				>
					Рассказать друзьям
				</Button>
		</div>
	</div>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
