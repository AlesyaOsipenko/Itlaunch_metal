import s from './SuperInputText.module.css';


const SuperInputText = (props) => {
    return (
        <input placeholder={props.placeholder} className ={s.input}/>
    );
}

export default SuperInputText