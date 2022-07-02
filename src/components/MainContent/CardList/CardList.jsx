import Card from '../Card/Card'
import './CardList.scss'

const CardList = ({ data }) => {
  return (
    <>
      {
        data.map((item, index) => {
            return <Card key={index} data={item}/>
        })
      }
    </>
  )
}

export default CardList