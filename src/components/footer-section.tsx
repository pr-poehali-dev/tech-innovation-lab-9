import Icon from "@/components/ui/icon"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">Red1dark Studio</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">AI-агенты, игры и цифровые сервисы</p>
        <p className="text-muted-foreground text-xs leading-[18px] text-left max-w-[200px]">
          © 2026 Red1dark Studio. Все права защищены.
        </p>
        <div className="flex justify-start items-start gap-4">
          <a href="https://t.me/red1dark" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-5 h-5 flex items-center justify-center">
            <Icon name="Send" size={18} className="text-muted-foreground hover:text-foreground transition-colors" fallback="Send" />
          </a>
          <a href="https://vk.com/red1dark" target="_blank" rel="noopener noreferrer" aria-label="VK" className="w-5 h-5 flex items-center justify-center">
            <Icon name="MessageSquare" size={18} className="text-muted-foreground hover:text-foreground transition-colors" fallback="MessageSquare" />
          </a>
          <a href="mailto:contact@red1dark.ru" aria-label="Email" className="w-5 h-5 flex items-center justify-center">
            <Icon name="Mail" size={18} className="text-muted-foreground hover:text-foreground transition-colors" fallback="Mail" />
          </a>
        </div>
      </div>
      {/* Right Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Услуги</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">AI-агенты</a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Telegram-боты</a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Веб-разработка</a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Игры</a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Дизайн</a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Навигация</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:underline">Витрина услуг</a>
            <a href="#pricing-section" className="text-foreground text-sm font-normal leading-5 hover:underline">Тарифы</a>
            <a href="#testimonials-section" className="text-foreground text-sm font-normal leading-5 hover:underline">Отзывы</a>
            <a href="#faq-section" className="text-foreground text-sm font-normal leading-5 hover:underline">FAQ</a>
            <a href="https://store.red1dark.ru" target="_blank" rel="noopener noreferrer" className="text-foreground text-sm font-normal leading-5 hover:underline">Магазин</a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Юридическое</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Политика конфиденциальности</a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Условия использования</a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">EULA</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
