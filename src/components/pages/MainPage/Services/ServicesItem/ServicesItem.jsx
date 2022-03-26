import s from './../../MainPage.module.css';

const ServicesItem = (props) => {
    return (
        <div className={s.item}>
            <img className={s.itemLogo} src={props.image} alt="" />
            <span className={s.itemName}>{props.text}</span>
        </div>
    )
  }
  
export default ServicesItem;