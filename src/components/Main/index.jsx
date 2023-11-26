import { useState } from "react";
import Avatar from "../Avatar";
import ItemRepositorio from "../ItemRespositorio";
import Repositorios from "../Repositorios";
import styles from "./styles.module.scss";

export default function Main(){

    const [user,setUser] = useState("");

    return(
        <>
            <main className={styles.container}>
                <div className={styles.background}>
                    <img src="./background.png"/>
                </div>
                <div className={styles.content}>
                    <div className={styles.search}>
                        <input 
                            type="text" 
                            placeholder="@usuario" 
                            value={user} 
                            onChange={(el)=>setUser(el.target.value)}
                        />
                        <button>Buscar</button>
                    </div>
                    <Avatar img="https://avatars.githubusercontent.com/u/105832975?v=4" name="Pedro Magno" username="@pedromagno11" description="Desenvolvedor fullstack"/>
                    <Repositorios>
                        <ItemRepositorio nameProject="fisiotheapp-challenge" descProject="alguma descrição do projeto"/>
                        <ItemRepositorio nameProject="fisiotheapp-challenge" descProject="alguma descrição do projeto"/>
                        <ItemRepositorio nameProject="fisiotheapp-challenge" descProject="alguma descrição do projeto"/>
                    </Repositorios>
                </div>
            </main>
        </>
    )
}