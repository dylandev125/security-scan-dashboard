import Button from '../../../../components/button/Button';
import ExpiresInButton from '../../../../components/button/ExpiresInButton';

const TableColumns = [
    { header: "#Code", key: 'code', width: '8%' },
    { header: "Date", key: 'date', width: '13%' },
    { header: "Description", key: 'description', width: '40%' },
    { header: "Expires In", key: 'expires_in', width: '15%' },
    { header: " ", key: 'button' },
];

const SampleData = [
    {
        code: '#000123', date: 'August 30, 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
        expires_in: 'August 31, 2021',
    },
    {
        code: '#000113', date: 'August 13, 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
        expires_in: 'Expired',
    },
]

const styles = {
    display: 'flex', alignItems: 'center', flexDirection: 'row',
}

const AddItem = () => {
    return [
        {
            code: <span>#000123</span>,
            date: <span>August 30, 2021</span>,
            description: <input className="code-description" type="text" placeholder="Describe for what this code" />,
            expires_in: <ExpiresInButton />,
            button: <span style={{ ...styles, justifyContent: 'flex-end' }}>
                <Button
                    label='Add'
                />
            </span>,
        },
        {
            code: <span><strong>#Code</strong></span>,
            date: <span><strong>Date</strong></span>,
            description: <strong>Description</strong>,
            expires_in: <strong>Expires In</strong>,
            button: ' ',
        },
    ]
}

const Item = (data, handleClick) => {
    return {
        code: <span>{data.code}</span>,
        date: <span>{data.date}</span>,
        description: <span>{data.description}</span>,
        expires_in: <span>{data.expires_in}</span>,
        button: <span style={{ ...styles, justifyContent: 'flex-end' }}>
            <Button
                handleClick={handleClick}
                label={data.expires_in === 'Expired' ? 'Delete' : 'Deactivate'}
            />
        </span>,
    }
}

export { TableColumns, Item, SampleData, AddItem };