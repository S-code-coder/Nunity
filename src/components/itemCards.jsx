const ItemCards = (props) => {
    return(
        <div className="card d-flex align-items-center justify-content-center flex-row" style={{width:`${300}px`,
        height:`${150}px`,
        gap:`${10}px`,
        cursor:'pointer',
        border: `rgb(252, 134, 216) solid ${2}px`,
        }}>
             <img src={props.imgSrc} style={{
                width:50 + 'px',
                height:50 + 'px',
                marginLeft:30 + 'px',
                marginTop:`${-20}px`,
                background:'#F4F5FA',
                borderRadius:`${20}%`
                }} class="card-img-top" alt="Card_img" />
            <div>
                <div className="card-header fw-bold fs-4" style={{background:'transparent',borderBottom:'none'}}>
                    {props.name}
                </div>
                <div classNAme="card-body">
                    <p class="card-text mr-3">{props.text}</p>
                </div>
            </div>
        </div>
    )
}
export default ItemCards;