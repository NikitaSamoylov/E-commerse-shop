  export const sendUserSignupData = async (values: any) => {

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
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
  }



