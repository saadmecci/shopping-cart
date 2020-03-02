import React, { useState } from 'react';
import { Form } from 'react-final-form';
import Cards from 'react-credit-cards';
import styled from 'styled-components';
import Button from '../components/Button';
import 'react-credit-cards/es/styles-compiled.css';

const CustomerInfoContainer = styled.div`
  text-align: center;
`

const ShippingInfoContainer = styled.div`
  margin: 10px 0px 10px 0px
  display: inline-block;
  max-width: 400px;
`

const CardInfoContainer = styled.div`
  margin: 10px 0px 0px 0px;
  display: inline-block;
  max-width: 400px;
`

const NameContainer = styled.div`
  padding: 0px 10px 0px 0px;
  margin: 0px 0px 5px 0px;
  display: inline-block;
`
const UserInput = styled.input`
  height: 25px;
  width: 180px;
`

const Step3 = (props) => {

  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const onSubmit = (e) => {
    let customerInfo = {};
    let cardInfo = {};

    customerInfo.firstName = e.firstName;
    customerInfo.lastName = e.lastName;
    customerInfo.address = e.address;
    customerInfo.apt = e.apt;
    customerInfo.zipcode = e.zipcode;

    cardInfo.number = number;
    cardInfo.name = name;
    cardInfo.expiry = expiry;
    cardInfo.cvc = cvc;

    props.resetCart();
  }

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  }

  const handleNumberChange = (e) => {
    const { value } = e.target;
    setNumber(value);
  }

  const handleNameChange = (e) => {
    const {  value } = e.target;
    setName(value);
  }

  const handleExpiryChange = (e) => {
    const {  value } = e.target;
    setExpiry(value);
  }

  const handleCvcChange = (e) => {
    const { value } = e.target;
    setCvc(value);
  }

  return(
    <>
    <div className="title">Shopping Cart</div>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <CustomerInfoContainer>
            <ShippingInfoContainer>
              <NameContainer>
              <UserInput
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name *"
              />
              </NameContainer>
              <NameContainer>
              <UserInput
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name *"
              />
              </NameContainer>
              <NameContainer>
              <UserInput
                name="address"
                component="input"
                type="text"
                placeholder="Address *"
              />
              </NameContainer>
              <NameContainer>
                <UserInput
                  name="apt"
                  component="input"
                  type="text"
                  placeholder="Apt # / Suite"
                />
              </NameContainer>
              <NameContainer>
                <UserInput
                    name="zipcode"
                    component="input"
                    type="text"
                    placeholder="Zip Code *"
                  />
              </NameContainer>
              <NameContainer>
                <UserInput
                    name="phone"
                    component="input"
                    type="text"
                    placeholder="Phone Number *"
                  />
              </NameContainer>
            </ShippingInfoContainer>
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focus={focus}
            />
            <CardInfoContainer>
              <NameContainer>
                <UserInput
                  style={{width:"260px"}}
                  type="text"
                  name="number"
                  placeholder="Card Number"
                  onChange={handleNumberChange}
                  onFocus={handleInputFocus}
                />
              </NameContainer>
              <NameContainer>
                <UserInput
                  style={{width:"260px"}}
                  type="text"
                  name="name"
                  placeholder="Card Name"
                  onChange={handleNameChange}
                  onFocus={handleInputFocus}
                />
              </NameContainer>
              <NameContainer>
                <UserInput
                  style={{width:"122px"}}
                  type="text"
                  name="expiry"
                  placeholder="Valid Through"
                  onChange={handleExpiryChange}
                  onFocus={handleInputFocus}
                />
              </NameContainer>
              <NameContainer>
                <UserInput
                  style={{width:"122px"}}
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  onChange={handleCvcChange}
                  onFocus={handleInputFocus}
                />
              </NameContainer>
            </CardInfoContainer>
            <Button type="submit" className="button-container" style={{zIndex:"1"}}>
              Submit
            </Button>
          </CustomerInfoContainer>
        </form>
      )}
    />
    </>
  )
}
export default Step3;