import { useEffect } from "react";

const useAutoTheme = () => {
  useEffect(() => {
    const hour = new Date().getHours();

    const isDarkTime = hour < 6 || hour >= 18; // before 6am or after 6pm
    const html = document.documentElement;

    if (isDarkTime) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);
};

export default useAutoTheme;
