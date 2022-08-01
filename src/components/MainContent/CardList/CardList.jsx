import Card from '../Card/Card'

const CardList = ({ data }) => {
	return (
		<>
			{data.map((item, index) => {
				return <Card key={index} data={item} />
			})}
		</>
	)
}

export default CardList
