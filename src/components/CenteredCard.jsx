import './styles.css'

const CenteredCard = ({children}) => {
    return (
        <div className="center-div">
            {children}
        </div>
    );
}

export default CenteredCard;