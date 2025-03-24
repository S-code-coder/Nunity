import Card from "./card";
import ItemCards from "./itemCards";
import order from '../images/order.png';
import message from '../images/message.png';
import archivedOrders from '../images/archived_Orders.png';
import payments from '../images/payments.png';
import security from '../images/security.png';
import address from '../images/address.png';
import family from '../images/family.png';

const Items = [
    {
        'id':'p1',
        'itemName':'Orders',
        'imgSrc': order,
        'text':'Track,Return,cancel an Order'
    },
    {
        'id':'p2',
        'itemName':'Message',
        'imgSrc': message,
        'text':'View or respond to messages from Nunity buyers or sellers '
    },
    {
        'id':'p3',
        'itemName':'Archived Orders',
        'imgSrc': archivedOrders,
        'text':'View and Manage your archived Orders '
    },
    {
        'id':'p4',
        'itemName':'Your Payments',
        'imgSrc': payments,
        'text':'View all transactions,manage payments. '
    },
    {
        'id':'p5',
        'itemName':'Login & Security',
        'imgSrc': security,
        'text':'Edit Login,name and mobile number. '
    },
    {
        'id':'p6',
        'itemName':'Your Addresses',
        'imgSrc': address,
        'text':'Edit, remove or set default address. '
    },
    {
        'id':'p7',
        'itemName':'Your Nunity Family',
        'imgSrc': family,
        'text':'Manage Profiles and permissions in one place. '
    },
]

const RightView = () => {
    return(
        <>
            <div className="d-flex flex-column flex-md-row  flex-md-wrap align-items-center justify-content-center  mb-4" style={{gap:`${15}px`}}>
                <Card />
                <ItemCards name={Items[0].itemName} imgSrc={Items[0].imgSrc} text={Items[0].text}/>
            </div> 
            <div className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center mb-4 " style={{gap:`${15}px`}}>
                <ItemCards name={Items[1].itemName} imgSrc={Items[1].imgSrc} text={Items[1].text}/>
                <ItemCards name={Items[2].itemName} imgSrc={Items[2].imgSrc} text={Items[2].text}/>
                <ItemCards name={Items[3].itemName} imgSrc={Items[3].imgSrc} text={Items[3].text}/>
            </div> 
            <div className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center" style={{gap:`${15}px`}}>
            <ItemCards name={Items[4].itemName} imgSrc={Items[4].imgSrc} text={Items[4].text}/>
            <ItemCards name={Items[5].itemName} imgSrc={Items[5].imgSrc} text={Items[5].text}/>
                <ItemCards name={Items[6].itemName} imgSrc={Items[6].imgSrc} text={Items[6].text}/>
            </div> 
        </>
    )
};
export default RightView;