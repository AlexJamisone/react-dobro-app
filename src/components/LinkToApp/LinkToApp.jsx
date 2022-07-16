import './LinkToApp.scss'
import PlayStore from '../../assets/googleplay.png'
import AppStore from '../../assets/appstore.png'

const LinkToApp = () => {
	return (
		<div className='link-container'>
		<h1 className='link-text'> Привет, у нас появилось приложение с доставкой!</h1>
			<a 
				className='link-playStore'
				href='https://play.google.com/store/apps/details?id=ru.quickresto.loyalty.dobrocoffeecr'
				target='_blank'
				rel='noreferrer'
			>
				<img src={PlayStore} alt="Play Market" />
			</a>
			<a 
				className='link-appStore'
				href='https://play.google.com/store/apps/details?id=ru.quickresto.loyalty.dobrocoffeecr'
				target='_blank'
				rel='noreferrer'
				
			>
				<img src={AppStore} alt="Play Market" />
			</a>
		</div>

	)
}

export default LinkToApp