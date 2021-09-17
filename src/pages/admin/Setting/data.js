import {ReactComponent as PrintIcon} from '../../../assets/print.svg'
import {ReactComponent as TabIcon} from '../../../assets/new-tab.svg'

const PaidData = {
    data: [
        {
            date_invoices: <><span className="text-muted">#000123</span></>,
            expiration_date: <span className="text-muted">August 31, 2021</span>,
            plan: <span className="plan">Premium</span>,
            payment_method: <span className="payment-method paypal">PayPal</span>,
            status_date: <div><span className="paid">Paid</span><span className="text-muted">August 08, 2021</span></div>,
            total: <span className="total-paid">149.00 $</span>,
            button: <button className="print-icon"><PrintIcon /></button>,
        },
        {
            date_invoices: <><span className="text-muted">#000123</span></>,
            expiration_date: <span className="text-muted">August 31, 2021</span>,
            plan: <span className="plan">Premium</span>,
            payment_method: <span className="payment-method">stripe</span>,
            status_date: <div><span className="paid">Paid</span><span className="text-muted">August 08, 2021</span></div>,
            total: <span className="total-paid">149.00 $</span>,
            button: <button className="print-icon"><PrintIcon /></button>,
        },
        {
            date_invoices: <><span className="text-muted">#000123</span></>,
            expiration_date: <span className="text-muted">August 31, 2021</span>,
            plan: <span className="plan">Premium</span>,
            payment_method: <span className="payment-method">stripe</span>,
            status_date: <div><span className="paid">Paid</span><span className="text-muted">August 08, 2021</span></div>,
            total: <span className="total-paid">149.00 $</span>,
            button: <button className="print-icon"><PrintIcon /></button>,
        },
        {
            date_invoices: <><span className="text-muted">#000123</span></>,
            expiration_date: <span className="text-muted">August 31, 2021</span>,
            plan: <span className="plan">Premium</span>,
            payment_method: <span className="payment-method paypal">PayPal</span>,
            status_date: <div><span className="paid">Paid</span><span className="text-muted">August 08, 2021</span></div>,
            total: <span className="total-paid">149.00 $</span>,
            button: <button className="print-icon"><PrintIcon /></button>,
        },
    ],
    columns: [
        {
            header: "UID",
            key: 'date_invoices',
            width: '10%'
        },
        {
            header: "Date",
            key: 'expiration_date',
            width: '15%'
        },
        {
            header: "Account Type",
            key: 'plan',
            width: '15%'
        },
        {
            header: "Company/Name",
            key: 'payment_method',
            width: '17%'
        },
        {
            header: "Website",
            key: 'status_date',
            width: '15%',
        },
        {
            header: 'Email',
            key: 'total',
            width: '15%',
        },
        {
            header: ' ',
            key: 'button'
        }
    ],
}

const UnpaidData = {
    data: [
        {
            date_invoices: <><span className="text-muted">August 05/2021</span><span>149274728<span className="tab-icon"><TabIcon /></span></span></>,
            expiration_date: <span className="text-muted">August 31, 2021</span>,
            plan: <span className="plan">Premium</span>,
            payment_method: <span className="payment-method">stripe</span>,
            status_date: <div><span className="unpaid">Unpaid</span><span className="text-muted">August 08, 2021</span></div>,
            total: <span className="total-paid">149.00 $</span>,
            button: <button className="print-icon"><PrintIcon /></button>,
        },
        {
            date_invoices: <><span className="text-muted">August 05/2021</span><span>149274728<span className="tab-icon"><TabIcon /></span></span></>,
            expiration_date: <span className="text-muted">August 31, 2021</span>,
            plan: <span className="plan">Premium</span>,
            payment_method: <span className="payment-method paypal">PayPal</span>,
            status_date: <div><span className="unpaid">Unpaid</span><span className="text-muted">August 08, 2021</span></div>,
            total: <span className="total-paid">149.00 $</span>,
            button: <button className="print-icon"><PrintIcon /></button>,
        },
        {
            date_invoices: <><span className="text-muted">August 05/2021</span><span>149274728<span className="tab-icon"><TabIcon /></span></span></>,
            expiration_date: <span className="text-muted">August 31, 2021</span>,
            plan: <span className="plan">Premium</span>,
            payment_method: <span className="payment-method">stripe</span>,
            status_date: <div><span className="unpaid">Unpaid</span><span className="text-muted">August 08, 2021</span></div>,
            total: <span className="total-paid">149.00 $</span>,
            button: <button className="print-icon"><PrintIcon /></button>,
        },
    ],
    columns: [
        {
            header: "Date/Invoices",
            key: 'date_invoices',
            width: '20%'
        },
        {
            header: "Expiration/Valid until",
            key: 'expiration_date',
            width: '20%'
        },
        {
            header: "Plan",
            key: 'plan',
            width: '15%'
        },
        {
            header: "Payment method",
            key: 'payment_method',
            width: '20%'
        },
        {
            header: "Status/Date",
            key: 'status_date',
            width: '15%',
        },
        {
            header: 'Total',
            key: 'total',
            width: '15%',
        },
        {
            header: ' ',
            key: 'button'
        }
    ],
}

export {PaidData, UnpaidData};