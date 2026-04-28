import React from "react";
import { Link } from "react-router-dom";

const TOPIC_QUERIES = {
  all: {
    label: "All Threats",
    query:
      '(cybersecurity OR ransomware OR malware OR "data breach" OR phishing OR "zero-day")',
  },
  breaches: {
    label: "Breaches",
    query: '("data breach" OR exfiltration OR leak OR compromised)',
  },
  vulnerabilities: {
    label: "Vulnerabilities",
    query: '("zero-day" OR vulnerability OR CVE OR exploit)',
  },
  ransomware: {
    label: "Ransomware",
    query: "(ransomware OR extortion malware)",
  },
};

const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

function formatPublishedAt(value) {
  if (!value) {
    return "Recently published";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Recently published";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export default function Blog() {
  const [topic, setTopic] = React.useState("all");
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [lastUpdated, setLastUpdated] = React.useState(null);

  const fetchHeadlines = React.useCallback(async (activeTopic) => {
    const apiKey = import.meta.env.VITE_GNEWS_API_KEY;

    if (!apiKey) {
      setError(
        "Add VITE_GNEWS_API_KEY to your .env file to load live cybersecurity headlines."
      );
      setArticles([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        q: TOPIC_QUERIES[activeTopic].query,
        lang: "en",
        max: "9",
        in: "title,description",
        apikey: apiKey,
      });

      const response = await fetch(
        `https://gnews.io/api/v4/search?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setArticles(Array.isArray(data.articles) ? data.articles : []);
      setLastUpdated(new Date());
    } catch (fetchError) {
      setArticles([]);
      setError(
        fetchError instanceof Error
          ? fetchError.message
          : "Unable to load headlines right now."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchHeadlines(topic);

    const timer = window.setInterval(() => {
      fetchHeadlines(topic);
    }, REFRESH_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [fetchHeadlines, topic]);

  return (
    <section className="portfolio-page-shell px-6 pb-20 pt-44 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--seal-gold)]">
              Cybersecurity Blog
            </p>
            <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              <span className="bg-gradient-to-r from-[var(--seal-gold)] via-[var(--ethereal-ivory)] to-[var(--seal-gold)] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(194,145,44,0.25)]">
                20+ Years of Leadership.
              </span>
              <br />
              <span className="text-[var(--ethereal-ivory)]">Re-engineered for the Digital Age.</span>
            </h1>
            <div className="mt-5 h-[3px] w-32 rounded-full bg-gradient-to-r from-[var(--seal-gold)] to-transparent" />
            <p className="mt-5 max-w-3xl text-lg leading-8 tracking-widest text-[rgba(247,235,224,0.92)]">
              <span className="opacity-90">Building Infrastructure</span>
              <span className="mx-2 text-[var(--seal-gold)]">&mdash;</span>
              <span className="opacity-90">From Physical Systems to Networks to</span>
              <span className="ml-2 font-semibold text-[var(--seal-gold)] drop-shadow-[0_0_8px_rgba(194,145,44,0.45)]">
                Cybersecurity
              </span>
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
              I bring 20+ years of experience leading complex, real-world operations into Information Technology. After building and scaling a construction company alongside a real estate brokerage, I transitioned into IT through hands-on experience in a high-volume, AWS-integrated environment at Amazon&mdash;which led me to complete both a Bachelor&rsquo;s and Master&rsquo;s degree in Information Technology.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
              Now, I apply that foundation to designing, securing, and optimizing systems focused on reliability, performance, and scalability.
            </p>
          </div>

          <div className="glass rounded-[24px] px-5 py-4 text-sm text-[var(--muted-ivory)]">
            <div>
              Last updated:{" "}
              <span className="text-[var(--ethereal-ivory)]">
                {lastUpdated
                  ? lastUpdated.toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                    })
                  : "Waiting for first refresh"}
              </span>
            </div>
            <button
              type="button"
              onClick={() => fetchHeadlines(topic)}
              className="mt-3 rounded-full border border-[var(--soft-ivory)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--seal-gold)] transition hover:border-[var(--seal-gold)] hover:text-white"
            >
              Refresh now
            </button>
          </div>
        </div>

        <div className="glass mb-8 rounded-[26px] border-l-4 border-l-[var(--deep-crimson)] p-6 md:p-7">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--seal-gold)]">
            Under Construction
          </div>
          <h2 className="font-display mt-3 text-2xl font-semibold text-[var(--ethereal-ivory)] md:text-3xl">
            A more polished cyber news experience is on the way.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted-ivory)] md:text-base">
            This page is still being refined to better match the rest of the
            portfolio experience. The live headline engine and topic filters are
            already in place, but the final presentation, editorial framing,
            and richer interactions are still in progress.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {Object.entries(TOPIC_QUERIES).map(([key, value]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTopic(key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                topic === key
                  ? "border-[var(--seal-gold)] bg-[var(--seal-gold)] text-[var(--velvet-obsidian)]"
                  : "border-[var(--soft-ivory)] bg-[rgba(247,235,224,0.04)] text-[var(--muted-ivory)] hover:border-[var(--seal-gold)] hover:text-white"
              }`}
            >
              {value.label}
            </button>
          ))}
        </div>

        {error ? (
          <div className="glass mb-8 rounded-[26px] border-l-4 border-l-[var(--deep-crimson)] p-6">
            <p className="text-sm leading-7 text-[var(--ethereal-ivory)]">
              {error}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted-ivory)]">
              After you create a GNews API key, add it to `.env` as
              `VITE_GNEWS_API_KEY=your_key_here`.
            </p>
          </div>
        ) : null}

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="glass animate-pulse rounded-[26px] p-6"
              >
                <div className="mb-4 h-4 w-28 rounded bg-[rgba(247,235,224,0.08)]" />
                <div className="mb-3 h-7 rounded bg-[rgba(247,235,224,0.1)]" />
                <div className="mb-2 h-4 rounded bg-[rgba(247,235,224,0.08)]" />
                <div className="h-4 w-4/5 rounded bg-[rgba(247,235,224,0.08)]" />
              </div>
            ))}
          </div>
        ) : null}

        {!loading && !error ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <article key={article.url} className="glass rounded-[26px] p-6">
                <div className="mb-4 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-[var(--seal-gold)]">
                  <span>{article.source?.name || "Security Source"}</span>
                  <span className="text-[var(--muted-ivory)]">
                    {formatPublishedAt(article.publishedAt)}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-semibold leading-snug text-[var(--ethereal-ivory)]">
                  {article.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted-ivory)]">
                  {article.description || "Open the source article to read more."}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[var(--seal-gold)] px-4 py-2 text-sm font-semibold text-[var(--seal-gold)] transition hover:bg-[var(--seal-gold)] hover:text-[var(--velvet-obsidian)]"
                  >
                    Read article
                  </a>
                  <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted-ivory)]">
                    Live feed
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {!loading && !error && articles.length === 0 ? (
          <div className="glass rounded-[26px] p-6 text-sm leading-7 text-[var(--muted-ivory)]">
            No articles matched the current topic. Try another filter or refresh
            the feed.
          </div>
        ) : null}

        <footer className="mt-16 flex flex-col gap-3 border-t border-[var(--soft-ivory)] pt-8 text-sm text-[var(--muted-ivory)] md:flex-row md:items-center md:justify-between">
          <span>
            Intended for `blog.nickcoury.co` or the `/blog` route on your main
            portfolio.
          </span>
          <Link
            to="/"
            className="font-display text-[var(--seal-gold)] transition hover:text-white"
          >
            Return to portfolio
          </Link>
        </footer>
      </div>
    </section>
  );
}
