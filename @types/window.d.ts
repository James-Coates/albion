declare global {
  interface Window {
    gtag: any;
  }
}
window.gtag = window.gtag || {};

export default window;
