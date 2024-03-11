import { signIn } from 'next-auth/react'; 

export const sendUserSignupData = async (values: any) => {

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(values)
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password
      })
    })

    if (response.status === 400) {
      throw new Error('такой email уже зарегистрирован')
    }

    if (
        response.status !== 200 &&
        response.status !== 400
      ) {
          throw new Error('что-то пошло не так')
        }
  };

export const checkUserSignInData = async (values: any) => {
  const res = await signIn("credentials", {
    redirect: false,
    email: values.email,
    password: values.password
  });

  if (res?.error) {
    throw new Error('неверный логин или пароль')
  }
};



