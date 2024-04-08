export const emailPattern = new RegExp(
  /^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
);
export const passwordPattern = new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/);
export function FormatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
export function extractLangCode(path: string) {
  // Sử dụng Regular Expression để tìm và trích xuất mã ngôn ngữ từ đường dẫn
  const langCode = path.match(/^\/(en|vi)(\/|$)/)?.[1];
  return langCode;
}

export function extractLangAndFirstSegment(url: string) {
  const match = url.match(/^\/(vi|en)\/([^\/]+)(\/|$)/);
  const firstSegmentAfterLang = match ? match[2] : "";

  return firstSegmentAfterLang;
}
