import styles from "./styles.module.scss";

export default function ItemRepositorio(props){


    return(
        <div className={styles.itemRepositorio}>
            <a href={props.url} target="_blank">
                <h2>{props.nameProject}</h2>
            </a>
            <p>{props.descProject}</p>
            <div className={styles.languages}>
                <p>{props.languages}</p>
            </div>
            {props.children}
        </div>
    )
}