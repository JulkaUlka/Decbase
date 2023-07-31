export function fetchAPI(URL, params) {
    return fetch(`${URL}?${params}`).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  
  }