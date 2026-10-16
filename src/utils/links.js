export const externalUrl = (url) => {
  if (!url) return '#';

  const trimmedUrl = url.trim();
  if (!trimmedUrl || trimmedUrl === '#') return '#';
  if (/^(https?:|mailto:|tel:|#|\/)/i.test(trimmedUrl)) return trimmedUrl;

  return `https://${trimmedUrl}`;
};

export const mailTo = (email) => {
  if (!email) return '#';

  const trimmedEmail = email.trim();
  if (!trimmedEmail) return '#';
  if (/^mailto:/i.test(trimmedEmail)) return trimmedEmail;

  return `mailto:${trimmedEmail}`;
};
