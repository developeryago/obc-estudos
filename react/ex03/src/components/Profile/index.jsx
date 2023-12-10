import Style from "../../styles/css/style.module.css"

export default function Profile ({avatar, name, bio, email, phone, linkedinUrl, twitterUrl, githubUrl, instagramUrl}) {
    return <div className={Style.containerProfile}>
            <div className={Style.containerImg}>
                <img src={avatar} alt={name} />
            </div>
            <h3>{name}</h3>

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