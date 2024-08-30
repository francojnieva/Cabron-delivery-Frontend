
import { Toaster } from 'sonner'

const Toast = () => {
  return (
    <Toaster 
        richColors 
        position="top-center" 
        toastOptions={{
        className: 'px-2 py-4 flex justify-center space-x-2',
    }} />
  )
}

export default Toast