import { useState } from "react"

export default function reposCollection(){

    const [repos, setRepos] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [user,setUser] = useState("");


    function removerRepositorio(repositorio){
        setRepos(currentRepos=>{
            const newCurrentRepos = currentRepos.filter(rep=>rep.id !== repositorio.id)
            return newCurrentRepos
        })
    }


    const handleGetData = async ()=>{
        const userData = await fetch(`https://api.github.com/users/${user}`)
        const newUser = await userData.json();
        const userRepos = await fetch(newUser.repos_url);
        const repositorios = await userRepos.json();
        setRepos(repositorios)
        setCurrentUser(newUser)
    }

    return{removerRepositorio, repos, handleGetData, currentUser, user, setUser}

}