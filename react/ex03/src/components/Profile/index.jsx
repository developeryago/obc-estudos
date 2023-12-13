import { useState } from "react"
import Style from "../../styles/css/style.module.css"



export default function Profile ({avatar, name, bio, email, phone, linkedinUrl, githubUrl, instagramUrl}) {
    // (valor, funçãoModificadora)
    const [followButtonTxt, setFollowButtonTxt] = useState("Follow")

    function handleClick(ev) {
        alert("Você clicou em Follow")
        setFollowButtonTxt("Following")
    }

    return <div className={Style.containerProfile}>
            <div className={Style.containerImg}>
                <img src={avatar} alt={name} />
            </div>
            <h3>{name}</h3>
            <button
            onClick={handleClick}
            className={Style.followButton}
            >
            {followButtonTxt}
            </button>

            <div className={Style.containerDescription}>
                <p>{bio}</p>
            </div>
            <div className={Style.containerDescription}>
                <p>{email}</p>
            </div>
            <div className={Style.containerDescription}>
                <p>{phone}</p>
            </div>

            <div className={Style.links}>
                <a href={githubUrl}>GitHub</a>
                <a href={linkedinUrl}>Linkedin</a>
                <a href={instagramUrl}>Instagram</a>
            </div>
        </div>
}