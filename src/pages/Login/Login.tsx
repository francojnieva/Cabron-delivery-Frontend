import Logo from '../../assets/logo-cabron.svg'
import InputForm from '../../components/InputForm/InputForm'
import SignUpAndLogin from '../../components/SignUpAndLogin/SignUpAndLogin'

const Login = () => {
    return (
        <>
            <SignUpAndLogin
                title='Iniciar sesión'
                subTitle='Ingresa con tu cuenta para acceder a todas nuestras funcionalidades.'
                logo={Logo}
                inputs={
                <>
                    <InputForm
                        type='email'
                        placeholder='Dirección de correo electrónico'
                    />
                    <InputForm
                        type='password'
                        placeholder='Contraseña'
                    />
                </>}
                path='/'
                link='Registrarme'
                buttonSubmit='Iniciar sesión'
            />
        </>
    )
}

export default Login