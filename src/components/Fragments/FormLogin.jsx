import React, { useEffect, useRef, useState } from 'react'
import InputFrom from '../Elements/Input'
import Button from '../Elements/Button'
import { login } from '../../services/auth.service'

const FormLogin = () => {

    const [loginFailed, setLoginFailed] = useState("")

    const HandleLogin = (e) => {
        e.preventDefault()
        // localStorage.setItem('email', e.target.email.value)
        // localStorage.setItem('password', e.target.password.value)
        // console.log(e.target.email.value)
        // console.log(e.target.password.value)
        // window.location.href = "/products"

        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res)
                window.location.href = "/products"
            } else {
                setLoginFailed(res.response.data)
                console.log(res.response.data);
            }
        })
    }

    const usernameRef = useRef(null)

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    return (
        <form onSubmit={HandleLogin}>
            {loginFailed && <p className='text-red-500 mb-3'>{loginFailed}</p>}
            <InputFrom label="Username" type="text" placeholder="Jhon Doe" name="username" ref={usernameRef} />
            <InputFrom label="Password" type="password" placeholder="****" name="password" />
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin