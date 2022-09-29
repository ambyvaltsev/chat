import s from './AccountMenu.module.scss';
import { FC, useState } from 'react';
import { Badge } from './components';
import { Menu } from './components';







export const AccountMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className={s.container}>
      <Badge onClick={() => setIsOpen(prev => !prev)} />
      <Menu/>
    </div>
  )
}

