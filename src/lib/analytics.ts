export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag && GA_TRACKING_ID) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events (e.g. form submissions, clicks)
export const trackEvent = (
  action: string,
  params: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  } = {}
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
  
  // Custom tracking for Microsoft Clarity if available
  if (typeof window !== "undefined" && (window as any).clarity) {
    (window as any).clarity("event", action, params);
  }
};
