import Avatar from "../Avatar";
import ItemRepositorio from "../ItemRespositorio";
import Repositorios from "../Repositorios";
import styles from "./styles.module.scss";
import reposCollection from "../../hooks/reposCollection";
import LikeButton from "../LikeButton";

export default function Main(){

    const {removerRepositorio, repos, currentUser, handleGetData, user, setUser} = reposCollection();

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
                                {repos.map((rep)=>(
                                <ItemRepositorio
                                key={rep.id}
                                id={rep.id}
                                url={rep.html_url} 
                                nameProject={rep.name} 
                                descProject={rep.description} 
                                languages={rep.language?rep.language:"MarkDown"}
                                >
                                    <LikeButton id={rep.id}
                                    handleClick={()=>removerRepositorio(rep)}
                                    btnValue="Remover"/>
                                </ItemRepositorio>))}
                            </Repositorios>
                    </>:null}
                </div>
            </main>
        </>
    )
}