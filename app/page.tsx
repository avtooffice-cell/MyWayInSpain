export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="border-b border-veris-line">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-veris-red rounded flex items-center justify-center text-white font-bold text-lg">V</div>
            <span className="text-xl font-extrabold text-veris-ink">Veris</span>
          </a>
          <div className="flex items-center gap-3">
            <select className="text-sm font-semibold border border-veris-line rounded-lg px-3 py-2 bg-white text-veris-body">
              <option>UK</option>
              <option>RU</option>
              <option>EN</option>
            </select>
            <button className="bg-veris-red hover:bg-veris-redDark text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors">
              Перевірити
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-veris-soft">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-veris-red font-bold mb-4">Не сам. Не навмання.</p>
          <h1 className="text-5xl font-extrabold text-veris-ink leading-tight mb-6 max-w-2xl">
            Твій провідник у фінансовій системі Іспанії — твоєю мовою
          </h1>
          <p className="text-lg text-veris-body mb-8 max-w-md">
            Дізнайся за 5 хвилин, на яке фінансування чи грант ти реально можеш претендувати.
          </p>
          <button className="bg-veris-red hover:bg-veris-redDark text-white font-bold px-7 py-3.5 rounded-lg transition-colors">
            Почати безкоштовний скоринг
          </button>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-veris-ink mb-10">Що тобі потрібно?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-veris-line rounded-2xl p-6">
            <h3 className="text-lg font-bold text-veris-ink mb-2">Фізичні особи</h3>
            <p className="text-sm text-veris-body mb-6">Споживчі кредити, автокредити та інші популярні форми.</p>
            <button className="w-full border border-veris-red text-veris-red hover:bg-veris-red hover:text-white font-bold px-5 py-2.5 rounded-lg transition-colors">
              Перевірити
            </button>
          </div>
          <div className="border-2 border-veris-red rounded-2xl p-6 relative">
            <span className="absolute -top-3 left-6 bg-veris-red text-white text-xs font-bold px-3 py-1 rounded-md">Пріоритет</span>
            <h3 className="text-lg font-bold text-veris-ink mb-2 mt-2">Autónomo / МСП</h3>
            <p className="text-sm text-veris-body mb-6">Ведеш бізнес в Іспанії? Підберемо інструменти фінансування.</p>
            <button className="w-full bg-veris-red hover:bg-veris-redDark text-white font-bold px-5 py-2.5 rounded-lg transition-colors">
              Перевірити
            </button>
          </div>
          <div className="border border-veris-line rounded-2xl p-6">
            <h3 className="text-lg font-bold text-veris-ink mb-2">Гранти та інвестиції</h3>
            <p className="text-sm text-veris-body mb-6">Перевіримо, на які субсидії та програми ти можеш претендувати.</p>
            <button className="w-full border border-veris-red text-veris-red hover:bg-veris-red hover:text-white font-bold px-5 py-2.5 rounded-lg transition-colors">
              Перевірити
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-veris-footerBg text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm text-gray-300">© 2026 Veris Consulting. Скоринг є попередньою оцінкою.</p>
        </div>
      </footer>
    </main>
  )
}
