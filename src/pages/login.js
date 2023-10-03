

const Login = () =>{
    return (
            
        <body class="body-about">

            <form class="form" action="/login" method="post">
                <label for="Email"> Email :</label>
                <input type="email" name="Email" required/>
                <label for="Password"> Password :</label>
                <input type="password" name="Password" required/>
                <button>login</button>
            </form>
            {/* <h3><%= err %></h3> */}
            
        </body>
    )
}

export default Login