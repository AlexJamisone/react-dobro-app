import React from 'react'
import { Navigation } from '../../components'
import { motion } from 'framer-motion'
import Background from '../../container/Background/Background'

import './YandexReviews.scss'

const YandexReviews = () => {
	return (
		<>
			<Background/>
			<Navigation/>
			<motion.div
				initial={{y: 200, opacity: 0}}
				animate={{y: 0, opacity: 1}}
				transition={{ duration: 2}}
			>
				<div className="yandex-container">
					<div 
						className='yandex'
					>
							<iframe 
								title='Yandex'
								className='iframe1'
								src="https://yandex.ru/maps-reviews-widget/113115524349?comments"
							>
							</iframe>
							<a 
								href="https://yandex.ru/maps/org/dobro_kofe/113115524349/"
								target="_blank"
								rel='noreferrer'
								className='iframe2'>
									ДоБро кофе на карте Севастополя — Яндекс Карты
							</a>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default YandexReviews