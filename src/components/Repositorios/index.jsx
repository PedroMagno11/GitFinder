import styles from "./styles.module.scss";

export default function Repositorios(props){
    return(
        <div className={styles.repositorios}>
            <h1>Repositórios</h1>
            {props.children}
        </div>
    )
}