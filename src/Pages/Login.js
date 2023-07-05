function Login()
{
    return(
        <table>
            <tbody>
                <tr>
                    <td>User Name</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Password
                    </td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td><input type="button" value="Clear"></input></td>
                    <td>
                        <input type="button" value="Login"></input>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
export default Login;