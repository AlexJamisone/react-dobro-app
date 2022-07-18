import './TipsCard.scss'
import { motion } from 'framer-motion'
import avatar1 from '../../assets/avatar/avatar1.png'
import avatar2 from '../../assets/avatar/avatar2.png'
import avatar3 from '../../assets/avatar/avatar3.png'


const TipsCard = () => {
	const barista = [
		{
			name: 'Саша',
			link: 'https://www.tinkoff.ru/collectmoney/crowd/pakhotin.aleksey4/gTNEd70613/?short_link=YYhHDz02Yo&httpMethod=GET',
			avatar: avatar1
		},
		{
			name: 'Оля',
			link: 'https://www.tinkoff.ru/collectmoney/crowd/pakhotin.aleksey4/gTNEd70613/?short_link=YYhHDz02Yo&httpMethod=GET',
			avatar: avatar2
		},
		{
			name: 'Лёша',
			link: 'https://www.tinkoff.ru/collectmoney/crowd/pakhotin.aleksey4/gTNEd70613/?short_link=YYhHDz02Yo&httpMethod=GET',
			avatar: avatar3
		},
	]
	return (
		<>
			{barista.map((person, index) => {
				const { name, link, avatar } = person
				return (
					<a 
						href={link}
						target='_blank'
						rel='noreferrer'
						key={index}
						className="tips-card-link"
					>
						<img 
							className='tips-card-avatar'
							src={avatar}
							alt={`${name}`} 
						/>
						<h1
							className="tips-card-name"
						>
							{name}
						</h1>
					</a>
				)
					
			})}		
		</>
	)
}

export default TipsCard