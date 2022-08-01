import './TipsCard.scss'
import { motion } from 'framer-motion'
import avatar1 from '../../assets/avatar/sasha.png'
import avatar2 from '../../assets/avatar/oli.png'
import avatar3 from '../../assets/avatar/alex.png'

const TipsCard = () => {
	const barista = [
		{
			name: 'Саша',
			link: 'https://www.tinkoff.ru/cf/142W441ULA3',
			avatar: avatar1,
		},
		{
			name: 'Оля',
			link: 'https://www.tinkoff.ru/cf/7dzSVcZ5gpW',
			avatar: avatar2,
		},
		{
			name: 'Лёша',
			link: 'https://www.tinkoff.ru/cf/5Y94azSjVDD',
			avatar: avatar3,
		},
	]
	return (
		<>
			{barista.map((person, index) => {
				const { name, link, avatar } = person
				return (
					<motion.a
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ type: 'spring' }}
						href={link}
						target="_blank"
						rel="noreferrer"
						key={index}
						className="tips-card-link"
					>
						<img
							className="tips-card-avatar"
							src={avatar}
							alt={`${name}`}
						/>
						<h1 className="tips-card-name">{name}</h1>
					</motion.a>
				)
			})}
		</>
	)
}

export default TipsCard
