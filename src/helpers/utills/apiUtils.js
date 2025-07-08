export const BASE_URL = "https://parliamentryfact.revanshrenewable.com/API";

export const fetchFromAPI = async (endpoint, params, rejectWithValue) => {
  try {
    const queryString = params ? `?${new URLSearchParams(params)}` : "";
    const response = await fetch(`${BASE_URL}/${endpoint}${queryString}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    return rejectWithValue(err.message);
  }
};
