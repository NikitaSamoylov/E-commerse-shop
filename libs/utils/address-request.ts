export const findAddress = async (findValue:any) => {
  var token = "b7714ff095fc54e1c4b89e8f67bc908d43a0c0f7";
  var query = findValue;

  const res = await fetch("http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify({ query: query })
  });

  return res.json()
};

