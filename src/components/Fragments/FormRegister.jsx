import React from 'react'
import InputFrom from '../Elements/Input'
import Button from '../Elements/Button'

const FormRegister = () => {
    return (
        <form action="">
            <InputFrom label="Fullname" type="text" placeholder="Insert Your Name" name="fullname" />
            <InputFrom label="Email" type="email" placeholder="example@email.com" name="email" />
            <InputFrom label="Password" type="password" placeholder="****" name="password" />
            <InputFrom label="Confirm Password" type="password" placeholder="****" name="Confirmpassword" />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister