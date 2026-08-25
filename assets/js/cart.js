
const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;

const CART_CATALOG = [
  {
    id: "foundation-grooming",
    title: "Foundation Course in Grooming",
    category: "Courses",
    price: 95000,
    priceDisplay: "₹95,000",
    desc: "7-week foundation-level grooming certification for beginners (dogs & cats)",
    requiresPetInfo: false,
    img: "assets/img/pawpad/course-dog-grooming.webp"
  },
  {
    id: "essentials-dog-grooming",
    title: "Essentials Dog Grooming",
    category: "Courses",
    price: 30000,
    priceDisplay: "₹30,000",
    desc: "5-day hands-on introduction to professional dog grooming",
    requiresPetInfo: false,
    img: "assets/img/pawpad/course-dog-grooming.webp"
  },
  {
    id: "essentials-cat-grooming",
    title: "Essentials Cat Grooming",
    category: "Courses",
    price: 30000,
    priceDisplay: "₹30,000",
    desc: "5-day hands-on introductory course in feline grooming and handling",
    requiresPetInfo: false,
    img: "assets/img/pawpad/course-cat-grooming.webp"
  },
  {
    id: "practitioner-dog-grooming",
    title: "Practitioner Dog Grooming",
    category: "Courses",
    price: 50000,
    priceDisplay: "₹50,000",
    desc: "3-week practitioner-level programme in canine grooming and scissoring",
    requiresPetInfo: false,
    img: "assets/img/pawpad/course-dog-grooming.webp"
  },
  {
    id: "practitioner-cat-grooming",
    title: "Practitioner Cat Grooming",
    category: "Courses",
    price: 50000,
    priceDisplay: "₹50,000",
    desc: "3-week intensive feline grooming mastery and live styling",
    requiresPetInfo: false,
    img: "assets/img/pawpad/course-cat-grooming.webp"
  }
];

const CART_STORAGE_KEY = "pawpad_cart_v1";

const PawpadCartStore = {
  getItems() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn("Could not read cart from localStorage", e);
      return [];
    }
  },
  saveItems(items) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      window.dispatchEvent(new CustomEvent("pawpad-cart-updated", { detail: items }));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  },
  addItem(item) {
    const items = this.getItems();
    const existingIndex = items.findIndex((i) => i.id === item.id);
    if (existingIndex > -1) {
      items[existingIndex].quantity = (items[existingIndex].quantity || 1) + 1;
    } else {
      items.push({
        id: item.id || `item-${Date.now()}`,
        title: item.title || "Custom Service",
        category: item.category || "Service",
        price: Number(item.price) || 1000,
        priceDisplay: item.priceDisplay || `₹${(Number(item.price) || 1000).toLocaleString("en-IN")}`,
        desc: item.desc || "",
        requiresPetInfo: item.requiresPetInfo !== false,
        img: item.img || "assets/img/pawpad/landing-page-cover.webp",
        quantity: 1
      });
    }
    this.saveItems(items);
    return items;
  },
  updateQuantity(id, delta) {
    let items = this.getItems();
    const index = items.findIndex((i) => i.id === id);
    if (index > -1) {
      const newQty = (items[index].quantity || 1) + delta;
      if (newQty <= 0) {
        items = items.filter((i) => i.id !== id);
      } else {
        items[index].quantity = newQty;
      }
      this.saveItems(items);
    }
    return items;
  },
  removeItem(id) {
    const items = this.getItems().filter((i) => i.id !== id);
    this.saveItems(items);
    return items;
  },
  clearCart() {
    this.saveItems([]);
    return [];
  },
  getTotalCount() {
    return this.getItems().reduce((acc, item) => acc + (item.quantity || 1), 0);
  },
  getSubtotal() {
    return this.getItems().reduce((acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1), 0);
  },
  requiresPetInfo() {
    const items = this.getItems();
    if (items.length === 0) return true;
    return items.some((item) => item.requiresPetInfo !== false);
  }
};

// Cart Drawer Component (Side Window)
function CartDrawer({ open, onClose, onCheckout }) {
  const [items, setItems] = useStateC(PawpadCartStore.getItems());

  useEffectC(() => {
    const onCartUpdate = (e) => {
      setItems(e.detail || PawpadCartStore.getItems());
    };
    window.addEventListener("pawpad-cart-updated", onCartUpdate);
    setItems(PawpadCartStore.getItems());
    return () => window.removeEventListener("pawpad-cart-updated", onCartUpdate);
  }, []);


  useEffectC(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open, onClose]);

  if (!open) return null;

  const totalCount = items.reduce((acc, i) => acc + (i.quantity || 1), 0);
  const subtotal = items.reduce((acc, i) => acc + (Number(i.price) || 0) * (i.quantity || 1), 0);

  const handleAddQuick = (catItem) => {
    PawpadCartStore.addItem(catItem);
  };

  return React.createElement(
    "div",
    { className: "cart-overlay", role: "dialog", "aria-modal": "true", "aria-label": "Shopping cart drawer" },
    React.createElement("div", { className: "cart-backdrop", onClick: onClose }),
    React.createElement(
      "div",
      { className: "cart-drawer" },
      // Header
      React.createElement(
        "div",
        { className: "cart-header" },
        React.createElement(
          "div",
          { className: "cart-title-wrap" },
          React.createElement("span", { className: "cart-icon-badge" }, React.createElement(CartIcon, { size: 18 })),
          React.createElement("h3", { className: "cart-heading" }, "Your Cart"),
          React.createElement(
            "span",
            { className: "cart-item-pill" },
            `${totalCount} ${totalCount === 1 ? "item" : "items"}`
          )
        ),
        React.createElement(
          "button",
          { className: "cart-close-btn", onClick: onClose, "aria-label": "Close cart" },
          "×"
        )
      ),

      // Body / Item list
      React.createElement(
        "div",
        { className: "cart-body" },
        items.length === 0
          ? React.createElement(
              "div",
              { className: "cart-empty-state" },
              React.createElement("div", { className: "cart-empty-paw" }, React.createElement(PawIcon, { size: 48, color: "var(--driftwood)" })),
              React.createElement("h4", null, "Your cart is empty"),
              React.createElement("p", null, "Add professional pet grooming courses and certificate programs to get started."),
              React.createElement(
                "div",
                { className: "cart-suggested-wrap" },
                React.createElement("p", { className: "cart-suggested-label" }, "Popular Grooming Courses"),
                React.createElement(
                  "div",
                  { className: "cart-suggested-list" },
                  CART_CATALOG.slice(0, 3).map((item) =>
                    React.createElement(
                      "div",
                      { key: item.id, className: "cart-suggest-card" },
                      React.createElement("img", { src: item.img, alt: item.title, className: "cart-suggest-img" }),
                      React.createElement(
                        "div",
                        { className: "cart-suggest-info" },
                        React.createElement("strong", null, item.title),
                        React.createElement("span", { className: "cart-suggest-price" }, item.priceDisplay)
                      ),
                      React.createElement(
                        "button",
                        {
                          className: "btn btn-cream btn-sm",
                          onClick: () => handleAddQuick(item)
                        },
                        "+ Add"
                      )
                    )
                  )
                )
              )
            )
          : React.createElement(
              "div",
              { className: "cart-items-list" },
              items.map((item) =>
                React.createElement(
                  "div",
                  { key: item.id, className: "cart-item-card" },
                  React.createElement("img", { src: item.img, alt: item.title, className: "cart-item-img" }),
                  React.createElement(
                    "div",
                    { className: "cart-item-details" },
                    React.createElement(
                      "div",
                      { className: "cart-item-top" },
                      React.createElement("span", { className: "cart-item-cat" }, item.category || "Service"),
                      React.createElement(
                        "button",
                        {
                          className: "cart-item-remove",
                          onClick: () => PawpadCartStore.removeItem(item.id),
                          "aria-label": `Remove ${item.title}`
                        },
                        "✕"
                      )
                    ),
                    React.createElement("h5", { className: "cart-item-title" }, item.title),
                    item.desc ? React.createElement("p", { className: "cart-item-desc" }, item.desc) : null,
                    React.createElement(
                      "div",
                      { className: "cart-item-bottom" },
                      React.createElement("span", { className: "cart-item-price" }, `₹${(item.price * (item.quantity || 1)).toLocaleString("en-IN")}`),
                      React.createElement(
                        "div",
                        { className: "cart-qty-stepper" },
                        React.createElement(
                          "button",
                          {
                            onClick: () => PawpadCartStore.updateQuantity(item.id, -1),
                            "aria-label": "Decrease quantity"
                          },
                          "−"
                        ),
                        React.createElement("span", null, item.quantity || 1),
                        React.createElement(
                          "button",
                          {
                            onClick: () => PawpadCartStore.updateQuantity(item.id, 1),
                            "aria-label": "Increase quantity"
                          },
                          "+"
                        )
                      )
                    )
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "cart-addons-section" },
                React.createElement("p", { className: "cart-addons-title" }, "Recommended Additions"),
                React.createElement(
                  "div",
                  { className: "cart-addons-slider" },
                  CART_CATALOG.filter((c) => !items.some((it) => it.id === c.id))
                    .slice(0, 3)
                    .map((addon) =>
                      React.createElement(
                        "div",
                        { key: addon.id, className: "cart-addon-pill" },
                        React.createElement(
                          "div",
                          null,
                          React.createElement("span", { className: "cart-addon-name" }, addon.title),
                          React.createElement("span", { className: "cart-addon-price" }, ` · ${addon.priceDisplay}`)
                        ),
                        React.createElement(
                          "button",
                          {
                            className: "cart-addon-add",
                            onClick: () => handleAddQuick(addon),
                            "aria-label": `Add ${addon.title}`
                          },
                          "+"
                        )
                      )
                    )
                )
              )
            )
      ),

      // Footer
      items.length > 0 &&
        React.createElement(
          "div",
          { className: "cart-footer" },
          React.createElement(
            "div",
            { className: "cart-subtotal-row" },
            React.createElement("span", { className: "cart-subtotal-label" }, "Subtotal"),
            React.createElement("span", { className: "cart-subtotal-val" }, `₹${subtotal.toLocaleString("en-IN")}`)
          ),
          React.createElement(
            "p",
            { className: "cart-tax-note" },
            "Taxes & personalized scheduling confirmed at studio upon session."
          ),
          React.createElement(
            "button",
            {
              className: "btn btn-primary cart-checkout-btn",
              onClick: () => {
                onClose();
                onCheckout();
              }
            },
            "Proceed to Checkout ",
            React.createElement(Arrow, null)
          ),
          React.createElement(
            "button",
            {
              className: "cart-clear-link",
              onClick: () => PawpadCartStore.clearCart()
            },
            "Empty cart"
          )
        )
    )
  );
}

