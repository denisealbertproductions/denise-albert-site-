export default function DeniseAlbertWebsite() {
  const featuredAs = [
    "Media Executive",
    "Journalist",
    "Producer",
    "Speaker",
    "Health Advocate",
  ];

  const stats = [
    { label: "Years in media", value: "25+" },
    { label: "Major platforms", value: "National" },
    { label: "Focus", value: "Storytelling + Impact" },
  ];

  const pillars = [
    {
      title: "Media & Journalism",
      text: "From national broadcast production to live editorial storytelling, Denise has built a career creating trusted, high-impact content for broad audiences.",
    },
    {
      title: "Speaking & Moderation",
      text: "A compelling on-stage presence for conversations around media, women’s leadership, health, family, resilience, and mission-driven storytelling.",
    },
    {
      title: "Advocacy & Impact",
      text: "Through cancer advocacy and community building, Denise brings empathy, clarity, and momentum to initiatives that support real people in real life.",
    },
  ];

  const featuredWork = [
    {
      role: "Co-Founder",
      org: "My Cancer Family",
      years: "2021–2025",
      description:
        "Built a digital support platform and community focused on helping cancer patients and families navigate the non-medical side of diagnosis, treatment, and survivorship.",
    },
    {
      role: "Producer",
      org: "David Blaine Live in Las Vegas",
      years: "2023–Present",
      description:
        "Leads media strategy, VIP relations, interviews, press coordination, and promotional opportunities around a major live entertainment residency.",
    },
    {
      role: "Co-Founder & President",
      org: "The MOMS Network, Inc.",
      years: "2009–2021",
      description:
        "Co-created and scaled a national lifestyle brand spanning live events, television, radio, celebrity town halls, editorial content, and brand partnerships.",
    },
    {
      role: "Executive Producer & Director of Development",
      org: "David Blaine Productions",
      years: "2005–2010",
      description:
        "Produced network specials, helped shape development strategy, and managed talent, partnerships, teams, and budgets across high-visibility projects.",
    },
  ];

  const logos = [
    "ABC News",
    "Good Morning America",
    "Inside Edition",
    "People TV",
    "SiriusXM",
    "WPIX-TV",
    "Good Housekeeping",
    "HuffPost",
  ];

  const recognitions = [
    "2024 Impact Award — Cancer Support Community NYNJCT",
    "2017 Surviving With Impact Award — Susan G. Komen",
    "Gracie Award Winner",
    "Exceptional Merit Media Award",
  ];

  const speakingTopics = [
    "Women in media and entrepreneurship",
    "Cancer survivorship and support",
    "Storytelling that builds community",
    "Moderating high-profile live conversations",
    "Brand building with purpose",
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-slate-900">
      <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-[#f7eee9] via-[#fcfaf8] to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,24,93,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.10),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <header className="flex items-center justify-between">
            <div className="text-lg font-semibold tracking-wide">Denise Albert</div>
            <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
              <a href="#about" className="transition hover:text-slate-950">About</a>
              <a href="#work" className="transition hover:text-slate-950">Work</a>
              <a href="#speaking" className="transition hover:text-slate-950">Speaking</a>
              <a href="#contact" className="transition hover:text-slate-950">Contact</a>
            </nav>
          </header>

          <div className="grid items-center gap-12 py-14 lg:grid-cols-[1.15fr_.85fr] lg:py-20">
            <div>
              <div className="mb-6 inline-flex flex-wrap gap-2">
                {featuredAs.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-medium text-rose-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-slate-950 md:text-7xl">
                A trusted voice in media, storytelling, live events, and advocacy.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Denise Albert is a journalist, producer, entrepreneur, and speaker known for building
                meaningful media platforms, creating high-impact live experiences, and championing
                mission-driven work that connects with audiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5"
                >
                  Book Denise
                </a>
                <a
                  href="#work"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore Work
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                    <div className="text-2xl font-semibold text-slate-950">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-2xl shadow-rose-100">
                <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white">
                  <p className="text-sm uppercase tracking-[0.24em] text-rose-200">Featured Profile</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                    Journalism with heart. Production with purpose.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/75">
                    Denise’s work spans broadcast media, celebrity-driven live events, women’s leadership,
                    cancer advocacy, and modern storytelling rooted in trust and connection.
                  </p>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f8f3ef] p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Based In</p>
                    <p className="mt-2 text-xl font-semibold">New York City</p>
                  </div>
                  <div className="rounded-2xl bg-[#f8f3ef] p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Available For</p>
                    <p className="mt-2 text-xl font-semibold">Speaking, media, partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600">About Denise</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Building platforms, conversations, and communities that matter.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Denise Albert has built a multifaceted career at the intersection of journalism,
              production, entrepreneurship, and advocacy. She has produced national television,
              launched media brands, led live events, and created mission-forward communities that help people feel seen and supported.
            </p>
            <p>
              Her perspective is especially powerful because it combines editorial instincts,
              on-camera fluency, audience understanding, partnership strategy, and lived experience.
              The result is work that feels elevated, credible, and deeply human.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">Selected Platforms</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Experience across recognized media brands and audience platforms.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {logos.map((name) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-lg font-medium text-white/90 backdrop-blur">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600">Selected Work</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Signature roles across media, entrepreneurship, and live production.
          </h2>
        </div>

        <div className="mt-12 grid gap-6">
          {featuredWork.map((item) => (
            <div
              key={`${item.org}-${item.years}`}
              className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.years}</p>
                <p className="mt-3 text-xl font-semibold text-slate-950">{item.role}</p>
                <p className="mt-1 text-base text-rose-600">{item.org}</p>
              </div>
              <p className="text-base leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="speaking" className="border-y border-slate-200 bg-[#f8f4f1]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600">Recognition</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">Awards & honors</h3>
              <div className="mt-6 space-y-4">
                {recognitions.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600">Speaking</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">Popular topics</h3>
              <div className="mt-6 space-y-4">
                {speakingTopics.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl shadow-slate-200">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">Contact</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  For speaking, media, live events, and partnership opportunities.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                  Denise collaborates with brands, media platforms, conferences, nonprofits, and mission-driven organizations.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Email</p>
                <a
                  href="mailto:denisealbertproductions@gmail.com"
                  className="mt-2 block break-all text-xl font-semibold text-white"
                >
                  denisealbertproductions@gmail.com
                </a>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/50">Phone</p>
                <p className="mt-2 text-xl font-semibold text-white">917.509.6781</p>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/50">Location</p>
                <p className="mt-2 text-xl font-semibold text-white">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
