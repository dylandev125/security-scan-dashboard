import SmallButton from '../../../components/button/SmallButton';
import Button from '../../../components/button/Button';
import { ReactComponent as ScrollIcon } from '../../../assets/scroll.svg';
import { ReactComponent as UploadIcon } from '../../../assets/upload.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/download.svg';
import { ReactComponent as PencilIcon } from '../../../assets/pencil.svg';

const TableColumns = [
    { header: "Date", key: 'date', width: '13%' },
    { header: "Ticket No.", key: 'ticket_no', width: '10%' },
    { header: "Company", key: 'company', width: '15%' },
    { header: "Topic", key: 'topic', width: '30%' },
    { header: "Status", key: 'status', width: '10%' },
    { header: " ", key: 'button' },
];

const SampleData = [
    {
        date: 'August 05, 2021', ticket_no: '#001339', company: 'Example Inc.',
        topic: 'Problem with payment subscription', status: 0,
    },
    {
        date: 'August 05, 2021', ticket_no: '#001339', company: 'Example Inc.',
        topic: 'Problem with payment subscription', status: 1,
    },
    {
        date: 'August 05, 2021', ticket_no: '#001339', company: 'Example Inc.',
        topic: 'Problem with payment subscription', status: 2,
    },
]

const styles = {
    display: 'flex', alignItems: 'center', flexDirection: 'row',
}

const status = ['Under review', 'Replyed', 'Closed', 'Customer reply'];
const statusStyles = ['#ea8942', '#0071fb', '#37b96b', '#0071fb'];

const Item = (data, handleClick) => {
    return {
        date: <span>{data.date}</span>,
        ticket_no: <span>{data.ticket_no}</span>,
        company: <span>{data.company}</span>,
        topic: <span>{data.topic}</span>,
        status: <span style={{color: statusStyles[data.status]}}>{status[data.status]}</span>,
        button: <span style={{...styles, justifyContent: 'flex-end'}}><Button handleClick={handleClick} label='View ticket' /></span>,
    }
}

export { TableColumns, Item, SampleData };