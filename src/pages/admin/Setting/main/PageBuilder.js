import Button from '../../../../components/button/Button';

const TableColumns = [
    { header: "UID", key: 'uid', width: '8%' },
    { header: "Date", key: 'date', width: '13%' },
    { header: "Account Type", key: 'account_type', width: '15%' },
    { header: "Company/Name", key: 'company_name', width: '15%' },
    { header: "Website", key: 'website', width: '15%' },
    { header: "Email", key: 'email', width: '10%' },
    { header: " ", key: 'button' },
];

const SampleData = [
    {
        uid: '#000123', date: 'August 30, 2021', account_type: 'Premium',
        company_name: 'Example LLC', website: 'https://www.example.com', email: 'info@example.com',
    },
    {
        uid: '#000125', date: 'August 18, 2021', account_type: 'Premium',
        company_name: 'Example LLC', website: 'https://www.example.com', email: 'info@example.com',
    },
    {
        uid: '#000082', date: 'August 30, 2021', account_type: 'Standard',
        company_name: 'Example LLC', website: 'https://www.example.com', email: 'info@example.com',
    },
]

const styles = {
    display: 'flex', alignItems: 'center', flexDirection: 'row',
}

const Item = (data, handleClick) => {
    return {
        uid: <span>{data.uid}</span>,
        date: <span>{data.date}</span>,
        account_type: <span>Customer<br></br>{data.account_type}</span>,
        company_name: <span>{data.company_name}</span>,
        website: <span>{data.website}</span>,
        email: <span>{data.website}</span>,
        button: <span style={{ ...styles, justifyContent: 'flex-end' }}><Button handleClick={handleClick} label='Select' /></span>,
    }
}

export { TableColumns, Item, SampleData };