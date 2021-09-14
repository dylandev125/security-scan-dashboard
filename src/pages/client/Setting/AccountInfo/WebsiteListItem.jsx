import { ReactComponent as DeleteIcon } from '../../../../assets/trashcan.svg'
import './WebsiteListItem.scss'

const WebsiteListItem = (props) => {
    return (
        <div className="weblist-wrapper">
            <div class="web-item-title">
                <span>{props.title}</span>
                <span>{props.siteurl}</span>
            </div>
            <div class="web-item-operation">
                <span style={{color:props.verified ? '#37b96b' : '#ff6d6d'}}>
                    {props.verified ? 'Verified' : 'Unverified' }
                </span>
                <DeleteIcon />
            </div>
        </div>
    );
}

export default WebsiteListItem;