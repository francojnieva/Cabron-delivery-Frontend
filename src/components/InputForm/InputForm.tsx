
type InputFormProps = {
  type: string;
  placeholder: string;
}

const InputForm = ({ type, placeholder }: InputFormProps) => {
  return (
    <>
      <input type={type} className="grow p-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#fff] w-full outline-none font-medium placeholder:text-[#fff]" placeholder={placeholder} />
    </>
  )
}

export default InputForm