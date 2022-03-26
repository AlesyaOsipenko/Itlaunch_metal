import s from './../../MainPage.module.css';

const FeedbackItem = (props) => {
    return (
        <div className={s.item}>
            <img className={s.itemLogo} src={props.image} alt="" />
            <div className={s.itemName}>{props.text}</div>
        </div>
    )
  }
  
export default FeedbackItem;