import { Link } from "react-router-dom";

type SignUpAndLoginProps = {
    title: string;
    subTitle: string;
    buttonSubmit: string;
    inputs: any;
    logo: any;
    link: string;
    path: string;
}


const SignUpAndLogin = ({ title, subTitle, buttonSubmit, logo, inputs, path, link }: SignUpAndLoginProps ) => {
  return (
    <section className='p-6 relative min-h-screen flex items-center justify-center text-[#fff] bg-[#FFBC0D] md:w-[85%] md:mx-auto'>
        <img className=' absolute top-4 right-4 bg-[#fff] rounded-full lg:w-16' src={logo} alt="Logo" />
        <form className=' space-y-4 md:w-[60%] lg:w-[50%] ' method='post'>
            <div className=' space-y-1'>
                <h1 className=' text-3xl font-bold'>{title}</h1>
                <p className=' text-sm font-medium'>{subTitle}</p>
            </div>
            <div className=' space-y-3'>
                {inputs}
            </div>
            <div>
                <Link to={path} className=" text-sm link text-blue-600 py-4">{link}</Link>
            </div>
            <div>
                <button className=' py-2 px-4 shadow-md rounded-md font-medium text-[#2e2d30] bg-[#FFF]' type="submit">{buttonSubmit}</button>
            </div>
        </form>
    </section>
  )
}

export default SignUpAndLogin