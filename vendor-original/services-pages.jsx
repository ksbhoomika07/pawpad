/* services-pages.jsx — Courses, Boarding, Myotherapy */

const { useState: useStateP } = React;

/* ============ COURSES ============ */
const COURSE_LIST = [
  {
    key: "foundation-grooming",
    title: "Foundation Course in Grooming",
    price: "₹95,000",
    priceNum: 95000,
    duration: "7 weeks",
    knowMoreUrl: "course-foundations.html",
    enrollUrl: "enroll-foundations.html",
    desc: "A 7-week foundation-level grooming certification for complete beginners building toward a professional grooming career with both dogs and cats. Learn consent-based handling, anatomy, stress signals, bathing, coat care, scissoring, and clipping without restraint or force.",
    for: "Complete beginners building toward a professional grooming career with both dogs and cats.",
    learn: "Consent-based handling, canine and feline anatomy, stress signals, bathing, coat care, scissoring, and clipping without restraint or force."
  },
  {
    key: "essentials-dog-grooming",
    title: "Essentials Dog Grooming",
    price: "₹30,000",
    priceNum: 30000,
    duration: "5 days",
    knowMoreUrl: "course-essentials-dog.html",
    enrollUrl: "enroll-essentials-dog.html",
    desc: "A fast, 5-day hands-on introduction to professional dog grooming for complete beginners. Work directly with live dogs from day one under expert supervision to learn bathing, drying, brushing, ear cleaning, and coat-care fundamentals.",
    for: "Complete beginners looking for a fast, practical introduction to canine grooming.",
    learn: "Live dog handling, bathing, drying, brushing, ear cleaning, and coat-care fundamentals under expert supervision."
  },
  {
    key: "essentials-cat-grooming",
    title: "Essentials Cat Grooming",
    price: "₹30,000",
    priceNum: 30000,
    duration: "5 days",
    knowMoreUrl: "course-essentials-cat.html",
    enrollUrl: "enroll-essentials-cat.html",
    desc: "A 5-day hands-on introductory course covering feline-specific grooming and handling techniques. Build entry-level competence in cat body language, bathing, drying, brushing, de-matting, and ear care under close instructor guidance.",
    for: "Beginners wanting specialised feline handling and grooming basics.",
    learn: "Cat body language, low-stress handling, bathing, drying, brushing, de-matting, and ear care under close instructor guidance."
  },
  {
    key: "practitioner-dog-grooming",
    title: "Practitioner Dog Grooming",
    price: "₹50,000",
    priceNum: 50000,
    duration: "3 weeks",
    knowMoreUrl: "course-practitioner-dog.html",
    enrollUrl: "enroll-practitioner-dog.html",
    desc: "A 3-week practitioner-level programme designed to build industry-ready technical grounding in canine grooming. Master bathing and coat care, advance to live-dog nail trimming and hygiene clipping, and practice full scissoring techniques on training models.",
    for: "Groomers and serious beginners seeking industry-ready canine grooming proficiency.",
    learn: "Bathing, coat care, live-dog nail trimming, hygiene clipping, and full scissoring techniques on training models."
  },
  {
    key: "practitioner-cat-grooming",
    title: "Practitioner Cat Grooming",
    price: "₹50,000",
    priceNum: 50000,
    duration: "3 weeks",
    knowMoreUrl: "course-practitioner-cat.html",
    enrollUrl: "enroll-practitioner-cat.html",
    desc: "An intensive 3-week practitioner course providing hands-on feline grooming mastery. Progress from bathing and coat care to live nail trimming, hygiene clipping, and full haircuts performed directly on live cats.",
    for: "Groomers and serious beginners seeking intensive feline grooming mastery.",
    learn: "Bathing, coat care, live nail trimming, hygiene clipping, and full haircuts performed directly on live cats."
  }
];

function CoursesHero() {
  return (
    <section className="c-hero">
      <div className="container c-hero-grid">
        <div>
          <p className="eyebrow reveal in">Pawpad courses</p>
          <h1 className="h-display reveal in c-course-title" style={{ marginTop: 24, maxWidth: "18ch" }}>
            Become a Professional <em className="italic" style={{ color: "var(--driftwood)", whiteSpace: "nowrap" }}>Pet Groomer</em>
          </h1>
          <p className="lead reveal in" style={{ marginTop: 28, maxWidth: "58ch" }}>
            A hands-on grooming course designed for animal lovers looking to build the skills, confidence, and practical experience needed to start a career in pet grooming.
          </p>
          <p className="reveal in" style={{ marginTop: 18, maxWidth: "62ch" }}>
            Learn dog grooming, cat grooming, handling techniques, coat care, hygiene, safety, and business fundamentals through personalised training with experienced professionals.
          </p>
        </div>
        <div className="c-hero-image reveal in"><img src="assets/img/pawpad/courses-cover-new.webp" alt="Pawpad grooming course" fetchpriority="high" decoding="async" /></div>
      </div>
      <style>{`
        .c-hero { padding: 180px 0 60px; }
        .c-hero-grid { display: grid; grid-template-columns: 1.05fr .9fr; gap: 64px; align-items: center; }
        .c-hero-image { background: transparent; }
        .c-hero-image img { width: 100%; height: auto; display: block; object-fit: contain; }
        @media (max-width: 900px) { .c-hero-grid { grid-template-columns: 1fr; gap: 34px; } .c-course-title em { white-space: normal !important; } }
      `}</style>
    </section>
  );
}

