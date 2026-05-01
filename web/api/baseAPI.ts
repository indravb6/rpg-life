export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function postRequest(endpoint: string, data: any) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to post to ${endpoint}: ${response.statusText}`);
  }

  return await response.json();
}

export async function getRequest(endpoint: string) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to get from ${endpoint}: ${response.statusText}`);
  }

  return await response.json();
}
