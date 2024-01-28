
import Button from '../button'
import './style.scss'
import { useTelegram } from '../../hooks/useTelegram'

const Header = () => {
    const { onClose, user } = useTelegram()

  return (
    <div className={'header'}>
        <Button onClick={onClose} className={''}>Закрыть</Button>
          <span className={'username'}>{user?.username}</span>
    </div>
  )
}

export default Header