// Checkout Modal Component
const PET_TYPES_CHECKOUT = ["Dog", "Cat", "Other"];
const COAT_TYPES_CHECKOUT = ["Short", "Medium", "Long"];
const SIZES_CHECKOUT = ["Small (<10kg)", "Medium (10–25kg)", "Large (25kg+)"];
const TEMPERAMENTS_CHECKOUT = ["Chill & Friendly", "Excitable / Playful", "Anxious / Sensitive", "First-time visit"];

function generateCheckoutDates() {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

const CHECKOUT_TIMES = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

function CheckoutModal({ open, onClose }) {
  const [items, setItems] = useStateC(PawpadCartStore.getItems());
  const [step, setStep] = useStateC(0);
  const [completedOrder, setCompletedOrder] = useStateC(null);

  const [formData, setFormData] = useStateC({
    // Personal Info
    name: "",
    email: "",
    phone: "",
    area: "",
    contactMethod: "WhatsApp",
    petType: "Dog",
    petName: "",
    breed: "",
    age: "",
    coat: "Short",
    size: "Small (<10kg)",
    temperament: "Chill & Friendly",
    healthNotes: "",
    date: null,
    time: null,
    notes: ""
  });

  useEffectC(() => {
    if (open) {
      setItems(PawpadCartStore.getItems());
      setStep(0);
      setCompletedOrder(null);
      document.body.style.overflow = "hidden";
      const onKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open, onClose]);

  if (!open) return null;

  const requiresPetInfo = items.length === 0 || items.some((i) => i.requiresPetInfo !== false);
  const subtotal = items.reduce((acc, i) => acc + (Number(i.price) || 0) * (i.quantity || 1), 0);

  const upd = (k, v) => setFormData((d) => ({ ...d, [k]: v }));

  // Steps definition based on whether pet info is required
  const CHECKOUT_STEPS = [
    { label: "Your Info" },
    ...(requiresPetInfo ? [{ label: "Pet Details" }] : []),
    { label: "Schedule" },
    { label: "Review" }
  ];

  const petStepIndex = requiresPetInfo ? 1 : -1;
  const scheduleStepIndex = requiresPetInfo ? 2 : 1;
  const reviewStepIndex = requiresPetInfo ? 3 : 2;

  const isStepValid = () => {
    if (step === 0) {
      return (
        formData.name.trim().length > 1 &&
        formData.phone.trim().length >= 8 &&
        formData.email.includes("@")
      );
    }
    if (requiresPetInfo && step === petStepIndex) {
      return formData.petName.trim().length > 0 && formData.petType;
    }
    if (step === scheduleStepIndex) {
      return true; 
    }
    return true;
  };

  const handleNext = () => {
    if (!isStepValid()) return;
    if (step < CHECKOUT_STEPS.length - 1) {
      setStep((s) => s + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  const handlePlaceOrder = () => {
    const orderRef = "PAW-" + Math.floor(100000 + Math.random() * 900000);
    const orderPayload = {
      orderId: orderRef,
      items: [...items],
      totalAmount: subtotal,
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        area: formData.area,
        contactMethod: formData.contactMethod
      },
      pet: requiresPetInfo
        ? {
            name: formData.petName,
            type: formData.petType,
            breed: formData.breed,
            age: formData.age,
            coat: formData.coat,
            size: formData.size,
            temperament: formData.temperament,
            healthNotes: formData.healthNotes
          }
        : null,
      appointment: {
        date: formData.date ? new Date(formData.date).toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" }) : "To be scheduled",
        time: formData.time || "Flexible",
        notes: formData.notes
      },
      createdAt: new Date().toISOString()
    };

    if (window.hsSubmit) {
      window.hsSubmit("checkout", orderPayload);
    }

    setCompletedOrder(orderPayload);
    PawpadCartStore.clearCart();
    setStep(99); // Completed confirmation state
  };

  return React.createElement(
    "div",
    { className: "checkout-overlay", role: "dialog", "aria-modal": "true", "aria-label": "Checkout booking modal" },
    React.createElement("div", { className: "checkout-backdrop", onClick: onClose }),
    React.createElement(
      "div",
      { className: "checkout-modal" },
      React.createElement(
        "button",
        { className: "checkout-close-btn", onClick: onClose, "aria-label": "Close checkout" },
        "×"
      ),

      // Confirmation screen
      step === 99 && completedOrder
        ? React.createElement(
            "div",
            { className: "checkout-success" },
            React.createElement(
              "div",
              { className: "success-icon-wrap" },
              React.createElement(PawIcon, { size: 36, color: "var(--white)" })
            ),
            React.createElement("p", { className: "eyebrow", style: { justifyContent: "center" } }, "Booking & Order Placed"),
            React.createElement("h3", { className: "h-2" }, "Thank you, ", completedOrder.customer.name, "!"),
            React.createElement(
              "p",
              { className: "success-sub" },
              "We’ve received your booking request. Our team will review your order details and confirm your slot via ",
              completedOrder.customer.contactMethod,
              "."
            ),
            React.createElement(
              "div",
              { className: "order-ref-card" },
              React.createElement(
                "div",
                { className: "ref-row" },
                React.createElement("span", null, "Booking Reference"),
                React.createElement("strong", { className: "ref-number" }, completedOrder.orderId)
              ),
              React.createElement(
                "div",
                { className: "ref-row" },
                React.createElement("span", null, "Total Estimated"),
                React.createElement("strong", null, `₹${completedOrder.totalAmount.toLocaleString("en-IN")}`)
              ),
              completedOrder.pet &&
                React.createElement(
                  "div",
                  { className: "ref-row" },
                  React.createElement("span", null, "Pet"),
                  React.createElement("strong", null, `${completedOrder.pet.name} (${completedOrder.pet.type}, ${completedOrder.pet.temperament})`)
                ),
              React.createElement(
                "div",
                { className: "ref-row" },
                React.createElement("span", null, "Preferred Schedule"),
                React.createElement("strong", null, `${completedOrder.appointment.date} at ${completedOrder.appointment.time}`)
              )
            ),
            React.createElement(
              "div",
              { className: "success-actions" },
              React.createElement(
                "a",
                {
                  href: `https://wa.me/919663077496?text=${encodeURIComponent(`Hi Pawpad! I placed booking ref ${completedOrder.orderId} for ${completedOrder.pet ? completedOrder.pet.name : "my session"}.`)}`,
                  target: "_blank",
                  rel: "noopener",
                  className: "btn btn-primary"
                },
                "Chat on WhatsApp ",
                React.createElement(Arrow, null)
              ),
              React.createElement(
                "button",
                { className: "btn btn-ghost", onClick: onClose },
                "Return to Website"
              )
            )
          )
        : React.createElement(
            React.Fragment,
            null,
            // Stepper
            React.createElement(
              "div",
              { className: "checkout-stepper" },
              CHECKOUT_STEPS.map((s, idx) =>
                React.createElement(
                  "div",
                  {
                    key: s.label,
                    className: "c-stepper-item " + (idx === step ? "on" : idx < step ? "done" : "")
                  },
                  React.createElement(
                    "span",
                    { className: "c-step-num" },
                    idx < step ? "✓" : idx + 1
                  ),
                  React.createElement("span", { className: "c-step-name" }, s.label)
                )
              )
            ),

            // Form Content Area
            React.createElement(
              "div",
              { className: "checkout-body" },
              // Step 0: Personal Info
              step === 0 &&
                React.createElement(
                  "div",
                  { className: "checkout-step-pane" },
                  React.createElement(
                    "div",
                    { className: "step-head" },
                    React.createElement("p", { className: "eyebrow" }, "Step 1"),
                    React.createElement("h4", { className: "h-3" }, "Your Personal Information"),
                    React.createElement(
                      "p",
                      { className: "lead-sm" },
                      "How our team can reach you for confirmations and arrival instructions."
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "form-grid" },
                    React.createElement(
                      "div",
                      { className: "field" },
                      React.createElement("label", null, "Full Name *"),
                      React.createElement("input", {
                        type: "text",
                        required: true,
                        placeholder: "e.g. Maya Shankar",
                        value: formData.name,
                        onChange: (e) => upd("name", e.target.value)
                      })
                    ),
                    React.createElement(
                      "div",
                      { className: "field" },
                      React.createElement("label", null, "Phone Number *"),
                      React.createElement("input", {
                        type: "tel",
                        required: true,
                        placeholder: "e.g. 9876543210",
                        value: formData.phone,
                        onChange: (e) => upd("phone", e.target.value)
                      })
                    ),
                    React.createElement(
                      "div",
                      { className: "field" },
                      React.createElement("label", null, "Email Address *"),
                      React.createElement("input", {
                        type: "email",
                        required: true,
                        placeholder: "e.g. maya@example.com",
                        value: formData.email,
                        onChange: (e) => upd("email", e.target.value)
                      })
                    ),
                    React.createElement(
                      "div",
                      { className: "field" },
                      React.createElement("label", null, "Bengaluru Neighborhood / Area"),
                      React.createElement("input", {
                        type: "text",
                        placeholder: "e.g. Kalyan Nagar, Indiranagar, HRBR Layout",
                        value: formData.area,
                        onChange: (e) => upd("area", e.target.value)
                      })
                    ),
                    React.createElement(
                      "div",
                      { className: "field full-span" },
                      React.createElement("label", null, "Preferred Contact Mode"),
                      React.createElement(
                        "div",
                        { className: "chip-select" },
                        ["WhatsApp", "Phone Call", "Email"].map((mode) =>
                          React.createElement(
                            "button",
                            {
                              type: "button",
                              key: mode,
                              className: "chip-btn " + (formData.contactMethod === mode ? "active" : ""),
                              onClick: () => upd("contactMethod", mode)
                            },
                            mode
                          )
                        )
                      )
                    )
                  )
                ),


              requiresPetInfo &&
                step === petStepIndex &&
                React.createElement(
                  "div",
                  { className: "checkout-step-pane" },
                  React.createElement(
                    "div",
                    { className: "step-head" },
                    React.createElement("p", { className: "eyebrow" }, "Step 2 · Pet Details"),
                    React.createElement("h4", { className: "h-3" }, "Tell Us About Your Pet"),
                    React.createElement(
                      "p",
                      { className: "lead-sm" },
                      "Sessions at Pawpad are never rushed. Knowing your pet’s temperament and coat type helps us tailor the session pace."
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "form-grid" },
                    React.createElement(
                      "div",
                      { className: "field" },
                      React.createElement("label", null, "Pet Type *"),
                      React.createElement(
                        "div",
                        { className: "chip-select" },
                        PET_TYPES_CHECKOUT.map((t) =>
                          React.createElement(
                            "button",
                            {
                              type: "button",
                              key: t,
                              className: "chip-btn " + (formData.petType === t ? "active" : ""),
                              onClick: () => upd("petType", t)
                            },
                            t
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "field" },
                      React.createElement("label", null, "Pet Name *"),
                      React.createElement("input", {
                        type: "text",
                        required: true,
                        placeholder: "e.g. Leo, Bruno, Maya",
                        value: formData.petName,
                        onChange: (e) => upd("petName", e.target.value)
                      })
                    ),
                    React.createElement(
                      "div",
                      { className: "field" },
                      React.createElement("label", null, "Breed / Mix"),
                      React.createElement("input", {
                        type: "text",
                        placeholder: "e.g. Indie, Golden Retriever, Shih Tzu, Persian Cat",
                        value: formData.breed,
                        onChange: (e) => upd("breed", e.target.value)
                      })
                    ),
                    React.createElement(
                      "div",
                      { className: "field" },
                      React.createElement("label", null, "Age"),
                      React.createElement("input", {
                        type: "text",
                        placeholder: "e.g. 2 years, 4 months",
                        value: formData.age,
                        onChange: (e) => upd("age", e.target.value)
                      })
                    ),
                    React.createElement(
                      "div",
                      { className: "field full-span" },
                      React.createElement("label", null, "Size / Weight Category"),
                      React.createElement(
                        "div",
                        { className: "chip-select" },
                        SIZES_CHECKOUT.map((s) =>
                          React.createElement(
                            "button",
                            {
                              type: "button",
                              key: s,
                              className: "chip-btn " + (formData.size === s ? "active" : ""),
                              onClick: () => upd("size", s)
                            },
                            s
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "field full-span" },
                      React.createElement("label", null, "Coat Type"),
                      React.createElement(
                        "div",
                        { className: "chip-select" },
                        COAT_TYPES_CHECKOUT.map((c) =>
                          React.createElement(
                            "button",
                            {
                              type: "button",
                              key: c,
                              className: "chip-btn " + (formData.coat === c ? "active" : ""),
                              onClick: () => upd("coat", c)
                            },
                            `${c} Coat`
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "field full-span" },
                      React.createElement("label", null, "Temperament / Handling"),
                      React.createElement(
                        "div",
                        { className: "chip-select" },
                        TEMPERAMENTS_CHECKOUT.map((t) =>
                          React.createElement(
                            "button",
                            {
                              type: "button",
                              key: t,
                              className: "chip-btn " + (formData.temperament === t ? "active" : ""),
                              onClick: () => upd("temperament", t)
                            },
                            t
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "field full-span" },
                      React.createElement("label", null, "Special Needs, Sensitivities or Matting"),
                      React.createElement("textarea", {
                        rows: 2,
                        placeholder: "e.g. Sensitive around paws, dislikes blow-dryer noise, skin allergies, etc.",
                        value: formData.healthNotes,
                        onChange: (e) => upd("healthNotes", e.target.value)
                      })
                    )
                  )
                ),

              // Step 2 (or 1): Preferred Schedule
              step === scheduleStepIndex &&
                React.createElement(
                  "div",
                  { className: "checkout-step-pane" },
                  React.createElement(
                    "div",
                    { className: "step-head" },
                    React.createElement("p", { className: "eyebrow" }, "Step · Schedule"),
                    React.createElement("h4", { className: "h-3" }, "Preferred Date & Time"),
                    React.createElement(
                      "p",
                      { className: "lead-sm" },
                      "Pick a tentative slot. We will confirm based on studio availability and calm spacing."
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "date-picker-wrap" },
                    React.createElement("label", { className: "sub-label" }, "Select Date (Next 14 Days)"),
                    React.createElement(
                      "div",
                      { className: "date-chip-grid" },
                      generateCheckoutDates().map((d, i) => {
                        const dateStr = d.toISOString();
                        const isSel = formData.date && new Date(formData.date).toDateString() === d.toDateString();
                        return React.createElement(
                          "button",
                          {
                            type: "button",
                            key: i,
                            className: "date-chip " + (isSel ? "active" : ""),
                            onClick: () => upd("date", dateStr)
                          },
                          React.createElement("span", { className: "d-day" }, d.toLocaleDateString("en-IN", { weekday: "short" })),
                          React.createElement("strong", { className: "d-num" }, d.getDate()),
                          React.createElement("span", { className: "d-mon" }, d.toLocaleDateString("en-IN", { month: "short" }))
                        );
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "time-picker-wrap", style: { marginTop: 24 } },
                    React.createElement("label", { className: "sub-label" }, "Select Time Slot"),
                    React.createElement(
                      "div",
                      { className: "time-chip-grid" },
                      CHECKOUT_TIMES.map((t) =>
                        React.createElement(
                          "button",
                          {
                            type: "button",
                            key: t,
                            className: "time-chip " + (formData.time === t ? "active" : ""),
                            onClick: () => upd("time", t)
                          },
                          t
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "field", style: { marginTop: 24 } },
                    React.createElement("label", null, "Additional Instructions / Notes"),
                    React.createElement("textarea", {
                      rows: 2,
                      placeholder: "Any specific requests or questions for our groomers and therapists?",
                      value: formData.notes,
                      onChange: (e) => upd("notes", e.target.value)
                    })
                  )
                ),

              // Final Step: Review & Confirm
              step === reviewStepIndex &&
                React.createElement(
                  "div",
                  { className: "checkout-step-pane" },
                  React.createElement(
                    "div",
                    { className: "step-head" },
                    React.createElement("p", { className: "eyebrow" }, "Final Review"),
                    React.createElement("h4", { className: "h-3" }, "Review Your Booking"),
                    React.createElement(
                      "p",
                      { className: "lead-sm" },
                      "Check your contact info, pet details, and selected services before submitting."
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "review-summary-grid" },
                    // Items list
                    React.createElement(
                      "div",
                      { className: "review-items-card" },
                      React.createElement("h5", { className: "review-card-title" }, "Selected Services & Items"),
                      React.createElement(
                        "div",
                        { className: "review-items-list" },
                        items.map((item) =>
                          React.createElement(
                            "div",
                            { key: item.id, className: "review-item-row" },
                            React.createElement(
                              "div",
                              null,
                              React.createElement("strong", null, item.title),
                              React.createElement("span", { className: "review-item-qty" }, ` × ${item.quantity || 1}`)
                            ),
                            React.createElement("span", { className: "review-item-price" }, `₹${(item.price * (item.quantity || 1)).toLocaleString("en-IN")}`)
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "review-subtotal-row" },
                        React.createElement("strong", null, "Total Estimated"),
                        React.createElement("strong", { className: "review-total-price" }, `₹${subtotal.toLocaleString("en-IN")}`)
                      )
                    ),

                    // Details summary
                    React.createElement(
                      "div",
                      { className: "review-details-card" },
                      React.createElement("h5", { className: "review-card-title" }, "Booking Information"),
                      React.createElement(
                        "div",
                        { className: "review-info-grid" },
                        React.createElement(
                          "div",
                          null,
                          React.createElement("span", { className: "review-label" }, "Client:"),
                          React.createElement("p", null, formData.name, " (", formData.phone, ")")
                        ),
                        React.createElement(
                          "div",
                          null,
                          React.createElement("span", { className: "review-label" }, "Email:"),
                          React.createElement("p", null, formData.email)
                        ),
                        requiresPetInfo &&
                          React.createElement(
                            "div",
                            null,
                            React.createElement("span", { className: "review-label" }, "Pet:"),
                            React.createElement(
                              "p",
                              null,
                              `${formData.petName} (${formData.petType} · ${formData.breed || "Standard"} · ${formData.temperament})`
                            )
                          ),
                        React.createElement(
                          "div",
                          null,
                          React.createElement("span", { className: "review-label" }, "Schedule:"),
                          React.createElement(
                            "p",
                            null,
                            formData.date
                              ? `${new Date(formData.date).toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" })} · ${formData.time || "Morning"}`
                              : "To be coordinated on WhatsApp/Call"
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "studio-payment-badge" },
                        React.createElement("span", null, "📍 Payment Mode:"),
                        React.createElement("p", null, "No advance payment required today. Pay at studio via UPI, Card, or Cash after your pet's comfortable session.")
                      )
                    )
                  )
                )
            ),

            // Footer / Actions
            React.createElement(
              "div",
              { className: "checkout-footer" },
              React.createElement(
                "button",
                {
                  className: "btn btn-ghost",
                  onClick: handlePrev,
                  disabled: step === 0,
                  style: { opacity: step === 0 ? 0.3 : 1 }
                },
                "← Back"
              ),
              React.createElement("div", { style: { flex: 1 } }),
              step === reviewStepIndex
                ? React.createElement(
                    "button",
                    {
                      className: "btn btn-primary",
                      onClick: handlePlaceOrder
                    },
                    "Confirm Booking & Checkout ",
                    React.createElement(Arrow, null)
                  )
                : React.createElement(
                    "button",
                    {
                      className: "btn btn-primary",
                      onClick: handleNext,
                      disabled: !isStepValid(),
                      style: { opacity: isStepValid() ? 1 : 0.4 }
                    },
                    "Continue ",
                    React.createElement(Arrow, null)
                  )
            )
          )
    )
  );
}

// Global Cart Icon SVG component
const CartIcon = ({ size = 20, color = "currentColor", style }) =>
  React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style,
      "aria-hidden": "true"
    },
    React.createElement("circle", { cx: "9", cy: "21", r: "1" }),
    React.createElement("circle", { cx: "20", cy: "21", r: "1" }),
    React.createElement("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
  );

// Expose on window
Object.assign(window, {
  CART_CATALOG,
  PawpadCartStore,
  CartDrawer,
  CheckoutModal,
  CartIcon
});
