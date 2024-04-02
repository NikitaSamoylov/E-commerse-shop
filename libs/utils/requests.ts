'use client';
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

    if (response.ok) {
      signIn("credentials", {
        email: values.email.toLowerCase(),
        password: values.password,
        redirect: false,
      });
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

export const updateUserData = async (
  values: any, id: string, email: string | undefined | null, confirmPass:string
) => {
  const response = await fetch('/api/username-update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      name: values.name,
      email: values.email,
      secondName: values.secondName,
      thirdName: values.thirdName,
      phone: values.phone,
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
      email: email?.toLowerCase(),
      password: confirmPass,
      redirect: false,
    })
  }
};

export const updateUserAddress = async (
  values: any, id: string, email: string | undefined | null, confirmPass: string
) => {
  const response = await fetch('/api/username-update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      address: {
        state: values.state,
        region: values.region,
        city: values.city,
        street: values.street,
        cityIndex: values.cityIndex
      }
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
      email: email?.toLowerCase(),
      password: confirmPass,
      redirect: false,
    })
  }
};

export const addNewProduct = async (
  values: any
) => {
  const response = await fetch('/api/add-product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: values.name,
      description: values.description,
      price: values.price,
      brand: values.brand,
      category: values.category,
      inStock: true,
      quantity: values.quantity,
      images: values.images,
      reviews: values.reviews,
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
};





