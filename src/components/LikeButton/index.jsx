import styles from "./styles.module.scss";

export default function LikeButton(props){
    return(
        <>
        <button id={props.id} onClick={props.handleClick} className={styles.btn}>{props.btnValue}</button>
        </>
    )
}