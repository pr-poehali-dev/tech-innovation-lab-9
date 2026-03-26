import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration"
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents"
import Icon from "@/components/ui/icon"

interface BentoCardProps {
  title: string
  description: string
  Component?: React.ComponentType
  icon?: string
  badge?: string
}

const BentoCard = ({ title, description, Component, icon, badge }: BentoCardProps) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-2">
          <Icon name={icon} size={20} className="text-primary" fallback="Zap" />
        </div>
      )}
      {badge && (
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/20 text-primary mb-1">{badge}</span>
      )}
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    {Component && (
      <div className="self-stretch h-72 relative -mt-0.5 z-10">
        <Component />
      </div>
    )}
    {!Component && <div className="self-stretch h-16" />}
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "AI‑агенты.",
      description: "Автоматизация задач, генерация контента, умные интеграции под ваш бизнес.",
      Component: AiCodeReviews,
      icon: "Bot",
    },
    {
      title: "Telegram‑боты.",
      description: "От простых информационных до сложных многоуровневых экосистем с оплатой.",
      Component: RealtimeCodingPreviews,
      icon: "MessageCircle",
    },
    {
      title: "Веб‑разработка.",
      description: "Сайты, панели управления, личные кабинеты и SaaS-платформы под ключ.",
      Component: OneClickIntegrationsIllustration,
      icon: "Globe",
    },
    {
      title: "Игры.",
      description: "Симуляторы, псевдо‑3D механики, публикация в RuStore и Google Play.",
      Component: MCPConnectivityIllustration,
      icon: "Gamepad2",
      badge: "Planet Builder Mini",
    },
    {
      title: "Дизайн и брендинг.",
      description: "Логотипы, фирменный стиль, UI-кит и карточки для соцсетей.",
      Component: ParallelCodingAgents,
      icon: "Palette",
    },
    {
      title: "Документация.",
      description: "ТЗ, EULA, архитектура систем, технические спецификации и регламенты.",
      Component: EasyDeployment,
      icon: "FileText",
    },
  ]

  return (
    <section id="features-section" className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Полный цикл цифровой разработки
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Один исполнитель — все задачи. AI‑агенты, боты, игры, веб-сервисы, дизайн и документация в одном месте.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}