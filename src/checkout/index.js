import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Modal from '../components/Modal';
import Button from '../components/Button';

const CheckoutContainer = (props) => {

    const [step, setStep] = useState(1);

    const closeModal = () => {
        setStep(1);
        props.closeShoppingCart();
    }

    const resetCart = () => {
        setStep(1);
        props.closeShoppingCart();
        props.setCartItems([]);
        props.setTotalPrice(0);
    }

    return (
        <Modal display={props.display}>
            {step === 1 &&
                <Step1
                    totalPrice={props.totalPrice}
                    cartItems={props.cartItems}
                    addItem={props.addItem}
                    removeItem={props.removeItem}
                />
            }
            {step === 2 &&
                <Step2
                    totalPrice={props.totalPrice}
                    cartItems={props.cartItems}
                />
            }
            {step === 3 &&
                <Step3
                    setStep={(step) => setStep(step)}
                    resetCart={resetCart}
                />
            }

            <div className="button-container">
                {(step === 2) &&
                    <Button onClick={() => setStep(step-1)}>Back</Button>
                }
                {(step === 3) &&
                    <Button style={{marginRight:"85px"}} onClick={() => setStep(step-1)}>Back</Button>
                }
                {(step === 1 || step === 2) &&
                    <>
                    <Button onClick={closeModal}>Cancel</Button>
                    <Button onClick={() => setStep(step+1)}>Continue</Button>
                    </>
                }
            </div>
        </Modal>
    )
}

export default CheckoutContainer;