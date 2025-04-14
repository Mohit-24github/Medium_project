import { SigninInput } from "@mohit_npm/medium-project"
import { AuthHeader } from "../components/authHeader"
import { Button } from "../components/Button"
import { InputBox } from "../components/inputBox"
import { Quote } from "../components/Quote"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Signin =()=>{
    const navigate = useNavigate()
    const [postInput,setPostInput] = useState<SigninInput>({
            email:'',
            password:''
        })
    
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInput)
            const jwt = response.data.jwt
            console.log(jwt)
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        }catch(e){
            alert("error while signing in")
            //alert the user
        }    
    }
    
    return <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-screen flex justify-center flex-col">
                        <AuthHeader heading="Sign In" text="Don't have an Account? " location="/signup" link="Register"/>
                        <div className="block mx-auto w-100">
                            <InputBox title="Email" placeHolder="Enter Your email" onChange={(e)=>{
                                setPostInput(c =>({
                                    ...c,
                                    email: e.target.value
                                }))
                            }}/>
                            <InputBox type="password" title="Password" placeHolder="Set a strong Password" onChange={(e)=>{
                                setPostInput(c =>({
                                    ...c,
                                    password: e.target.value
                                }))
                            }}/>
                            <div className="my-5">
                                <Button onClick={sendRequest} text="Sign Up"/>
                            </div>
                        </div>
                    </div>
                <div className="invisible lg:visible">
                    <Quote />
                </div>
            </div>
        </div>
}