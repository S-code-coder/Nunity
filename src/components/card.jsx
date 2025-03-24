import me from  "../images/me.png"
const Card = () => {
    return(
        <div className="card d-flex flex-row justify-content-center align-items-center" style={{width: 600 + 'px',height:100 + 'px'}}>
            <img src={me} style={{width:50 + 'px',height:50 + 'px',marginLeft:30 + 'px'}} class="card-img-top" alt="Card_img" />
            <div class="card-body" style={{marginLeft:-40 + 'px'}}>
                <h5 class="card-title ml-5 fs-3 fs-sm-6 fw-bold ">WELCOME FARINMADE SAMUEL</h5>
            </div>
        </div>
    )
}

export default Card;