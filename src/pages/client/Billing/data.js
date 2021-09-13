const PaidData = {
    data: [
        { scan_id: '#001122', grade: 'B', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
        { scan_id: '#003209', grade: 'C', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
        { scan_id: '#009102', grade: 'A', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
        { scan_id: '#008651', grade: 'B', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
        { scan_id: '#003461', grade: 'B', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
    ],
    columns: [
        {
            header: 'Scan ID',
            key: 'scan_id',
            width: '10%'
        },
        {
            header: 'Grade',
            key: 'grade',
            width: '10%'
        },
        {
            header: 'Website name',
            key: 'website_name',
            width: '15%'
        },
        {
            header: 'website',
            key: 'website',
            width: '20%'
        },
        {
            header: 'Date scanned',
            key: 'date_scanned',
            width: '20%',
        },
        {
            header: ' ',
            key: 'button'
        }
    ],
}

const UnpaidData = {
    data: [
        { scan_id: '#001122', grade: 'B', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
        { scan_id: '#003209', grade: 'C', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
        { scan_id: '#009102', grade: 'A', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
        { scan_id: '#008651', grade: 'B', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
        { scan_id: '#003461', grade: 'B', website_name: 'Example name', website: 'www.example.com', date_scanned: '29. August 2021' },
    ],
    columns: [
        {
            header: 'Scan ID',
            key: 'scan_id',
            width: '10%'
        },
        {
            header: 'Grade',
            key: 'grade',
            width: '10%'
        },
        {
            header: 'Website name',
            key: 'website_name',
            width: '15%'
        },
        {
            header: 'website',
            key: 'website',
            width: '20%'
        },
        {
            header: 'Date scanned',
            key: 'date_scanned',
            width: '20%',
        },
        {
            header: ' ',
            key: 'button'
        }
    ],
}
export { PaidData, UnpaidData }