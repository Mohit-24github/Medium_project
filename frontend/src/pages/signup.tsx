import { useState } from "react"
import { AuthHeader } from "../components/authHeader"
import { InputBox } from "../components/inputBox"
import { Quote } from "../components/Quote"
import { SignupInput } from "@mohit_npm/medium-project"
import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Signup =()=>{
    const navigate = useNavigate()
    const [postInput,setPostInput] = useState<SignupInput>({
            name:'',
            email:'',
            password:''
        })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInput)
            const jwt = response.data.jwt
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        }catch(e){
            alert("error while signing up")
            //alert the user
        }    
    }

    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-screen flex justify-center flex-col">
                    <AuthHeader heading="Create a Account" text="Already have an account? " location="/signin" link="Login"/>
                    <div className="block mx-auto w-100">
                        <InputBox title="Username" placeHolder="Enter Your Username" onChange={(e)=>{
                            setPostInput(c =>({
                                ...c,
                                name: e.target.value
                            }))
                        }}/>
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