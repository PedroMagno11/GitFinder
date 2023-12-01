import { useState } from "react";
import Avatar from "../Avatar";
import ItemRepositorio from "../ItemRespositorio";
import Repositorios from "../Repositorios";
import styles from "./styles.module.scss";

export default function Main(){

    const [user,setUser] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const [repos, setRepos] = useState([]);


    const handleGetData = async ()=>{
        const userData = await fetch(`https://api.github.com/users/${user}`)
        const newUser = await userData.json();
        const userRepos = await fetch(newUser.repos_url);
        const repositorios = await userRepos.json();
        setRepos(repositorios)
        setCurrentUser(newUser)
    }

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
                        <button onClick={handleGetData}>Buscar</button>
                    </div>
                    {
                    currentUser ? 
                    <>
                        <Avatar img={currentUser.avatar_url} name={currentUser.name} username={`@${currentUser.login}`.toLocaleLowerCase()} description={currentUser.bio}/>
                        

                            <Repositorios>
                                {repos.map(rep=>(
                                <ItemRepositorio
                                key={rep.id}
                                url={rep.html_url} 
                                nameProject={rep.name} 
                                descProject={rep.description} 
                                languages={rep.language?rep.language:"MarkDown"}
                                />))}
                        </Repositorios>
                    </>:null}
                    
                </div>
            </main>
        </>
    )
}