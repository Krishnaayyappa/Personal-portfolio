

const Role = (props) => {
    return (
        <div className="role">
            <p>{props.year}</p>
            <div>
                <div>
                    <h3>{props.role}</h3>
                    <p>{props.place}</p>
                </div>
            </div>
        </div>
    )
}

export default Role