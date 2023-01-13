export const relativeToAbsoluteUrls = (html = '') => {
  return html.split(process.env.NEXT_PUBLIC_WP_URL).join('');
};
