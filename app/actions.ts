"use server";

export async function getGHData() {
  const res = await fetch("https://api.github.com/repos/brendalf/brendalf.dev");

  if (!res.ok) {
    console.log("Failed to fetch data");
    return 0;
  }

  return res.json();
}
