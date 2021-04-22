import format from 'date-fns/format'
import ptBr from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss';

const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMM', {
    locale: ptBr,
  });


  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="logo PodCastr"/>

      <p>O melhor para voce ouvir, sempre.</p>
      <span>{currentDate}.</span>
    </header>
  ) 
}

export default Header
