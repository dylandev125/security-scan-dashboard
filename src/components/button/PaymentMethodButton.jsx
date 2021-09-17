import React from "react"
import { DropdownButton, Dropdown } from "react-bootstrap"
import { ReactComponent as DropdownIcon } from '../../assets/dropdown-i.svg'
import './Button.scss'

const PaymentMethodButton = (props) => {

    return (
        <>
            <DropdownButton id="dropdown-payment-button" title="Payment method">
                <Dropdown.Item><span className="payment-method paypal">Paypal</span></Dropdown.Item>
                <Dropdown.Item><span className="payment-method">Stripe</span></Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default PaymentMethodButton