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
    <section className="min-h-screen px-6 pt-28 pb-20 text-white hero-bg">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--seal-gold)]">
              Cybersecurity Blog
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-[var(--ethereal-ivory)] md:text-6xl">
              Live threat headlines, signals, and security reading in one place.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-ivory)]">
              This feed updates automatically using the GNews API and highlights
              current cybersecurity stories across breaches, ransomware,
              vulnerabilities, and emerging threats.
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
