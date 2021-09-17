import DropDown from '../../../components/dropdown';

const TableColumns = [
    { header: "Date", key: 'date', width: '13%' },
    { header: "User ID", key: 'user_id', width: '10%' },
    { header: "Company", key: 'company', width: '12%' },
    { header: "Website", key: 'website', width: '15%' },
    { header: "Name/Position", key: 'name_position', width: '15%' },
    { header: "#Code", key: 'code', width: '10%' },
    { header: "Limit", key: 'button' },
];
const SampleData = [
    {date: 'August 30, 2021', user_id: '#001339', company: 'Example Inc.', website: 'https://www.example.com', name_position: 'Mike Williams\nCEO', code: '#002283'}
]

const Item = (data) => {
    return {
        date: <span>{data.date}</span>,
        user_id: <span>{data.user_id}</span>,
        company: <span>{data.company}</span>,
        website: <span>{data.website}</span>,
        name_position: <span>{data.name_position}</span>,
        code: <span>{data.code}</span>,
        button: <span><DropDown title='5' id="dropdown-btn-primary"></DropDown></span>,
    }
}

export { TableColumns, Item, SampleData };