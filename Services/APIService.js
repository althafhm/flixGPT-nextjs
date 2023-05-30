export const POST = async (url, body) => {
  const serverurl = process.env.NEXT_PUBLIC_HOST + url;
  try {
    const response = await fetch(serverurl, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), 
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
