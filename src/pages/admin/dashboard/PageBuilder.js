import LimitButton from '../../../components/button/LimitButton';
import ServiceButton from '../../../components/button/ServiceButton';
import StatusButton from '../../../components/button/StatusButton';

const TableColumns = [
    { header: "Date", key: 'date', width: '10%' },
    { header: "User ID", key: 'user_id', width: '10%' },
    { header: "Company", key: 'company', width: '13%' },
    { header: "Website", key: 'website', width: '10%' },
    { header: "Name/Position", key: 'name_position', width: '15%' },
    { header: "#Code", key: 'code', width: '10%' },
    { header: "Limit", key: 'button' },
];
const SampleData = [
    { date: 'August 30, 2021', user_id: '#001339', company: 'Example Inc.', website: 'https://www.example.com', name_position: 'Mike Williams\nCEO', code: '#002283' },
    { date: 'August 30, 2021', user_id: '#001339', company: 'Example Inc.', website: 'https://www.example.com', name_position: 'Mike Williams\nCEO', code: '#002283' },
    { date: 'August 30, 2021', user_id: '#001339', company: 'Example Inc.', website: 'https://www.example.com', name_position: 'Mike Williams\nCEO', code: '#002283' },
    { date: 'August 30, 2021', user_id: '#001339', company: 'Example Inc.', website: 'https://www.example.com', name_position: 'Mike Williams\nCEO', code: '#002283' },
    { date: 'August 30, 2021', user_id: '#001339', company: 'Example Inc.', website: 'https://www.example.com', name_position: 'Mike Williams\nCEO', code: '#002283' },
]

const styles = {
    display:'flex', justifyContent:'flex-start', alignItems:'center', gap: '10px',
}

const Item = (data) => {
    return {
        date: <span>{data.date}</span>,
        user_id: <span>{data.user_id}</span>,
        company: <span>{data.company}</span>,
        website: <span>{data.website}</span>,
        name_position: <span>{data.name_position}</span>,
        code: <span>{data.code}</span>,
        button: <div style={styles}><LimitButton /><ServiceButton /><StatusButton /></div>,
    }
}

export { TableColumns, Item, SampleData };