import "./Login.css"

function Login() {
  return (
    <form method="post" className="box-container-main">
      <h3>Login</h3>
      <label htmlFor="userEmail">
        O seu email
        <input
          type="email"
          name="emailUser"
          id="emailUser"
          placeholder="Digite o seu email"
        />
      </label>

      <label htmlFor="userPassword">
        A sua senha
        <input
          type="password"
          name="passwordUser"
          id="passwordUser"
          placeholder="Digite a sua senha"
        />
      </label>

      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
