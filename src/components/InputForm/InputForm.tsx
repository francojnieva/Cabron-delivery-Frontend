
type InputFormProps = {
  type: string;
  placeholder: string;
}

const InputForm = ({ type, placeholder }: InputFormProps) => {
  return (
    <>
      <input type={type} className="grow p-3 rounded-md bg-transparent border border-[#fcd261] w-full outline-none" placeholder={placeholder} />
    </>
  )
}

export default InputForm