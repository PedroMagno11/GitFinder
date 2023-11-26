import styles from "./styles.module.scss";

export default function ItemRepositorio(props){
    return(
        <div className={styles.itemRepositorio}>
            <h2>{props.nameProject}</h2>
            <p>{props.descProject}</p>
        </div>
    )
}