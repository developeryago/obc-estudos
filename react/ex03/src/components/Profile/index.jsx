export default function Profile ({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}) {
    return <div className="containerProfile">
            <div className="containerImg">
                <img src={avatar} alt={name} />
            </div>
            <h3>{name}</h3>

            <div className="containerDescription">
                <p>{bio}</p>
            </div>
            <div className="containerDescription">
                <p>{email}</p>
            </div>
            <div className="containerDescription">
                <p>{phone}</p>
            </div>

            <div className="links">
                <button>{githubUrl}</button>
                <button>{linkedinUrl}</button>
                <button>{twitterUrl}</button>
            </div>
        </div>
}