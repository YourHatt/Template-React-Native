export default menu = {
    mainMenu: [
        {
            icon: 'bookmarks',
            label: 'Inventory',
            link: 'INVENTORY_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'cart',
            label: 'Sales & Receiving',
            link: 'SALERECEIVING_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'paper',
            label: 'Record Expenses',
            link: 'RECORD_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'alarm',
            label: 'Time Management',
            link: 'TIME_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'calculator',
            label: 'Weight Management',
            link: 'WEIGHT_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'pie',
            label: 'Sharing',
            link: 'SHARING_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'eye',
            label: 'Reports',
            link: 'REPORT_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'person',
            label: 'Master Data',
            link: 'MASTER_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'color-filter',
            label: 'Plantation',
            link: 'PLAN_SCREEN',
            view: '',
            permission: ''
        }
    ],
    inventory: [
        {
            icon: 'wifi',
            label: 'Goods Receive',
            link: 'GOODRECEIVE_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Good Transfer',
            link: 'Inventory',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Record Scrab',
            link: 'Inventory',
            view: '',
            permission: ''
        },
    ],
    masterData: [
        {
            icon: 'wifi',
            label: 'Product',
            link: 'PRODUCT_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Unit of Measure',
            link: 'UNITOFMEASURE_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Location',
            link: 'LOCATION_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Member',
            link: 'MEMBER_SCREEN',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Expense',
            link: 'EXPENSE_SCREEN',
            view: '',
            permission: ''
        },
    ],
    saleReceiving: [
        {
            icon: 'wifi',
            label: 'Sales : Cash',
            link: 'Inventory',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Sales : Credit',
            link: 'Inventory',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Credit Receipt',
            link: 'Inventory',
            view: '',
            permission: ''
        },
    ],
    recordExpenses: [
        {
            icon: 'search',
            label: 'Expense Type',
            view: '',
            input: 'type',
            permission: ''
        },
        {
            icon: 'search',
            label: 'Payee',
            view: '',
            input: 'payee',
            permission: ''
        },
        {
            icon: 'search',
            label: 'Amount',
            input: 'amount',
            view: '',
            permission: ''
        },
    ],
    timeManagement: [
        {
            icon: 'person',
            label: 'Member Name',
            view: '',
            input: 'memberName',
            permission: ''
        },
        {
            icon: 'call',
            label: 'Tel',
            view: '',
            input: 'memberTel',
            permission: ''
        },
        {
            icon: 'calendar',
            label: 'Date',
            input: 'memberDate',
            view: 'amount',
            permission: '',
            isDate: true
        },
        {
            icon: 'calendar',
            label: 'Date In',
            input: 'memberDateIn',
            view: 'amount',
            permission: '',
            isDate: true
        },
        {
            icon: 'calendar',
            label: 'memberDateOut',
            input: 'type',
            view: 'amount',
            permission: '',
            isDate: true
        },
    ],
    weightManagement: [
        {
            icon: 'person',
            label: 'Member Name',
            view: '',
            input: 'memberName',
            permission: ''
        },
        {
            icon: 'call',
            label: 'Tel',
            view: '',
            input: 'memberTel',
            permission: ''
        },
        {
            icon: 'calendar',
            label: 'Date',
            input: 'memberDate',
            view: '',
            permission: '',
            isDate: true
        },
        {
            icon: 'briefcase',
            label: 'Product',
            input: 'memberDateIn',
            view: '',
            permission: '',
        },
        {
            icon: 'search',
            label: 'Weight',
            input: 'type',
            view: '',
            permission: '',
        },
    ],
    plantation: [
        {
            icon: 'search',
            label: 'Lot Number',
            view: '',
            input: 'memberName',
            permission: ''
        },
        {
            icon: 'search',
            label: 'Product',
            view: '',
            input: 'memberTel',
            permission: ''
        },
        {
            icon: 'search',
            label: 'Farmer',
            input: 'memberDate',
            view: '',
            permission: '',
        },
        {
            icon: 'search',
            label: 'Plant Location',
            input: 'memberDateIn',
            view: '',
            permission: '',
        },
        {
            icon: 'search',
            label: 'Grow Date / Pick Date',
            input: 'type',
            view: '',
            permission: '',
        },
        {
            icon: 'search',
            label: 'Remark',
            input: 'type',
            view: '',
            permission: '',
        },
    ],
    report: [
        {
            icon: 'wifi',
            label: 'Stock Movement',
            link: 'Inventory',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Stock Balance',
            link: 'Inventory',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Sales',
            link: 'Inventory',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Account Receivable',
            link: 'Inventory',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Income Statement',
            link: 'Inventory',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Time Management',
            link: 'Inventory',
            view: '',
            permission: ''
        },
        {
            icon: 'wifi',
            label: 'Shareholder List',
            link: 'Inventory',
            view: '',
            permission: ''
        },
    ],
    product: [
        {
            icon: 'wifi',
            label: 'Product',
            link: 'Inventory',
            view: '',
            permission: '',
            menuKey: 'product',
            form: 'FORM_SCREEN'
        },
        {
            icon: 'wifi',
            label: 'Unit of Measure',
            link: 'Inventory',
            view: '',
            permission: '',
            menuKey: 'product',
            form: 'FORM_SCREEN'
        },
        {
            icon: 'wifi',
            label: 'Status',
            link: 'Inventory',
            view: '',
            permission: '',
            menuKey: 'product',
            form: 'FORM_SCREEN'

        },
        {
            icon: 'wifi',
            label: 'Unit Cost',
            link: 'Inventory',
            view: '',
            permission: '',
            menuKey: 'product',
            form: 'FORM_SCREEN'

        },
        {
            icon: 'wifi',
            label: 'Unit Price',
            link: 'Inventory',
            view: '',
            permission: '',
            menuKey: 'product',
            form: 'FORM_SCREEN'

        },
        {
            icon: 'wifi',
            label: 'VAT Price',
            link: 'Inventory',
            view: '',
            permission: '',
            menuKey: 'product',
            form: 'FORM_SCREEN'

        },
    ],
}