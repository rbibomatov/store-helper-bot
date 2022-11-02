export function useTelegram() {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.sendData({
      test: "test",
    });
  };

  return {
    tg,
    onClose,
  };
}
