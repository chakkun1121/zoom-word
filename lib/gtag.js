export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-9H4DM09XJM";

export const existsGaId = GA_MEASUREMENT_ID !== "";

export const pageview = (path) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
};
