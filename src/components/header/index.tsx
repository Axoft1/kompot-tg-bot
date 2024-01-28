
import Button from '../button'
import './style.css'
import { useTelegram } from '../../hooks/useTelegram'

const Header = () => {
    const { onClose, user } = useTelegram()

  return (
    <div className={'header'}>
        <Button onClick={onClose} className={''}></Button>
          <span className={'username'}>{user?.username}</span>
    </div>
  )
}

export default Header