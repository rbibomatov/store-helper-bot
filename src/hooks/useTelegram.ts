export function useTelegram() {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.sendData(
      JSON.stringify({
        test: "test",
      })
    );
  };

  return {
    tg,
    onClose,
  };
}
