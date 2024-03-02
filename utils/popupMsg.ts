import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (): void => {
  toast.success('Добавлено!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};