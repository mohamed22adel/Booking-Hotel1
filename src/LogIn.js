import React, { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
export default function LogIn(){
    

        const elementRef = useRef(null);
        
        useEffect(() => {
            if (elementRef.current) {
            elementRef.current.style.transition = 'transform 0.5s ease';
            elementRef.current.style.transform = 'translateX(100px)';
            }
        }, []);


        const elementRef2 = useRef(null);
        
        useEffect(() => {
            if (elementRef2.current) {
            elementRef2.current.style.transition = 'transform 0.5s ease';
            elementRef2.current.style.transform = 'translateY(10px)';
            }
        }, []);

        

    return(
        
        <div  className="log-in-container">
            <div className="log-welcome" ref={elementRef}>
            <h1>Welcome to <span>Romancy Hotel,</span></h1>
            <h3>Log in to your account.</h3>
            </div>
<form className="form" ref={elementRef2}>
    <p className="log_title">Log In</p>
    <div className="flex-column">
        <label>Username </label>
    </div>
    <div className="inputForm">
        <svg
            height="60"
            viewBox="0 -9 32 32"
            width="40"
        >
            <g id="Layer_3" data-name="Layer 3">
                <path
                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
                ></path>
            </g>
        </svg>
        <input type="text" className="input" placeholder="Username" />
    </div>

    <div className="flex-column">
        <label>Password </label>
    </div>
    <div className="inputForm">
        <svg
            height="20"
            viewBox="-64 0 512 512"
            width="20"
        >
            <path
                d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
            ></path>
            <path
                d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
            ></path>
        </svg>
        <input type="password" className="input" placeholder="Enter your Password" />
    </div>
<Link to="/" className="forgotPassword">Forgot password?</Link>
    <button className="button-submit">Log In</button>
    <p className="p"><p className="line">_________________</p>or log in with<p className="line">_________________</p></p>
    <div className="flex-row">
        <button className="btn_google">
            <svg
                version="1.1"
                width="20"
                id="Layer_1"
                y="0px"
                viewBox="0 0 512 512"
                style={{enableBackground:"new 0 0 512 512"}}
            >
                <path
                    style={{fill:"#FBBB00"}}
                    d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                ></path>
                <path
                    style={{fill:"#518EF8"}}
                    d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                ></path>
                <path
                    style={{fill:"#28B446"}}
                    d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                ></path>
                <path
                    style={{fill:"#F14336"}}
                    d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                ></path>
            </svg>

            Google
        </button>

        <button className="btn_facebook">
            <img className="Facebook_Logo" src={require("./Images/Facebook_Logo_(2019).png.webp")} alt="i"/>Facebook
        </button>

        <button className="btn_apple">
            <img className="apple_Logo" src={require("./Images/apple-logo.png")} alt="i"/>Apple
        </button>
    </div>
</form>


            </div>
    );
}