import './LinkToApp.scss'
import PlayStore from '../../assets/googleplay.png'
import AppStore from '../../assets/appstore.png'
import { motion } from 'framer-motion'

const LinkToApp = () => {
	return (
		<motion.div
			className="link-container"
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, type: 'spring' }}
		>
			<h1 className="link-text">
				{' '}
				Привет, у нас появилось приложение с доставкой!
			</h1>
			<motion.a
				whileHover={{ scale: 1.1 }}
				transition={{ type: 'spring' }}
				className="link-playStore"
				href="https://play.google.com/store/apps/details?id=ru.quickresto.loyalty.dobrocoffeecr"
				target="_blank"
				rel="noreferrer"
			>
				<img src={PlayStore} alt="Play Market" />
			</motion.a>
			<motion.a
				whileHover={{ scale: 1.1 }}
				transition={{ type: 'spring' }}
				className="link-appStore"
				href="https://apps.apple.com/ru/app/dobro-%D0%BA%D0%BE%D1%84%D0%B5/id1594161361"
				target="_blank"
				rel="noreferrer"
			>
				<img src={AppStore} alt="Play Market" />
			</motion.a>
		</motion.div>
	)
}

export default LinkToApp
