export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Shipping Cost Leak Detector
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Stop Overpaying Your{' '}
          <span className="text-[#58a6ff]">Shipping Carriers</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your shipping invoices and carrier contracts. We automatically detect overcharges, billing errors, and missed refund opportunities — so you get money back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Auditing — $19/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required for trial</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { stat: '4.2%', label: 'Average overcharge rate found' },
            { stat: '$1,840', label: 'Avg monthly savings recovered' },
            { stat: '< 2 min', label: 'Time to first audit result' }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-[#161b22] border-y border-[#30363d] py-14">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '📄', title: 'Invoice Parsing', desc: 'Upload CSV or PDF invoices from UPS, FedEx, USPS, and DHL.' },
            { icon: '🔍', title: 'Contract Matching', desc: 'We compare every charge against your negotiated carrier rates.' },
            { icon: '💰', title: 'Refund Claims', desc: 'Auto-generate dispute letters for overcharges ready to send.' }
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-3">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 shadow-lg shadow-[#58a6ff]/5">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited invoice uploads',
              'All major carriers supported',
              'Automated refund claim letters',
              'Savings dashboard & history',
              'Email support'
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which carriers are supported?',
              a: 'We support UPS, FedEx, USPS, and DHL invoice formats. More carriers are added regularly.'
            },
            {
              q: 'How do I upload my carrier contract?',
              a: 'After subscribing, you upload your contract PDF or paste your negotiated rate table. We extract the rates automatically.'
            },
            {
              q: 'What if I find no overcharges?',
              a: "That's great news! But most accounts have at least some billing errors. If you find nothing, you owe nothing extra — the $19/mo covers unlimited audits."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        © {new Date().getFullYear()} ShipAudit. All rights reserved.
      </footer>
    </main>
  )
}
