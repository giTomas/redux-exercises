
async function fetcUsers(url) {
  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
  // if (response.status !== 200) {
    // throw Error(text.message);
    throw Error(response.statusText);
  }

  return json;
}

async function requestUsers(file) {
  try {
    const data = await fetcUsers(file);
    return data;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    return null;
  }
}

export default requestUsers;
