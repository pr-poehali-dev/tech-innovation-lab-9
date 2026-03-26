export function SocialProof() {
  const stats = [
    { value: "50+", label: "проектов выполнено" },
    { value: "3+", label: "года разработки" },
    { value: "100%", label: "кастомные решения" },
  ]

  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-10 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Самозанятый разработчик · Удомля · ИНН 691643385874
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center items-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <span className="text-foreground text-5xl font-semibold leading-tight">{stat.value}</span>
            <span className="text-muted-foreground text-sm font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}