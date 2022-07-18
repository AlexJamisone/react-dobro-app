import './Tips.scss'
import Background from '../../container/Background/Background'
import { Navigation } from '../../components'
import TipsCard from '../../components/TipsCard/TipsCard'

const Tips = () => {
  return (
    <div>
        <Background/>
        <Navigation/>
        <div className="tips-container">
            <TipsCard/>
        </div>
    </div>
  )
}

export default Tips