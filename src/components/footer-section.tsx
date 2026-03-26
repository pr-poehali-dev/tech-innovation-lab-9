import Icon from "@/components/ui/icon"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col gap-8 py-10 md:py-[70px]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col justify-start items-start gap-6 p-4 md:p-8 max-w-xs">
          <div className="text-foreground text-xl font-semibold">Red1dark Studio</div>
          <p className="text-muted-foreground text-sm leading-6">
            Разработка сайтов, Telegram-ботов, AI-агентов и игр. Приём заявок онлайн.
          </p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="tel:+79956920082" className="hover:text-foreground transition-colors flex items-center gap-2">
              <Icon name="Phone" size={14} fallback="Phone" />
              +7 995 692‑00‑82
            </a>
            <a href="mailto:store.red-1-dark.ru@red-1-dark.ru" className="hover:text-foreground transition-colors flex items-center gap-2">
              <Icon name="Mail" size={14} fallback="Mail" />
              store.red-1-dark.ru@red-1-dark.ru
            </a>
            <a href="https://vk.com/red1dark_studio" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
              <Icon name="ExternalLink" size={14} fallback="ExternalLink" />
              vk.com/red1dark_studio
            </a>
          </div>
          <div className="flex justify-start items-center gap-4">
            <a href="https://t.me/red1dark_studio" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Icon name="Send" size={18} className="text-muted-foreground hover:text-foreground transition-colors" fallback="Send" />
            </a>
            <a href="https://vk.com/red1dark_studio" target="_blank" rel="noopener noreferrer" aria-label="VK">
              <Icon name="MessageSquare" size={18} className="text-muted-foreground hover:text-foreground transition-colors" fallback="MessageSquare" />
            </a>
            <a href="mailto:store.red-1-dark.ru@red-1-dark.ru" aria-label="Email">
              <Icon name="Mail" size={18} className="text-muted-foreground hover:text-foreground transition-colors" fallback="Mail" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
          <div className="flex flex-col justify-start items-start gap-3">
            <h3 className="text-muted-foreground text-sm font-medium leading-5">Сайт</h3>
            <div className="flex flex-col gap-2">
              <a href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:underline">Каталог услуг</a>
              <a href="#pricing-section" className="text-foreground text-sm font-normal leading-5 hover:underline">Тарифы</a>
              <a href="#testimonials-section" className="text-foreground text-sm font-normal leading-5 hover:underline">Отзывы</a>
              <a href="#faq-section" className="text-foreground text-sm font-normal leading-5 hover:underline">FAQ</a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <h3 className="text-muted-foreground text-sm font-medium leading-5">Услуги</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Сайты и лендинги</a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Telegram-боты</a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">AI-агенты</a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Партнёры</a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <h3 className="text-muted-foreground text-sm font-medium leading-5">Юридическое</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Оферта</a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Условия оплаты</a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Доставка и возврат</a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">Контакты и реквизиты</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 px-4 md:px-8">
        <p className="text-muted-foreground text-xs leading-5">
          © 2026 Red1dark Studio · Павлов Анатолий Сергеевич · Самозанятый (НПД) · ИНН 691643385874 · г. Удомля
        </p>
        <p className="text-muted-foreground text-xs leading-5">
          Все цены указаны в рублях с учётом НПД
        </p>
      </div>
    </footer>
  )
}
