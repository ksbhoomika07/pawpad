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

