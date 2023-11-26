import styles from "./styles.module.scss";

export default function Avatar(props){
    return(
    <div className={styles.result}>
        <div className={styles.imgAvatar}>
            <img src={props.img} alt="Avatar" />
        </div>
        <div className={styles.infoAvatar}>
            <h2>{props.name}</h2>
            <h3>{props.username}</h3>
            <p>{props.description}</p>
        </div>
    </div>
    )
}