function CourseCards({ onBook }) {
  return (
    <section className="course-cards">
      <div className="container">
        <div className="cc-head reveal">
          <p className="eyebrow">COURSE OVERVIEW</p>
          <h2 className="h-1" style={{ marginTop: 18, maxWidth: "22ch" }}>
            Hands-on training in <em className="italic" style={{ color: "var(--driftwood)" }}>conscious grooming</em>
          </h2>
        </div>
        <div className="cc-grid">
          {COURSE_LIST.map((c, i) => (
            <article key={c.key} className="cc-card reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <h3 className="cc-card-title">{c.title}</h3>
              <div className="cc-card-price">{c.price}</div>
              <p className="cc-card-desc">{c.desc}</p>
              <div className="cc-card-actions">
                <a
                  href={c.knowMoreUrl}
                  className="btn-know-more"
                >
                  Know More
                </a>
                <a
                  href={c.enrollUrl}
                  className="btn-enroll-now"
                >
                  Enroll Now <span className="btn-arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .course-cards { background: var(--cream-bg); padding: 40px 0 80px; }
        .cc-head { margin-bottom: 48px; max-width: 720px; }
        .cc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .cc-card {
          background: var(--white);
          border-radius: 24px;
          padding: 36px 30px 32px;
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease);
        }
        body[data-palette="dark"] .cc-card {
          background: color-mix(in oklab, var(--champagne), black 5%);
          border-color: color-mix(in oklab, var(--champagne), transparent 85%);
        }
        .cc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 48px -24px color-mix(in oklab, var(--ink), transparent 70%);
        }
        .cc-card-title {
          font-family: var(--f-display);
          font-size: 22px;
          font-weight: 500;
          color: var(--ink);
          line-height: 1.25;
          margin: 0 0 12px;
        }
        .cc-card-price {
          font-family: var(--f-display);
          font-size: 24px;
          color: var(--driftwood);
          font-weight: 400;
          margin: 0 0 20px;
        }
        .cc-card-desc {
          font-family: var(--f-body);
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin: 0 0 32px;
          flex: 1;
        }
        .cc-card-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          flex-wrap: wrap;
        }
        .btn-know-more {
          font-family: var(--f-body);
          font-size: 13.5px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 9999px;
          background: transparent;
          color: var(--ink);
          border: 1.5px solid color-mix(in oklab, var(--ink), transparent 70%);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all var(--t-fast) var(--ease);
        }
        .btn-know-more:hover {
          background: var(--champagne-soft);
          border-color: var(--ink);
          color: var(--ink);
          text-decoration: none;
        }
        body[data-palette="dark"] .btn-know-more {
          border-color: color-mix(in oklab, var(--champagne), transparent 50%);
          color: var(--champagne);
        }
        body[data-palette="dark"] .btn-know-more:hover {
          background: color-mix(in oklab, var(--champagne), transparent 85%);
          border-color: var(--champagne);
          color: var(--champagne);
          text-decoration: none;
        }
        .btn-enroll-now {
          font-family: var(--f-body);
          font-size: 13.5px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 9999px;
          background: var(--ink);
          color: var(--white);
          border: 1.5px solid var(--ink);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all var(--t-fast) var(--ease);
        }
        .btn-enroll-now:hover {
          background: var(--driftwood);
          border-color: var(--driftwood);
          color: var(--white);
          transform: translateX(2px);
        }
        .btn-arrow {
          font-size: 15px;
          transition: transform var(--t-fast) var(--ease);
        }
        .btn-enroll-now:hover .btn-arrow {
          transform: translateX(3px);
        }
        @media (max-width: 980px) {
          .cc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cc-grid { grid-template-columns: 1fr; }
          .cc-card { padding: 28px 22px 24px; }
          .cc-card-actions { flex-direction: column; align-items: stretch; }
          .btn-know-more, .btn-enroll-now { justify-content: center; text-align: center; }
        }
      `}</style>
    </section>
  );
}

function CredibilityStrip() {
  return (
    <section className="cred">
      <div className="container">
        <div className="cred-grid">
          <div className="cred-text reveal">
            <p className="eyebrow">Why Learn With Pawpad?</p>
            <h2 className="h-1" style={{ marginTop: 18, maxWidth: "16ch" }}>
              Learn directly <em className="italic" style={{ color: "var(--driftwood)" }}>from Leena</em>
            </h2>
            <p style={{ marginTop: 28, maxWidth: "56ch" }}>Learn directly from Leena Munikempanna, founder of Pawpad and a professional groomer with over a decade of industry experience. Students benefit not only from technical grooming knowledge, but also from Pawpad's philosophy of behaviour-led, compassionate animal care.</p>
            <ul className="cred-bullets">
              <li><strong>Learn through real-world experience.</strong> Training combines theory with practical, hands-on grooming experience alongside professional groomers.</li>
              <li><strong>Small batches, personalised attention.</strong> A maximum of two students at a time allows for focused guidance and personalised feedback.</li>
              <li><strong>Train in both dogs and cats.</strong> Pawpad offers the opportunity to learn both canine and feline grooming for a broader professional skill set.</li>
              <li><strong>Leena's qualifications.</strong> Certified Master Cat Groomer (PCGAA), PetCPR+ Certified, Certified Canine Esthetician, and Certified Coat Expert.</li>
            </ul>
          </div>
          <div className="cred-images reveal">
            <div className="cred-portrait blob-1"><img src="assets/img/pawpad/courses-learn-from-leena.png" alt="Leena Munikempanna, founder of Pawpad" /></div>
          </div>
        </div>
      </div>
      <style>{`
        .cred { background: var(--champagne-soft); }
        .cred-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .cred-bullets { list-style: none; padding: 0; margin: 28px 0 0; display: flex; flex-direction: column; gap: 14px; }
        .cred-bullets li { padding-left: 24px; position: relative; font-size: 15px; line-height: 1.65; }
        .cred-bullets li::before { content: ""; position: absolute; left: 0; top: 11px; width: 12px; height: 1px; background: var(--driftwood); }
        .cred-bullets strong { color: var(--ink); font-weight: 600; }
        .cred-images { position: relative; display: flex; align-items: center; }
        .cred-portrait { width: 100%; }
        .cred-portrait img { width: 100%; height: auto; display: block; object-fit: contain; }
        @media (max-width: 900px) { .cred-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
    </section>
  );
}

function CoursesPage({ onBook }) {
  useReveal();
  return (
    <div className="page-enter">
      <CoursesHero />
      <CourseCards onBook={onBook} />
      <CredibilityStrip />
      <StudentTestimonials />
      <CourseCTA onBook={onBook} />
    </div>
  );
}

function StudentTestimonials() {
  const testimonials = [
    {
      name: "Bhavya Srinivas",
      studio: "Woof Magic Spa",
      quote: "Thank you so much Leena for the great experience you gave me on my new journey. I feel very confident in the fundamental work and I learned so much about handling pets with different temperaments, especially cats.",
    },
    {
      name: "Clare Pachuau",
      studio: "A Tiny Groomer",
      quote: "I highly recommend the Pawpad Grooming Studio Academy to all prospective groomers. The instructor's knowledge, skills, experience, and expertise gave me a curriculum that exceeded my expectations.",
    },
    {
      name: "Deeksha Shetty",
      studio: "The Purple Pawlor",
      quote: "Leena's approach to pet grooming is always comfort and well-being first. Working with Pawpad helped me understand animal body language and shaped the way I care for every pet in my own business.",
    },
    {
      name: "Sanchari Mukherjee",
      studio: "The Bubble Bath",
      quote: "Training under Leena was a transformative experience. She taught grooming techniques while always stressing the comfort and well-being of the pets under our care.",
    },
    {
      name: "Renjitha",
      studio: "Earthy Paws",
      quote: "Magic happened here and my life changed forever. Pawpad is highly recommended for anyone interested in starting their career as a groomer.",
    },
  ];
  return (
    <section className="student-testimonials">
      <div className="container">
        <div className="st-head reveal">
          <p className="eyebrow">Student Testimonials</p>
          <h2 className="h-1" style={{ marginTop: 18, maxWidth: "18ch" }}>What students carry forward</h2>
        </div>
        <div className="st-grid">
          {testimonials.map((item, i) => (
            <article key={item.name} className="st-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <p>{item.quote}</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.studio}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .student-testimonials { background: var(--cream-bg); }
        .st-head { margin-bottom: 44px; }
        .st-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .st-card {
          background: var(--white);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-height: 280px;
        }
        .st-card p { margin: 0; font-size: 16px; line-height: 1.7; color: var(--ink-soft); }
        .st-card strong { display: block; color: var(--ink); }
        .st-card span { display: block; margin-top: 4px; color: var(--driftwood); font-size: 14px; }
        @media (max-width: 1000px) { .st-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 680px) { .st-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function CourseCTA({ onBook }) {
  const [form, setForm] = useStateP({ name: '', email: '', phone: '' });
  const [sent, setSent] = useStateP(false);
  const upd = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email && !form.phone) return;
    window.hsSubmit && window.hsSubmit('courses', form);
    setSent(true);
  };

  return (
    <section className="course-cta">
      <div className="container">
        <div className="course-cta-inner reveal">
          <div>
            <p className="eyebrow">Course Enquiry</p>
            <h2 className="h-1" style={{ marginTop: 18, maxWidth: "18ch" }}>Ready to Start Your Grooming Journey?</h2>
            <p className="lead" style={{ marginTop: 24, maxWidth: "58ch" }}>
              Courses run on a rolling basis throughout the year. Leave your details and we'll help you find the right start date for your training.
            </p>
          </div>
          {sent ? (
            <div className="course-form-sent">
              <PawIcon size={44} color="var(--driftwood)" />
              <h3 className="h-2" style={{ margin: '16px 0 8px' }}>We'll be in touch soon</h3>
              <p style={{ margin: 0, color: 'var(--ink-mute)', fontSize: 15, lineHeight: 1.6 }}>The Pawpad team will reach out with course dates and batch availability.</p>
            </div>
          ) : (
            <form className="course-form" onSubmit={handleSubmit}>
              <div className="field"><label>Name</label><input value={form.name} onChange={upd('name')} placeholder="Your name" /></div>
              <div className="field"><label>Email</label><input type="email" value={form.email} onChange={upd('email')} placeholder="you@example.com" /></div>
              <div className="field"><label>Phone</label><input type="tel" value={form.phone} onChange={upd('phone')} placeholder="96630 77496" /></div>
              <button className="btn btn-primary" type="submit">Register interest <Arrow /></button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        .course-cta { background: var(--cream-bg); }
        .course-cta-inner {
          padding: 48px;
          border-radius: 24px;
          background: var(--champagne-soft);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          display: grid;
          grid-template-columns: 1fr minmax(280px, 420px);
          gap: 42px;
          align-items: center;
        }
        .course-form { display: grid; gap: 16px; }
        .course-form .btn { margin-top: 8px; justify-content: center; }
        .course-form-sent { display: flex; flex-direction: column; }
        @media (max-width: 860px) { .course-cta-inner { grid-template-columns: 1fr; padding: 30px; } }
      `}</style>
    </section>
  );
}

function ComingSoonPage({ eyebrow, title, body, serviceKey, onBook }) {
  useReveal();
  return (
    <div className="page-enter">
      <section className="soon-page">
        <div className="container soon-grid">
          <div>
            <p className="eyebrow reveal in">{eyebrow}</p>
            <h1 className="h-display reveal in" style={{ marginTop: 24, maxWidth: "14ch" }}>
              Coming <em className="italic" style={{ color: "var(--driftwood)" }}>Soon</em>
            </h1>
            <p className="lead reveal in" style={{ marginTop: 28, maxWidth: "54ch" }}>{body}</p>
            <button className="btn btn-primary reveal in" style={{ marginTop: 32 }} onClick={() => onBook(serviceKey)}>Enquire <Arrow /></button>
          </div>
          <div className="soon-img reveal in">
            <div className="blob-2"><img src="assets/img/8.jpg" alt={title} /></div>
          </div>
        </div>
        <style>{`
          .soon-page { padding: 180px 0 80px; }
          .soon-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
          .soon-img .blob-2 { aspect-ratio: 1/1; overflow: hidden; background: var(--eagle); animation: morph2 16s ease-in-out infinite alternate; }
          body[data-motion="still"] .soon-img .blob-2 { animation: none; }
          .soon-img img { width: 100%; height: 100%; object-fit: cover; }
          @media (max-width: 900px) { .soon-grid { grid-template-columns: 1fr; gap: 36px; } }
        `}</style>
      </section>
    </div>
  );
}

/* ============ BOARDING ============ */
const BOARDING_FEATURES = [
  { t: "Small group, max 4 dogs", d: "We host a tiny number of guests at a time. Quieter spaces, more attention." },
  { t: "Photo updates twice daily", d: "Morning and evening — you'll always see how they're settling." },
  { t: "Trial day before stays", d: "A short day-stay first to make sure your pet is happy here." },
  { t: "Vet on call 24/7", d: "Partnered with a local vet for anything urgent, day or night." },
  { t: "Daily enrichment", d: "Walks, sniffaris, gentle play — not just kennel time." },
  { t: "Calm-only policy", d: "We won't board dogs who clash with our resident guests. Their comfort comes first." },
];

function BoardingHero({ onBook }) {
  return (
    <section className="b-hero">
      <div className="container b-hero-grid">
        <div>
          <p className="eyebrow reveal in">Boarding</p>
          <h1 className="h-display reveal in" style={{ marginTop: 24, maxWidth: "15ch" }}>
            A second home, when ours <em className="italic" style={{ color: "var(--driftwood)" }}>can't be</em>
          </h1>
          <p className="lead reveal in" style={{ marginTop: 28, maxWidth: "54ch" }}>
            Thoughtful pet boarding designed to help dogs feel secure, relaxed, and cared for while you're away. Tiny groups. Familiar smells. Same humans every day.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
            <button className="btn btn-primary" onClick={() => onBook("boarding")}>Enquire about boarding <Arrow /></button>
            <a className="btn btn-ghost" href="#b-experience" onClick={(e) => { e.preventDefault(); document.getElementById("b-experience")?.scrollIntoView({ behavior: "smooth" }); }}>Stay experience <Arrow /></a>
          </div>
        </div>
        <div className="b-hero-img reveal in">
          <div className="blob-2"><img src="assets/img/8.jpg" alt="A relaxed pet at Pawpad boarding" /></div>
          <div className="b-hero-card">
            <span className="eyebrow" style={{ color: "var(--driftwood)" }}>From</span>
            <h3 style={{ fontFamily: "var(--f-display)", fontSize: 38, color: "var(--driftwood)", marginTop: 4 }}>₹1,200<span style={{ fontSize: 14, color: "var(--ink-mute)" }}>/night</span></h3>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--ink-mute)" }}>Discounts for week+ stays. Multi-dog families get a single calmer rate.</p>
          </div>
        </div>
      </div>
      <style>{`
        .b-hero { padding: 180px 0 60px; }
        .b-hero-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
        .b-hero-img { position: relative; aspect-ratio: 1/1; }
        .b-hero-img .blob-2 { width: 100%; height: 100%; overflow: hidden; background: var(--eagle); animation: morph2 16s ease-in-out infinite alternate; }
        body[data-motion="still"] .b-hero-img .blob-2 { animation: none; }
        .b-hero-img img { width: 100%; height: 100%; object-fit: cover; }
        .b-hero-card {
          position: absolute; left: -20px; bottom: 40px;
          background: var(--cream-bg); padding: 22px 28px; border-radius: 18px;
          max-width: 280px;
          box-shadow: 0 24px 50px -25px color-mix(in oklab, var(--ink), transparent 55%);
        }
        @keyframes morph2 {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 50% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 30% 70% 30% 70%; }
        }
        @media (max-width: 900px) { .b-hero-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
    </section>
  );
}

function BoardingExperience() {
  return (
    <section className="b-experience" id="b-experience">
      <div className="container">
        <div className="b-exp-head reveal">
          <p className="eyebrow">The stay</p>
          <h2 className="h-1" style={{ marginTop: 18, maxWidth: "22ch" }}>
            What a day at <em className="italic" style={{ color: "var(--driftwood)" }}>Pawpad boarding</em> looks like
          </h2>
        </div>
        <div className="b-timeline">
          {[
            ["07:30", "Morning walk", "A 30-minute sniff-led walk in the neighbourhood — when your dog gets to choose the route."],
            ["09:00", "Breakfast & meds", "Your pet's own food, served at their usual time. We follow your routine to the letter."],
            ["11:00", "Quiet time", "Most dogs nap. We put on soft classical music — the kind that lowers cortisol."],
            ["13:30", "Lunch & enrichment", "Lick mats, snuffle mats, puzzle feeders. Brains as tired as legs."],
            ["16:30", "Garden session", "A second outdoor stretch, small play group, lots of treats."],
            ["19:00", "Dinner & wind-down", "A second meal, calming chews, photo update sent to you."],
            ["22:00", "Bedtime", "Lights down, soft blankets, our team within earshot all night."],
          ].map(([time, title, body], i) => (
            <div key={time} className="b-step reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="b-time">{time}</span>
              <div className="b-step-dot"><PawIcon size={12} color="var(--white)" /></div>
              <div className="b-step-body">
                <h4 className="h-3">{title}</h4>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .b-experience { background: var(--champagne-soft); }
        .b-exp-head { max-width: 720px; margin-bottom: 56px; }
        .b-timeline { display: flex; flex-direction: column; gap: 0; position: relative; padding-left: 14px; }
        .b-timeline::before {
          content: ""; position: absolute; top: 12px; bottom: 12px; left: 92px;
          width: 1px; background: color-mix(in oklab, var(--ink), transparent 82%);
        }
        .b-step {
          display: grid; grid-template-columns: 80px 32px 1fr; gap: 16px;
          padding: 22px 0; align-items: start;
        }
        .b-time { font-family: var(--f-display); font-size: 22px; color: var(--driftwood); padding-top: 2px; }
        .b-step-dot {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--driftwood);
          display: inline-flex; align-items: center; justify-content: center; z-index: 2;
        }
        .b-step-body p { margin: 6px 0 0; max-width: 56ch; font-size: 15px; line-height: 1.65; }
        @media (max-width: 700px) {
          .b-timeline::before { left: 78px; }
          .b-step { grid-template-columns: 60px 28px 1fr; gap: 12px; }
          .b-time { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}

function BoardingFeatures() {
  return (
    <section className="b-features">
      <div className="container">
        <div className="b-feat-head reveal">
          <p className="eyebrow">Safety & care</p>
          <h2 className="h-1" style={{ marginTop: 18, maxWidth: "18ch" }}>
            The standards we <em className="italic" style={{ color: "var(--driftwood)" }}>won't move on</em>
          </h2>
        </div>
        <div className="b-feat-grid">
          {BOARDING_FEATURES.map((f, i) => (
            <div key={f.t} className="b-feat-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <PawIcon size={26} color="var(--driftwood)" />
              <h4 className="h-3">{f.t}</h4>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .b-features { background: var(--cream-bg); }
        .b-feat-head { max-width: 720px; margin-bottom: 56px; }
        .b-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .b-feat-card {
          background: var(--white); border-radius: 22px; padding: 32px 28px;
          display: flex; flex-direction: column; gap: 12px;
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          transition: transform var(--t-fast) var(--ease);
        }
        body[data-palette="dark"] .b-feat-card { background: color-mix(in oklab, var(--champagne), black 5%); }
        .b-feat-card:hover { transform: translateY(-4px); }
        .b-feat-card p { margin: 0; font-size: 14.5px; line-height: 1.6; color: var(--ink-mute); }
        @media (max-width: 800px) { .b-feat-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 540px) { .b-feat-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function BoardingPage({ onBook, onAddToCart }) {
  useReveal();
  const [openFaq, setOpenFaq] = React.useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleAddTrialDay = () => {
    const item = {
      id: "boarding-trial-day",
      title: "Trial Day Boarding",
      category: "Boarding",
      price: 850,
      priceDisplay: "₹850",
      desc: "Mandatory assessment trial day for small dogs before overnight stays",
      requiresPetInfo: true,
      isDogOnly: true,
      img: "assets/img/pawpad/boarding-sleeping-puppy-toy.webp"
    };
    if (typeof onAddToCart === "function") onAddToCart(item);
    else if (window.addToCart) window.addToCart(item);
  };

  const handleAddOvernight = () => {
    const item = {
      id: "boarding-overnight",
      title: "Overnight Boarding",
      category: "Boarding",
      price: 1000,
      priceDisplay: "₹1,000 / night",
      desc: "Calm, supervised overnight stay for small dogs (trial day mandatory)",
      requiresPetInfo: true,
      isDogOnly: true,
      requiresTrialDayCheck: true,
      img: "assets/img/pawpad/boarding-dog-sleep-mask.webp"
    };
    if (typeof onAddToCart === "function") onAddToCart(item);
    else if (window.addToCart) window.addToCart(item);
  };

  const FAQ_ITEMS = [
    {
      q: "Why is a Trial Day mandatory before overnight stays?",
      a: "A completed trial day is required before booking an overnight stay — it's how we make sure your dog is a good fit before an overnight commitment. It allows your dog to get familiar with our space, team, and cohort in a calm, stress-free setting."
    },
    {
      q: "What meals are provided, and can I send my dog's regular food?",
      a: "Our standard meals are home-cooked, with chicken, pumpkin, carrot, beans, sweet potato, and rice, fed on your dog's regular schedule. If your dog has any food allergies or is on vet-specified food, let us know in advance and provide it for the day."
    },
    {
      q: "Why are activities held on-site rather than walks?",
      a: "Trial days and stays don't include walks — activity happens on-site, supervised, within the boarding space itself to keep the environment calm, safe, and controlled."
    },
    {
      q: "Is there any minimum or maximum stay length?",
      a: "No minimum or maximum stay length. Stays are flexible based on your needs once the mandatory trial day is completed."
    }
  ];

  return /* @__PURE__ */ React.createElement("div", { className: "page-enter boarding-page-root" },
    /* Main Service Cards */
    /* @__PURE__ */ React.createElement("section", { id: "boarding-options", className: "boarding-cards-section" },
      /* @__PURE__ */ React.createElement("div", { className: "container" },
        /* @__PURE__ */ React.createElement("div", { className: "section-head reveal in" },
          /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "PAWPAD · BOARDING"),
          /* @__PURE__ */ React.createElement("h2", { className: "h-1" },
            "Boarding, ",
            /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)" } }, "Reimagined")
          ),
          /* @__PURE__ */ React.createElement("p", { className: "section-sub" },
            "Trial Day & Overnight Stay — What's Included"
          )
        ),

        /* @__PURE__ */ React.createElement("div", { className: "boarding-grid" },
          /* Card 1: Trial Day */
          /* @__PURE__ */ React.createElement("article", { className: "boarding-card reveal" },
            /* @__PURE__ */ React.createElement("div", { className: "boarding-card-image-box" },
              /* @__PURE__ */ React.createElement("img", {
                src: "assets/img/pawpad/boarding-sleeping-puppy-toy.webp",
                alt: "Puppy sleeping comfortably under a soft blanket cuddling a plush toy",
                className: "boarding-card-img",
                loading: "lazy"
              }),
              /* @__PURE__ */ React.createElement("span", { className: "boarding-card-tag step-tag" }, "Step 1 · Mandatory Assessment")
            ),
            /* @__PURE__ */ React.createElement("div", { className: "boarding-card-body" },
              /* @__PURE__ */ React.createElement("div", { className: "boarding-card-header" },
                /* @__PURE__ */ React.createElement("h3", { className: "boarding-card-title" }, "Trial Day"),
                /* @__PURE__ */ React.createElement("div", { className: "boarding-card-price" }, "₹850 ", /* @__PURE__ */ React.createElement("span", { className: "price-unit" }, "per dog"))
              ),
              /* @__PURE__ */ React.createElement("p", { className: "boarding-card-desc" },
                "A full day with us, so both you and we can see if it's a good fit before committing to an overnight stay. Currently open to small dogs only."
              ),
              /* @__PURE__ */ React.createElement("ul", { className: "boarding-features-list" },
                /* @__PURE__ */ React.createElement("li", null,
                  React.createElement(PawIcon, { size: 14, color: "var(--driftwood)" }),
                  /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Scheduled Feeding:"), " Feeding on your dog's regular schedule — our standard meals are home-cooked, with chicken, pumpkin, carrot, beans, sweet potato, and rice")
                ),
                /* @__PURE__ */ React.createElement("li", null,
                  React.createElement(PawIcon, { size: 14, color: "var(--driftwood)" }),
                  /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Dedicated Quiet Space:"), " Rest and quiet time in the same space used for overnight boarding")
                ),
                /* @__PURE__ */ React.createElement("li", null,
                  React.createElement(PawIcon, { size: 14, color: "var(--driftwood)" }),
                  /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Direct Observation:"), " Direct observation from our team throughout the day")
                ),
                /* @__PURE__ */ React.createElement("li", null,
                  React.createElement(PawIcon, { size: 14, color: "var(--driftwood)" }),
                  /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Parent Consultation:"), " A conversation with you at pickup on how the day went, and whether we're moving forward together")
                )
              ),
              /* @__PURE__ */ React.createElement("div", { className: "boarding-card-note" },
                "Trial days don't include walks — activity happens on-site, supervised, within the boarding space itself. If your dog has any food allergies, let us know in advance. If your dog is on vet-specified food, you'll need to provide it for the day. Paid separately from any future boarding stay."
              ),
              /* @__PURE__ */ React.createElement("div", { className: "boarding-card-action" },
                /* @__PURE__ */ React.createElement("button", {
                  className: "btn btn-primary boarding-btn",
                  onClick: handleAddTrialDay,
                  "aria-label": "Add Trial Day Boarding to Cart"
                },
                  React.createElement(CartIcon, { size: 16 }),
                  " Add Trial Day to Cart (₹850) ",
                  React.createElement(Arrow, null)
                )
              )
            )
          ),

          /* Card 2: Overnight Boarding */
          /* @__PURE__ */ React.createElement("article", { className: "boarding-card reveal" },
            /* @__PURE__ */ React.createElement("div", { className: "boarding-card-image-box" },
              /* @__PURE__ */ React.createElement("img", {
                src: "assets/img/pawpad/boarding-dog-sleep-mask.webp",
                alt: "Calm dog resting peacefully with a sleep mask under duvet",
                className: "boarding-card-img",
                loading: "lazy"
              }),
              /* @__PURE__ */ React.createElement("span", { className: "boarding-card-tag overnight-tag" }, "Step 2 · Overnight Stay")
            ),
            /* @__PURE__ */ React.createElement("div", { className: "boarding-card-body" },
              /* @__PURE__ */ React.createElement("div", { className: "boarding-card-header" },
                /* @__PURE__ */ React.createElement("h3", { className: "boarding-card-title" }, "Overnight Boarding"),
                /* @__PURE__ */ React.createElement("div", { className: "boarding-card-price" }, "₹1,000 ", /* @__PURE__ */ React.createElement("span", { className: "price-unit" }, "per dog, per night"))
              ),
              /* @__PURE__ */ React.createElement("p", { className: "boarding-card-desc" },
                "A calm, supervised overnight stay in the same space and with the same small cohort your dog got to know during their trial day. Currently open to small dogs only."
              ),
              /* @__PURE__ */ React.createElement("ul", { className: "boarding-features-list" },
                /* @__PURE__ */ React.createElement("li", null,
                  React.createElement(PawIcon, { size: 14, color: "var(--driftwood)" }),
                  /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "24/7 Human Supervision:"), " Overnight human supervision, always — never left alone")
                ),
                /* @__PURE__ */ React.createElement("li", null,
                  React.createElement(PawIcon, { size: 14, color: "var(--driftwood)" }),
                  /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Scheduled Feeding:"), " Feeding on your dog's regular schedule — home-cooked meals of chicken, pumpkin, carrot, beans, sweet potato, and rice")
                ),
                /* @__PURE__ */ React.createElement("li", null,
                  React.createElement(PawIcon, { size: 14, color: "var(--driftwood)" }),
                  /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Stress-Reducing Space:"), " Rest and quiet time in a space designed to reduce stress, with never more than four dogs boarding at once")
                ),
                /* @__PURE__ */ React.createElement("li", null,
                  React.createElement(PawIcon, { size: 14, color: "var(--driftwood)" }),
                  /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Supervised Cohort Time:"), " Ongoing supervised time with the other dogs in the cohort")
                )
              ),
              /* @__PURE__ */ React.createElement("div", { className: "boarding-card-note" },
                /* @__PURE__ */ React.createElement("strong", null, "A completed trial day is required before booking an overnight stay"),
                " — it's how we make sure your dog is a good fit before an overnight commitment. Walks aren't included; activity stays on-site and supervised, same as the trial day. If your dog has any food allergies, let us know in advance. If your dog is on vet-specified food, you'll need to provide it. No minimum or maximum stay length."
              ),
              /* @__PURE__ */ React.createElement("div", { className: "boarding-card-action" },
                /* @__PURE__ */ React.createElement("button", {
                  className: "btn btn-primary boarding-btn",
                  onClick: handleAddOvernight,
                  "aria-label": "Add Overnight Boarding to Cart"
                },
                  React.createElement(CartIcon, { size: 16 }),
                  " Add Overnight Boarding (₹1,000) ",
                  React.createElement(Arrow, null)
                )
              )
            )
          )
        )
      )
    ),

    /* Care Highlights & Daily Routine Section */
    /* @__PURE__ */ React.createElement("section", { className: "boarding-standards-section" },
      /* @__PURE__ */ React.createElement("div", { className: "container" },
        /* @__PURE__ */ React.createElement("div", { className: "standards-grid" },
          /* Left: Image & Quote Visual */
          /* @__PURE__ */ React.createElement("div", { className: "standards-visual reveal" },
            /* @__PURE__ */ React.createElement("div", { className: "standards-img-box" },
              /* @__PURE__ */ React.createElement("img", {
                src: "assets/img/pawpad/boarding-dachshund-sleep-mask.webp",
                alt: "Cozy dachshund dog resting under duvet with a pink eye mask",
                className: "standards-img",
                loading: "lazy"
              })
            ),
            /* @__PURE__ */ React.createElement("div", { className: "standards-quote-card" },
              /* @__PURE__ */ React.createElement("p", { className: "standards-overlay-quote" }, "“We treat every boarding dog like family — with cozy bedding, home-cooked food, and 24-hour presence.”"),
              /* @__PURE__ */ React.createElement("span", { className: "standards-overlay-author" }, "— The Pawpad Team")
            )
          ),

          /* Right: Care Pillars */
          /* @__PURE__ */ React.createElement("div", { className: "standards-content reveal" },
            /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Care Standards"),
            /* @__PURE__ */ React.createElement("h2", { className: "h-2", style: { margin: "14px 0 24px" } }, "What Daily Life Looks Like at Pawpad"),
            
            /* @__PURE__ */ React.createElement("div", { className: "pillar-list" },
              /* Pillar 1 */
              /* @__PURE__ */ React.createElement("div", { className: "pillar-item" },
                /* @__PURE__ */ React.createElement("div", { className: "pillar-icon" }, "🍲"),
                /* @__PURE__ */ React.createElement("div", { className: "pillar-text" },
                  /* @__PURE__ */ React.createElement("h4", null, "Fresh, Wholesome Home Cooking"),
                  /* @__PURE__ */ React.createElement("p", null, "Feeding on your dog's regular schedule with home-cooked meals of chicken, pumpkin, carrot, beans, sweet potato, and rice. Special diets or vet food strictly followed.")
                )
              ),
              /* Pillar 2 */
              /* @__PURE__ */ React.createElement("div", { className: "pillar-item" },
                /* @__PURE__ */ React.createElement("div", { className: "pillar-icon" }, "🛡️"),
                /* @__PURE__ */ React.createElement("div", { className: "pillar-text" },
                  /* @__PURE__ */ React.createElement("h4", null, "Safe, Stress-Free On-Site Activity"),
                  /* @__PURE__ */ React.createElement("p", null, "Walks aren't included; all activity happens on-site and supervised within the boarding space to keep your dog secure, relaxed, and safe.")
                )
              ),
              /* Pillar 3 */
              /* @__PURE__ */ React.createElement("div", { className: "pillar-item" },
                /* @__PURE__ */ React.createElement("div", { className: "pillar-icon" }, "🌙"),
                /* @__PURE__ */ React.createElement("div", { className: "pillar-text" },
                  /* @__PURE__ */ React.createElement("h4", null, "Overnight Human Supervision, Always"),
                  /* @__PURE__ */ React.createElement("p", null, "Overnight human supervision, always — dogs are never left alone, ensuring constant comfort, care, and peace of mind.")
                )
              )
            )
          )
        )
      )
    ),

    /* FAQ Section */
    /* @__PURE__ */ React.createElement("section", { className: "boarding-faq-section" },
      /* @__PURE__ */ React.createElement("div", { className: "container boarding-faq-container" },
        /* @__PURE__ */ React.createElement("div", { className: "section-head reveal", style: { textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" } },
          /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Got Questions?"),
          /* @__PURE__ */ React.createElement("h2", { className: "h-1" }, "Frequently Asked Questions"),
          /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "Everything you need to know about our boarding guidelines, routines, and policies.")
        ),

        /* @__PURE__ */ React.createElement("div", { className: "faq-list" },
          FAQ_ITEMS.map((item, idx) =>
            /* @__PURE__ */ React.createElement("div", {
              key: idx,
              className: `faq-item reveal ${openFaq === idx ? "active" : ""}`
            },
              /* @__PURE__ */ React.createElement("button", {
                className: "faq-question",
                onClick: () => toggleFaq(idx),
                "aria-expanded": openFaq === idx
              },
                /* @__PURE__ */ React.createElement("span", null, item.q),
                /* @__PURE__ */ React.createElement("span", { className: "faq-toggle-icon" }, openFaq === idx ? "−" : "+")
              ),
              openFaq === idx && /* @__PURE__ */ React.createElement("div", { className: "faq-answer" },
                /* @__PURE__ */ React.createElement("p", null, item.a)
              )
            )
          )
        )
      )
    ),

    /* Bottom CTA */
    /* @__PURE__ */ React.createElement("section", { className: "boarding-cta-section" },
      /* @__PURE__ */ React.createElement("div", { className: "container" },
        /* @__PURE__ */ React.createElement("div", { className: "boarding-cta-box reveal" },
          /* @__PURE__ */ React.createElement("p", { className: "eyebrow", style: { color: "var(--white)" } }, "Ready to Plan Your Dog's Stay?"),
          /* @__PURE__ */ React.createElement("h2", { className: "h-1", style: { color: "var(--white)", margin: "16px 0 20px" } }, "Give Your Pup a Calm, Loving Stay"),
          /* @__PURE__ */ React.createElement("p", { className: "lead", style: { color: "rgba(255,255,255,0.88)", maxWidth: "56ch", margin: "0 auto 32px" } },
            "Add a Trial Day to your cart to begin the onboarding process, or chat directly with Leena and the Pawpad team on WhatsApp."
          ),
          /* @__PURE__ */ React.createElement("div", { className: "boarding-cta-actions" },
            /* @__PURE__ */ React.createElement("button", {
              className: "btn btn-primary",
              onClick: handleAddTrialDay,
              style: { background: "var(--champagne)", color: "var(--ink)" }
            },
              React.createElement(CartIcon, { size: 16 }),
              " Book Trial Day (₹850) ",
              React.createElement(Arrow, null)
            ),
            /* @__PURE__ */ React.createElement("a", {
              href: "https://wa.me/919663077496?text=Hi%20Pawpad%2C%20I%20would%20like%20to%20enquire%20about%20boarding%20for%20my%20dog",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn btn-ghost",
              style: { borderColor: "rgba(255,255,255,0.6)", color: "var(--white)" }
            }, "Chat on WhatsApp")
          )
        )
      )
    ),

    /* Boarding Page Styles */
    /* @__PURE__ */ React.createElement("style", null, `
      .boarding-page-root {
        background: var(--cream-bg);
      }
      
      /* Hero */
      .boarding-hero {
        padding: 160px 0 70px;
        position: relative;
        overflow: hidden;
      }
      .boarding-hero-container {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 56px;
        align-items: center;
      }
      .boarding-hero-title {
        font-size: clamp(38px, 4.4vw, 56px);
        font-weight: 400;
        line-height: 1.15;
        color: var(--ink);
        margin: 18px 0 20px;
      }
      .boarding-hero-lead {
        font-size: 16.5px;
        line-height: 1.7;
        color: var(--ink-soft);
        margin: 0 0 28px;
        max-width: 58ch;
      }
      .boarding-pills-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 32px;
      }
      .boarding-pill {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        background: var(--champagne-soft);
        border: 1px solid color-mix(in oklab, var(--champagne-deep), transparent 30%);
        padding: 7px 14px;
        border-radius: 999px;
        font-size: 13px;
        font-weight: 600;
        color: var(--ink-soft);
      }
      .boarding-hero-actions {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }
      
      /* Hero Card Visual */
      .boarding-hero-visual {
        display: flex;
        justify-content: center;
      }
      .boarding-hero-card {
        position: relative;
        width: 100%;
        max-width: 440px;
        background: var(--white);
        border-radius: 28px;
        padding: 16px;
        box-shadow: 0 20px 48px -16px rgba(0,0,0,0.08);
        border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
        transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease);
      }
      .boarding-hero-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 26px 54px -16px rgba(0,0,0,0.12);
      }
      .boarding-hero-img-wrap {
        width: 100%;
        height: 380px;
        border-radius: 20px;
        overflow: hidden;
        background: linear-gradient(135deg, #fefaf4 0%, #f6ece0 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .boarding-hero-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center bottom;
        transition: transform 0.4s var(--ease);
      }
      .boarding-hero-card:hover .boarding-hero-img {
        transform: scale(1.03);
      }
      .boarding-hero-badge {
        position: absolute;
        bottom: 28px;
        left: 28px;
        right: 28px;
        background: rgba(255, 255, 255, 0.94);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 14px 18px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 10px 24px rgba(0,0,0,0.06);
        border: 1px solid rgba(255,255,255,0.8);
      }
      .boarding-hero-badge strong {
        display: block;
        font-size: 13.5px;
        color: var(--ink);
      }
      .boarding-hero-badge p {
        margin: 2px 0 0;
        font-size: 12px;
        color: var(--ink-mute);
      }
      .badge-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #4caf50;
        box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
        flex-shrink: 0;
      }

      /* Services Section */
      .boarding-cards-section {
        padding: 160px 0 90px;
        background: var(--cream-bg);
      }
      .section-head {
        margin-bottom: 48px;
      }
      .section-sub {
        font-size: 16px;
        color: var(--ink-soft);
        margin: 14px 0 0;
        max-width: 60ch;
        line-height: 1.6;
      }
      .boarding-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
      }
      .boarding-card {
        background: var(--white);
        border-radius: 28px;
        border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
        box-shadow: 0 8px 32px rgba(0,0,0,0.03);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease);
      }
      .boarding-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 48px -18px rgba(0,0,0,0.09);
      }
      .boarding-card-image-box {
        position: relative;
        height: 250px;
        background: linear-gradient(135deg, #fdfaf4 0%, #f4eae0 100%);
        overflow: hidden;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding: 56px 20px 0;
      }
      .boarding-card-img {
        width: 100%;
        height: 100%;
        max-height: 194px;
        object-fit: contain;
        object-position: center bottom;
        display: block;
        vertical-align: bottom;
        transition: transform 0.4s var(--ease);
      }
      .boarding-card:hover .boarding-card-img {
        transform: scale(1.04);
      }
      .boarding-card-tag {
        position: absolute;
        top: 16px;
        left: 16px;
        z-index: 2;
        font-size: 11.5px;
        font-weight: 700;
        letter-spacing: .06em;
        text-transform: uppercase;
        padding: 6px 14px;
        border-radius: 999px;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }
      .step-tag {
        background: rgba(255, 255, 255, 0.92);
        color: var(--driftwood-deep);
        border: 1px solid rgba(177, 141, 78, 0.25);
      }
      .overnight-tag {
        background: rgba(46, 46, 46, 0.9);
        color: var(--white);
        border: 1px solid rgba(255, 255, 255, 0.15);
      }
      .boarding-card-body {
        padding: 32px 30px 36px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .boarding-card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 16px;
        margin-bottom: 12px;
        flex-wrap: wrap;
      }
      .boarding-card-title {
        font-family: var(--f-display);
        font-size: clamp(24px, 2.6vw, 30px);
        font-weight: 400;
        color: var(--ink);
        margin: 0;
      }
      .boarding-card-price {
        font-family: var(--f-display);
        font-size: clamp(24px, 2.6vw, 30px);
        color: var(--driftwood);
        font-weight: 400;
      }
      .price-unit {
        font-family: var(--f-body);
        font-size: 13.5px;
        color: var(--ink-mute);
        font-weight: 500;
      }
      .boarding-card-desc {
        font-size: 15px;
        line-height: 1.65;
        color: var(--ink-soft);
        margin: 0 0 24px;
        font-style: italic;
      }
      .boarding-features-list {
        list-style: none;
        padding: 0;
        margin: 0 0 24px;
        display: flex;
        flex-direction: column;
        gap: 13px;
      }
      .boarding-features-list li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 14.5px;
        line-height: 1.6;
        color: var(--ink-soft);
      }
      .boarding-features-list li svg {
        flex-shrink: 0;
        margin-top: 3px;
      }
      .boarding-card-note {
        background: #f7efe3;
        border-radius: 14px;
        padding: 16px 20px;
        font-size: 13.5px;
        line-height: 1.65;
        color: var(--ink-soft);
        margin-top: auto;
        margin-bottom: 24px;
        border-left: 3px solid var(--driftwood);
      }
      .boarding-card-action {
        margin-top: 8px;
      }
      .boarding-btn {
        width: 100%;
        justify-content: center;
        padding: 14px 24px;
        font-size: 15px;
      }

      /* Standards Section */
      .boarding-standards-section {
        padding: 90px 0;
        background: var(--champagne-soft);
      }
      .standards-grid {
        display: grid;
        grid-template-columns: 0.95fr 1.05fr;
        gap: 56px;
        align-items: center;
      }
      .standards-visual {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .standards-img-box {
        position: relative;
        background: var(--white);
        border-radius: 28px;
        padding: 24px 20px 0;
        box-shadow: 0 20px 48px -16px rgba(0,0,0,0.06);
        border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
        height: 360px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        overflow: hidden;
      }
      .standards-img {
        width: 100%;
        height: 100%;
        max-height: 336px;
        object-fit: contain;
        object-position: center bottom;
        display: block;
        vertical-align: bottom;
      }
      .standards-quote-card {
        background: var(--white);
        padding: 20px 24px;
        border-radius: 20px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.04);
        border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
      }
      body[data-palette="dark"] .standards-quote-card {
        background: color-mix(in oklab, var(--champagne), black 5%);
        border-color: color-mix(in oklab, var(--champagne), transparent 85%);
      }
      .standards-overlay-quote {
        font-size: 13.5px;
        line-height: 1.55;
        font-style: italic;
        color: var(--ink-soft);
        margin: 0 0 6px;
      }
      .standards-overlay-author {
        font-size: 12px;
        font-weight: 700;
        color: var(--driftwood-deep);
        letter-spacing: .04em;
        text-transform: uppercase;
      }
      .pillar-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 28px;
      }
      .pillar-item {
        display: flex;
        gap: 18px;
        align-items: flex-start;
        background: var(--white);
        padding: 20px 24px;
        border-radius: 18px;
        border: 1px solid color-mix(in oklab, var(--ink), transparent 93%);
        box-shadow: 0 4px 16px rgba(0,0,0,0.02);
      }
      .pillar-icon {
        font-size: 24px;
        line-height: 1;
        flex-shrink: 0;
        margin-top: 2px;
      }
      .pillar-text h4 {
        font-family: var(--f-body);
        font-size: 15.5px;
        font-weight: 700;
        color: var(--ink);
        margin: 0 0 6px;
      }
      .pillar-text p {
        font-size: 14px;
        line-height: 1.6;
        color: var(--ink-soft);
        margin: 0;
      }

      /* FAQ Section */
      .boarding-faq-section {
        padding: 90px 0 80px;
        background: var(--cream-bg);
      }
      .boarding-faq-container {
        max-width: 820px;
        margin: 0 auto;
      }
      .faq-list {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .faq-item {
        background: var(--white);
        border-radius: 18px;
        border: 1px solid color-mix(in oklab, var(--ink), transparent 91%);
        overflow: hidden;
        transition: border-color var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease);
      }
      .faq-item.active {
        border-color: var(--driftwood);
        box-shadow: 0 6px 24px rgba(177, 141, 78, 0.08);
      }
      .faq-question {
        width: 100%;
        padding: 22px 28px;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        font-family: var(--f-body);
        font-size: 16px;
        font-weight: 600;
        color: var(--ink);
      }
      .faq-toggle-icon {
        font-size: 22px;
        font-weight: 400;
        color: var(--driftwood);
        flex-shrink: 0;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--champagne-soft);
        border-radius: 50%;
      }
      .faq-answer {
        padding: 0 28px 22px;
        animation: fadeIn 0.2s var(--ease) both;
      }
      .faq-answer p {
        font-size: 14.5px;
        line-height: 1.7;
        color: var(--ink-soft);
        margin: 0;
      }

      /* CTA Banner */
      .boarding-cta-section {
        padding: 40px 0 100px;
        background: var(--cream-bg);
      }
      .boarding-cta-box {
        background: #2e2e2e;
        border-radius: 32px;
        padding: 64px 40px;
        text-align: center;
        color: var(--white);
        box-shadow: 0 24px 60px rgba(0,0,0,0.12);
      }
      .boarding-cta-actions {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      /* Responsive rules */
      @media (max-width: 960px) {
        .boarding-cards-section { padding: 130px 0 70px; }
        .boarding-grid { grid-template-columns: 1fr; }
        .standards-grid { grid-template-columns: 1fr; gap: 40px; }
        .standards-img-box { height: 320px; }
        .standards-img { max-height: 296px; }
      }
      @media (max-width: 600px) {
        .boarding-cards-section { padding: 110px 0 50px; }
        .boarding-card-body { padding: 24px 20px 28px; }
        .boarding-card-image-box { height: 220px; padding: 48px 16px 0; }
        .boarding-card-img { max-height: 172px; }
        .standards-img-box { height: 260px; padding: 20px 16px 0; }
        .standards-img { max-height: 240px; }
        .standards-quote-card { padding: 16px 20px; }
        .boarding-cta-box { padding: 44px 24px; border-radius: 24px; }
      }
    `)
  );
}


function MyotherapyPage({ onBook }) {
  useReveal();
  return (
    <div className="page-enter">
      <section className="soon-page">
        <div className="container soon-grid">
          <div>
            <p className="eyebrow reveal in">Canine Myotherapy & Wellness</p>
            <h1 className="h-display reveal in" style={{ marginTop: 24, maxWidth: "14ch" }}>Coming <em className="italic" style={{ color: "var(--driftwood)" }}>Soon</em></h1>
            <p className="lead reveal in" style={{ marginTop: 28, maxWidth: "54ch" }}>Support for your dog's mobility, recovery, and overall wellbeing through gentle bodywork therapy is coming soon.</p>
            <span className="btn btn-primary disabled-cta reveal in" style={{ marginTop: 32 }}>Coming Soon <Arrow /></span>
          </div>
          <div className="soon-img reveal in"><div className="blob-2"><img src="assets/img/pawpad/myotherapy-page.png" alt="Canine myotherapy at Pawpad" /></div></div>
        </div>
        <style>{`
          .soon-page { padding: 180px 0 80px; }
          .soon-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
          .soon-img .blob-2 { aspect-ratio: 1/1; overflow: hidden; background: transparent; }
          .soon-img img { width: 100%; height: 100%; object-fit: cover; }
            @media (max-width: 900px) { .soon-grid { grid-template-columns: 1fr; gap: 36px; } }
        `}</style>
      </section>
    </div>
  );
}

Object.assign(window, { CoursesPage, BoardingPage, MyotherapyPage });
