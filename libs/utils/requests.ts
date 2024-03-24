import { signIn } from 'next-auth/react'; 

export const sendUserSignupData = async (values: any) => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.name.toLowerCase(),
        secondName: values.secondName.toLowerCase(),
        thirdName: values.thirdName.toLowerCase(),
        email: values.email.toLowerCase(),
        password: values.password,
        role: 'user'
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
    email: values.email.toLowerCase(),
    password: values.password,
  });

  if (res?.error) {
    throw new Error('неверный логин или пароль')
  }
};

export const updateUserData = async (values: any, id: string) => {
  const response = await fetch('/api/username-update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      name: values.name.toLowerCase(),
      email: values.email.toLowerCase(),
      secondName: values.secondName.toLowerCase(),
      thirdName: values.thirdName.toLowerCase(),
      phone: values.phone
    })
  })

  if (response.status === 400) {
    throw new Error('не удалось обновить имя')
  }

  if (
    response.status !== 200 &&
    response.status !== 400
  ) {
    throw new Error('что-то пошло не так')
  }

  if (response.ok) {
    await signIn("credentials", {
      email: values.email.toLowerCase(),
      password: values.password,
      redirect: false,
    })
  }
};



