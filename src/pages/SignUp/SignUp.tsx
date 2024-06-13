import InputForm from '../../components/InputForm/InputForm'
import Logo from '../../assets/logo-cabron.svg'
import SignUpAndLogin from '../../components/SignUpAndLogin/SignUpAndLogin'

const SignUp = () => {
    return (
        <>
            <SignUpAndLogin
                title='Regístrate'
                subTitle='¡Únete a nuestra comunidad y disfruta de todos los beneficios que ofrecemos!'
                logo={Logo}
                inputs={
                <>
                    <InputForm
                        type='name'
                        placeholder='Nombre'
                    />
                    <InputForm
                        type='email'
                        placeholder='Dirección de correo electrónico'
                    />
                    <InputForm
                        type='password'
                        placeholder='Contraseña'
                    />
                </>}
                path='/iniciar-sesión'
                link='Iniciar sesión'
                buttonSubmit='Enviar'
            />
        </>
    )
}

export default SignUp