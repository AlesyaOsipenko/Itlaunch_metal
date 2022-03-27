import s from './../../MainPage.module.css';

const ServicesItem = (props) => {
    return (
        <div className={s.item}>
            <img className={s.itemLogo} src={props.image} alt="" />
            <a className={s.itemName} href="/">{props.text}</a>
        </div>
    )
  }
  
export default ServicesItem;