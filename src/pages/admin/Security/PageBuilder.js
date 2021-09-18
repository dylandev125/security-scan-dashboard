import Button from '../../../components/button/Button';

const TableColumns = [
    { header: "Reg.No", key: 'reg_no', width: '8%' },
    { header: "Date", key: 'date', width: '13%' },
    { header: "Plan Type", key: 'plan_type', width: '10%' },
    { header: "Company", key: 'company', width: '10%' },
    { header: "Website", key: 'website', width: '25%' },
    { header: "Status", key: 'status', width: '10%' },
    { header: " ", key: 'button' },
];

const SampleData = [
    {
        reg_no: '#000029', date: 'August 30, 2021', plan_type: 'Premium',
        company: 'Example LLC', website: 'https://www.example.com', status: 0,
    },
    {
        reg_no: '#000029', date: 'August 30, 2021', plan_type: 'Premium',
        company: 'Example LLC', website: 'https://www.example.com', status: 1,
    },
    {
        reg_no: '#000029', date: 'August 30, 2021', plan_type: 'Premium',
        company: 'Example LLC', website: 'https://www.example.com', status: 2,
    },
]

const styles = {
    display: 'flex', alignItems: 'center', flexDirection: 'row',
}

const status = ['Processing', 'Generating Report', 'Completed',];
const statusStyles = ['#ea8942', '#0071fb', '#37b96b'];

const Item = (data, handleClick) => {
    return {
        reg_no: <span>{data.reg_no}</span>,
        date: <span>{data.date}</span>,
        plan_type: <span>{data.plan_type}</span>,
        company: <span>{data.company}</span>,
        website: <span>{data.website}</span>,
        status: <span style={{color: statusStyles[data.status]}}>{status[data.status]}</span>,
        button: <span style={{...styles, justifyContent: 'flex-end'}}><Button handleClick={handleClick} label='Select' /></span>,
    }
}

export { TableColumns, Item, SampleData };