import s from './../../MainPage.module.css';


const FeedbackItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.itemLogo}/>
            <div className={s.itemName}>{props.text}</div>
        </div>
    )
  }
  
export default FeedbackItem;