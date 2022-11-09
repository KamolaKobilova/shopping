import { useRef, useState, useEffect} from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { matchPath } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';
 
 const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchedPwd, setMatchedPwd] = useState(false);
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocuse] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        useRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])
     
    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchedPwd;
        setValidMatch(match)
    }, [pwd,matchedPwd])
     
    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchedPwd])
    return(
        <section>
           <p ref={errRef} className={errMsg
            ? "errmsg" : "offscreen"}
             aria-live="assertive">{errMsg} </p>
           <h1>Register</h1>
           <form>
             <label htmlFor="username">
                Username:
             </label>
              <input
               type="text"
               id="username"
               ref={userRef}
               autoComplete="off"
               onChange={(e) => setUser(e.target.value)}
               required
               aria-invalid={validName ? "false" : "true"}
               aria-describedby="uidnote"
               onFocus={() => setUserFocus(true)}
               onBlur={() => setUserFocus(false)}
              />
           </form>
        </section>
    )
 }

 export default Register; 