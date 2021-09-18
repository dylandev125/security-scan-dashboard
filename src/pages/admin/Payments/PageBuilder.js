import SmallButton from '../../../components/button/SmallButton';
import Button from '../../../components/button/Button';
import { ReactComponent as ScrollIcon } from '../../../assets/scroll.svg';
import { ReactComponent as UploadIcon } from '../../../assets/upload.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/download.svg';
import { ReactComponent as PencilIcon } from '../../../assets/pencil.svg';

const TableColumns = [
    { header: "Date", key: 'date', width: '10%' },
    { header: "Invoice", key: 'invoice', width: '10%' },
    { header: "Amount", key: 'amount', width: '10%' },
    { header: "Company", key: 'company', width: '10%' },
    { header: "Plan Type", key: 'plan_type', width: '10%' },
    { header: "Payment method", key: 'payment_method', width: '15%' },
    { header: " ", key: 'button' },
];

const SampleData = [
    {
        date: 'August 05, 2021', invoice: '#001339', amount: '149.00 €', company: 'Example LLC',
        plan_type: 'Premium', payment_method: { title: 'PayPal', paid: 'Processing', date: 'August 08,2021' }
    },
    {
        date: 'August 05, 2021', invoice: '#001339', amount: '149.00 €', company: 'Example LLC',
        plan_type: 'Premium', payment_method: { title: 'PayPal', paid: 'Paid', date: 'August 08,2021' }
    },
    {
        date: 'August 05, 2021', invoice: '#001339', amount: '149.00 €', company: 'Example LLC',
        plan_type: 'Premium', payment_method: { title: 'Stripe', paid: 'Canceled', date: 'August 08,2021' }
    },
]

const styles = {
    display: 'flex', alignItems: 'center', flexDirection: 'row',
}

const Item = (data) => {
    return {
        date: <span>{data.date}</span>,
        invoice: <span>{data.invoice}</span>,
        amount: <span>{data.amount}</span>,
        company: <span>{data.company}</span>,
        plan_type: <span>{data.plan_type}</span>,
        payment_method:
            <div style={{ ...styles, justifyContent: 'flex-start' }}>
                {
                    data.payment_method.paid !== 'Processing' ? 
                    <span className={"payment-method " + (data.payment_method.title === 'PayPal' ? 'paypal' : '')}>
                        {data.payment_method.title}</span> : <span><ScrollIcon /></span>
                }
                <div style={{ padding: '0 15px' }}>
                    <span style={{
                        color: data.payment_method.paid === 'Processing' ? '#232323' :
                            (data.payment_method.paid === 'Paid' ? "#37b96b" : "#f22d50")
                    }}>
                        {data.payment_method.paid}
                    </span>
                    <span>{data.payment_method.paid === 'Processing' ? '_' : data.payment_method.date}</span>
                </div>
            </div>,
        button:
            <div style={{ ...styles, justifyContent: 'flex-end', gap: '10px' }}>
                {data.payment_method.paid==='Processing' && <Button label="Send Invoice" />}
                <SmallButton><UploadIcon /></SmallButton>
                <SmallButton><DownloadIcon /></SmallButton>
                <SmallButton><UploadIcon /></SmallButton>
            </div>,
    }
}

export { TableColumns, Item, SampleData };