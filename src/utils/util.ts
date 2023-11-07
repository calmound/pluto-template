// 下载文件
export const downloadFile = (url: string, name?: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = name ?? 'your-file-name.ext';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
