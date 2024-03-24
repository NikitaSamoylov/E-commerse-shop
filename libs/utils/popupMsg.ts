import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (msg = 'Добавлено'): void => {

  toast.success(`${ msg }`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

export const notifyInfo = (msg: string): void => {
  toast.info(`${msg}`, {
    position: "top-center",
    autoClose: 1900,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

export const notifySuccess = (msg = 'Добавлено'): void => {
  toast.success(`${ msg }`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

export const notifyError = (msg='что-то пошло не так'): void => {
  toast.error(`${msg}`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};