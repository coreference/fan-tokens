import React, { useState, useEffect } from "react";
import {
  Home, Ticket, Calendar, Menu, ChevronRight, ChevronLeft, ChevronDown,
  Wifi, Check, Beer, Gift, BadgeCheck, ScanLine, Wallet, RotateCcw,
  Users, Lock, X, Zap, SwitchCamera, Globe, Copy, Share2, MessageCircle,
  Link2, Plus, Play, Pause, Columns2, Smartphone, TrendingUp, Crown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Panthers Token — fan acquisition prototype                         */
/*  Threads a Republic-powered token purchase + free-beer welcome      */
/*  reward through the Panthers app's existing "Virtual Currency"       */
/*  wallet. Two journeys: no-app (mobile web) and in-app.              */
/* ------------------------------------------------------------------ */

const BLUE = "#0085CA";        // Panther blue (header / accents)
const BLUE_DK = "#006BA6";
const INK = "#0B0E12";         // native app dark background
const CARD_DK = "#15191F";
const SILVER = "#BFC0BF";
const LIGHTBG = "#EFEFEF";     // wallet / web background
const TXT = "#16181D";
const MUTED = "#70747C";
const PRICE = "#3F93D1";
const GREEN = "#1F9D55";
const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const display = { fontWeight: 800, letterSpacing: "0.01em", textTransform: "uppercase" };

const PACKS = [
  { amount: 10, tokens: 10, label: "Starter" },
  { amount: 25, tokens: 25, label: "Most popular", popular: true },
  { amount: 50, tokens: 50, label: "Superfan" },
];

const RETURN_BAL = 38;   // returning fan's existing token balance

const SCRIPT = [
  { journey: "A", step: "seat", caption: "A fan in Section 112 aims their camera at the seatback QR.", sub: "No app. No account. Just a code on the seat in front of them.", ms: 3200 },
  { journey: "A", step: "land", caption: "The QR opens mobile web in Safari — nothing to download.", sub: "The make-or-break moment, with the app-store gate removed.", ms: 3400 },
  { journey: "A", step: "auth", caption: "One tap sets up a wallet — passkey or email.", sub: "The same login fans already accept for Panthers tickets.", ms: 3200 },
  { journey: "A", step: "buy", caption: "They pick a token pack. The free beer is the hook.", sub: "Tokens are held, not spent — the beer is a welcome gift.", ms: 3400 },
  { journey: "A", step: "buy", payOpen: true, caption: "Apple Pay. Dollars in, in two seconds.", sub: "The wallet is created invisibly in the background.", ms: 3000 },
  { journey: "A", step: "processing", caption: "Wallet provisioned — no seed phrase, ever.", sub: "The word 'crypto' never appears on screen.", ms: 2200 },
  { journey: "A", step: "success", caption: "Tokens land. The fan is now a Tier 1 Panther.", sub: "A new, attributable fan relationship for the team.", ms: 3400 },
  { journey: "A", step: "reward", caption: "Their welcome beer, as a scannable voucher.", sub: "Shown at any stand — the loop pays off in seconds.", ms: 3200 },
  { journey: "A", step: "redeemed", caption: "Beer redeemed. The tokens stay in the wallet.", sub: "Scan to beer in under a minute.", ms: 3000 },
  { journey: "A", step: "refer", caption: "The viral loop: bring a friend, both get tokens.", sub: "Acquisition that compounds, seat by seat.", ms: 3400 },
  { journey: "A", step: "refer", shareOpen: true, caption: "Share the invite — Messages, link, anywhere.", sub: "", ms: 2600 },
  { journey: "A", step: "refer_reward", caption: "The friend joins. Both balances grow.", sub: "One scan becomes two, two become four.", ms: 3600 },
];

/* ---- tiny apple glyph for the Apple Pay button -------------------- */
function AppleMark({ size = 15, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22.773 22.773" fill={color} aria-hidden="true">
      <path d="M15.769 0c.053 0 .106 0 .162 0 .13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zM20.18 16.716c0 .016 0 .03 0 .045-.41 1.242-.995 2.305-1.708 3.293-.652.898-1.45 2.107-2.875 2.107-1.231 0-2.05-.791-3.311-.813-1.334-.022-2.07.682-3.29.834-.14 0-.279 0-.418 0-.896-.13-1.62-.84-2.148-1.48-1.554-1.89-2.756-4.331-2.978-7.452 0-.305 0-.61 0-.915.094-2.234 1.179-4.05 2.62-4.93.762-.467 1.81-.864 2.976-.685.5.077 1.011.249 1.459.419.424.164.954.455 1.456.439.34-.011.677-.188 1.02-.313 1.005-.363 1.99-.78 3.288-.584 1.561.236 2.668.931 3.352 2.004-1.32.84-2.364 2.105-2.187 4.266.158 1.963 1.299 3.111 2.752 3.428z"/>
    </svg>
  );
}

/* ---- deterministic faux QR --------------------------------------- */
function FauxQR({ size = 150 }) {
  const n = 25, cell = size / n;
  const grid = Array.from({ length: n }, () => Array(n).fill(false));
  const finder = (r0, c0) => {
    for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
      const edge = r === 0 || r === 6 || c === 0 || c === 6;
      const inner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
      grid[r0 + r][c0 + c] = edge || inner;
    }
  };
  finder(0, 0); finder(0, n - 7); finder(n - 7, 0);
  const inFinder = (r, c) =>
    (r < 8 && c < 8) || (r < 8 && c >= n - 8) || (r >= n - 8 && c < 8);
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    if (inFinder(r, c)) continue;
    grid[r][c] = ((r * 37 + c * 91 + r * c * 13) % 100) > 52;
  }
  const rects = [];
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    if (grid[r][c]) rects.push(
      <rect key={`${r}-${c}`} x={c * cell} y={r * cell} width={cell + 0.4} height={cell + 0.4} fill="#0B0E12" />
    );
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ background: "#fff" }} role="img" aria-label="QR code">
      {rects}
    </svg>
  );
}

/* ---- iPhone-ish status bar --------------------------------------- */
function StatusBar({ light = false }) {
  const fg = light ? "#1A1A1A" : "#FFFFFF";
  return (
    <div style={{ height: 42, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 22px", flexShrink: 0 }}>
      <span style={{ color: fg, fontWeight: 600, fontSize: 15, fontVariantNumeric: "tabular-nums" }}>3:25</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 1.5, height: 11 }}>
          {[5, 7.5, 10, 12].map((h, i) => (
            <div key={i} style={{ width: 3, height: h, background: fg, borderRadius: 1 }} />
          ))}
        </div>
        <Wifi size={15} color={fg} strokeWidth={2.4} />
        <div style={{ width: 24, height: 12, border: `1.5px solid ${fg}`, borderRadius: 3, padding: 1.5, display: "flex", alignItems: "center", opacity: 0.95 }}>
          <div style={{ flex: 1, height: "100%", background: fg, borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
export default function PanthersTokenPrototype() {
  const [mode, setMode] = useState("cover");      // cover | explore | autoplay | sidebyside
  const [journey, setJourney] = useState("B");    // 'A' no app · 'B' has app · 'R' returning
  const [step, setStep] = useState("seat");
  const [pack, setPack] = useState(PACKS[1]);
  const [payOpen, setPayOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [sceneIdx, setSceneIdx] = useState(0);
  const [sbsBeat, setSbsBeat] = useState(0);

  const start = (j) => {
    setJourney(j); setPayOpen(false); setShareOpen(false); setCopied(false);
    setPack(PACKS[1]); setStep("seat");
  };
  const go = (s) => setStep(s);
  const openPay = () => setPayOpen(true);
  const confirmPay = () => { setPayOpen(false); go("processing"); setTimeout(() => go(journey === "R" ? "r_success" : "success"), 1500); };
  const copyLink = () => { setCopied(true); setTimeout(() => setCopied(false), 1600); };
  const sendInvite = () => { setShareOpen(false); go("refer_sent"); setTimeout(() => go("refer_reward"), 2200); };
  const scanAdvance = () => go(journey === "A" ? "land" : journey === "R" ? "r_wallet" : "home");

  const openCover = () => { setMode("cover"); setPlaying(false); };
  const openExplore = (j) => { setMode("explore"); start(j); };
  const openAutoplay = () => { setMode("autoplay"); setSceneIdx(0); setPlaying(true); setPayOpen(false); setShareOpen(false); };
  const openSideBySide = () => { setMode("sidebyside"); setSbsBeat(0); setPlaying(false); setJourney("B"); setPack(PACKS[1]); };
  const replay = () => { setSceneIdx(0); setPlaying(true); };

  useEffect(() => {
    if (mode !== "autoplay") return;
    const sc = SCRIPT[sceneIdx];
    setJourney(sc.journey); setStep(sc.step);
    setPayOpen(!!sc.payOpen); setShareOpen(!!sc.shareOpen); setPack(PACKS[1]);
    if (!playing) return;
    const last = sceneIdx === SCRIPT.length - 1;
    const t = setTimeout(() => { last ? setPlaying(false) : setSceneIdx((i) => i + 1); }, sc.ms);
    return () => clearTimeout(t);
  }, [mode, sceneIdx, playing]);

  /* ---------- shared bodies (light theme) ------------------------- */
  const BuyBody = () => (
    <div style={{ padding: "20px 18px 28px" }}>
      <h2 style={{ ...display, fontSize: 23, color: TXT, margin: "0 0 4px" }}>{journey === "R" ? "Top up your tokens" : "Get your Panthers Token"}</h2>
      <p style={{ fontSize: 14.5, color: MUTED, margin: "0 0 18px", lineHeight: 1.45 }}>
        {journey === "R" ? "Add tokens, climb tiers, and keep the game-day perks coming." : "Buy in once, unlock your tier, and the first draft beer is on us."}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {PACKS.map((p) => {
          const on = pack.amount === p.amount;
          return (
            <button key={p.amount} className="tap" onClick={() => setPack(p)}
              style={{
                textAlign: "left", cursor: "pointer", borderRadius: 14, padding: "15px 16px",
                background: "#fff", border: on ? `2px solid ${BLUE}` : "2px solid #E2E2E2",
                display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative",
              }}>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: TXT }}>{p.tokens} Panthers Tokens</div>
                <div style={{ fontSize: 13, color: MUTED, marginTop: 2 }}>{p.label}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 19, fontWeight: 700, color: on ? BLUE : TXT }}>${p.amount}</span>
                <span style={{
                  width: 22, height: 22, borderRadius: 11, flexShrink: 0,
                  border: on ? "none" : "2px solid #CFCFCF", background: on ? BLUE : "transparent",
                  display: "grid", placeItems: "center",
                }}>{on && <Check size={14} color="#fff" strokeWidth={3} />}</span>
              </div>
              {p.popular && (
                <span style={{ position: "absolute", top: -9, right: 14, background: BLUE, color: "#fff", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 7 }}>Most popular</span>
              )}
            </button>
          );
        })}
      </div>

      {journey === "R" ? (
        <div style={{ display: "flex", gap: 11, alignItems: "center", background: "#F1ECFB", border: "1px solid #DCD0F2", borderRadius: 12, padding: "12px 14px", margin: "16px 0 18px" }}>
          <TrendingUp size={24} color="#5B3F9E" strokeWidth={2} style={{ flexShrink: 0 }} />
          <div style={{ fontSize: 13.5, color: "#4A2F86", lineHeight: 1.4 }}>
            You're <b>{Math.max(0, 50 - RETURN_BAL)} tokens</b> from Tier 2. This pack {pack.tokens >= 50 - RETURN_BAL ? "gets you there." : "moves you closer."}
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", gap: 11, alignItems: "center", background: "#EAF4FB", border: "1px solid #CDE6F6", borderRadius: 12, padding: "12px 14px", margin: "16px 0 18px" }}>
          <Beer size={26} color={BLUE_DK} strokeWidth={2} style={{ flexShrink: 0 }} />
          <div style={{ fontSize: 13.5, color: "#1B5A82", lineHeight: 1.4 }}>
            <b>Welcome reward:</b> a free draft beer, redeemable today. Your tokens stay in your wallet.
          </div>
        </div>
      )}

      <button className="tap" onClick={openPay}
        style={{ width: "100%", border: "none", cursor: "pointer", background: "#000", color: "#fff", borderRadius: 13, height: 52, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 17, fontWeight: 600 }}>
        Buy with <AppleMark size={16} /> Pay
      </button>
      <div style={{ textAlign: "center", marginTop: 12, fontSize: 11.5, color: "#9AA0A6" }}>
        <Lock size={11} style={{ verticalAlign: "-1px", marginRight: 4 }} />
        Powered by Republic · ${pack.amount} for {pack.tokens} tokens
      </div>
    </div>
  );

  const Processing = () => (
    <div style={{ padding: "0 18px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18, textAlign: "center" }}>
      <div className="spin" style={{ width: 46, height: 46, borderRadius: 23, border: `4px solid #DDE4EA`, borderTopColor: BLUE }} />
      <div>
        <div style={{ fontSize: 17, fontWeight: 700, color: TXT }}>{journey === "R" ? "Adding your tokens" : "Setting up your wallet"}</div>
        <div style={{ fontSize: 13.5, color: MUTED, marginTop: 4 }}>{journey === "R" ? "Confirming with Apple Pay — one sec." : "This takes a second — no app store, no passwords."}</div>
      </div>
    </div>
  );

  const SuccessBody = () => (
    <div style={{ padding: "22px 18px 28px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 18 }}>
        <div style={{ width: 60, height: 60, borderRadius: 30, background: GREEN, display: "grid", placeItems: "center", marginBottom: 12 }}>
          <Check size={34} color="#fff" strokeWidth={3} />
        </div>
        <h2 style={{ ...display, fontSize: 22, color: TXT, margin: 0 }}>You're in</h2>
        <p style={{ fontSize: 14, color: MUTED, margin: "4px 0 0" }}>Welcome to the Roaring Riot.</p>
      </div>

      <div style={{ background: BLUE, borderRadius: 16, padding: "18px 18px", color: "#fff", marginBottom: 14 }}>
        <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 600 }}>Your Panthers Tokens</div>
        <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, marginTop: 2 }}>{pack.tokens}.00</div>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 10, background: "rgba(255,255,255,0.16)", borderRadius: 9, padding: "7px 11px", width: "fit-content" }}>
          <BadgeCheck size={17} color="#fff" />
          <span style={{ fontSize: 13.5, fontWeight: 700 }}>Tier 1 · Roaring Riot</span>
        </div>
        <div style={{ marginTop: 12 }}>
          <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.22)" }}>
            <div style={{ width: `${Math.min(100, (pack.tokens / 50) * 100)}%`, height: "100%", borderRadius: 3, background: "#fff" }} />
          </div>
          <div style={{ fontSize: 11.5, opacity: 0.85, marginTop: 6 }}>{Math.max(0, 50 - pack.tokens)} tokens to Tier 2</div>
        </div>
      </div>

      <button className="tap" onClick={() => go("reward")}
        style={{ width: "100%", textAlign: "left", cursor: "pointer", border: "2px solid #F0C26B", background: "#FFF8EC", borderRadius: 14, padding: "15px 16px", display: "flex", alignItems: "center", gap: 13 }}>
        <div style={{ width: 42, height: 42, borderRadius: 10, background: "#F6E2B0", display: "grid", placeItems: "center", flexShrink: 0 }}>
          <Gift size={22} color="#8A6A1A" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15.5, fontWeight: 700, color: TXT }}>Welcome reward unlocked</div>
          <div style={{ fontSize: 13, color: "#8A6A1A", marginTop: 1 }}>Free draft beer · tap to view</div>
        </div>
        <ChevronRight size={20} color="#8A6A1A" />
      </button>

      {journey === "A" && (
        <div style={{ textAlign: "center", marginTop: 18, fontSize: 13, color: MUTED, lineHeight: 1.5 }}>
          Want to track your tier and earn more?<br />
          <span style={{ color: BLUE, fontWeight: 600 }}>Add Panthers to your home screen</span>
        </div>
      )}
    </div>
  );

  const RewardBody = () => (
    <div style={{ padding: "18px 18px 28px" }}>
      <h2 style={{ ...display, fontSize: 20, color: TXT, margin: "0 0 2px" }}>Free Draft Beer</h2>
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 16px" }}>Welcome reward · show this at any concession stand</p>
      <div style={{ background: "#fff", borderRadius: 16, padding: "22px 18px", display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #E4E4E4" }}>
        <FauxQR size={168} />
        <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: "0.12em", marginTop: 16, color: TXT, fontVariantNumeric: "tabular-nums" }}>8463 1863 3565 3890</div>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12, color: BLUE_DK }}>
          <Beer size={18} /><span style={{ fontSize: 14, fontWeight: 600 }}>1 Draft Beer · 16 oz</span>
        </div>
      </div>
      <div style={{ fontSize: 12, color: MUTED, textAlign: "center", margin: "14px 0 18px" }}>
        Single-use · valid today at Bank of America Stadium
      </div>
      <button className="tap" onClick={() => go(journey === "R" ? "r_redeemed" : "redeemed")}
        style={{ width: "100%", border: "none", cursor: "pointer", background: BLUE, color: "#fff", borderRadius: 13, height: 52, fontSize: 17, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <ScanLine size={20} /> Staff: scan to redeem
      </button>
    </div>
  );

  const RedeemedBody = () => (
    <div style={{ padding: "0 22px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 6 }}>
      <div style={{ fontSize: 56 }}>🍺</div>
      <h2 style={{ ...display, fontSize: 24, color: TXT, margin: "8px 0 0" }}>Beer's on us</h2>
      <p style={{ fontSize: 15, color: MUTED, margin: "6px 0 0", lineHeight: 1.5 }}>
        Enjoy it. Your <b style={{ color: TXT }}>{pack.tokens} tokens</b> are safe in your wallet — and you're a Tier 1 Panther.
      </p>
      <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
        <button className="tap" onClick={() => go("refer")} style={{ width: "100%", border: `2px solid ${BLUE}`, background: "#fff", color: BLUE, borderRadius: 13, height: 48, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Users size={18} /> Bring a friend, you both get tokens
        </button>
        <div style={{ fontSize: 18, fontWeight: 800, color: SILVER, letterSpacing: "0.04em", marginTop: 6, ...display }}>Keep Pounding</div>
      </div>
    </div>
  );

  /* ---------- chrome wrappers ------------------------------------- */
  const LightHeader = ({ onBack }) => (
    <div style={{ background: BLUE, flexShrink: 0 }}>
      <StatusBar />
      <div style={{ height: 46, display: "flex", alignItems: "center", padding: "0 14px" }}>
        {onBack ? (
          <button className="tap" onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", color: "#fff", fontSize: 17, fontWeight: 600 }}>
            <ChevronLeft size={22} /> Back
          </button>
        ) : <span style={{ color: "#fff", fontSize: 17, fontWeight: 700, paddingLeft: 4 }}>Wallet</span>}
      </div>
    </div>
  );

  const BrowserHeader = () => (
    <div style={{ background: "#F2F2F2", flexShrink: 0, borderBottom: "1px solid #DADADA" }}>
      <StatusBar light />
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#E3E3E3", borderRadius: 9, padding: "6px 14px", width: "82%", justifyContent: "center" }}>
          <Lock size={12} color="#555" />
          <span style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>wallet.panthers.com</span>
        </div>
      </div>
    </div>
  );

  const BottomNav = () => {
    const items = [
      [Home, "Home", true], [Ticket, "Tickets", false], [Calendar, "Schedule", false],
      [Users, "Team", false], [Menu, "More", false],
    ];
    return (
      <div style={{ background: BLUE, flexShrink: 0, display: "flex", padding: "8px 6px 12px" }}>
        {items.map(([Icon, label, active], i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, opacity: active ? 1 : 0.62 }}>
            <Icon size={22} color="#fff" strokeWidth={active ? 2.4 : 2} />
            <span style={{ fontSize: 11, color: "#fff", fontWeight: active ? 600 : 400 }}>{label}</span>
          </div>
        ))}
      </div>
    );
  };

  /* ---------- native home (Journey B entry) ----------------------- */
  const NativeHome = () => (
    <>
      <div style={{ background: BLUE, flexShrink: 0 }}>
        <StatusBar />
        <div style={{ height: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <span style={{ ...display, color: "#fff", fontSize: 19, fontStyle: "italic" }}>Carolina Panthers</span>
          <span style={{ width: 1, height: 22, background: "rgba(255,255,255,0.5)" }} />
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 600, opacity: 0.9 }}>innova</span>
        </div>
      </div>
      <div style={{ background: INK, flex: 1, overflowY: "auto" }}>
        <div style={{ display: "flex", gap: 26, padding: "14px 18px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {["Home", "Schedule", "Hall of Fame", "Draft"].map((t, i) => (
            <span key={t} style={{ ...display, fontSize: 15, color: i === 0 ? BLUE : "#5A5F66", borderBottom: i === 0 ? `3px solid ${BLUE}` : "none", paddingBottom: 8, whiteSpace: "nowrap" }}>{t}</span>
          ))}
        </div>

        {/* Republic token hero */}
        <div style={{ padding: 16 }}>
          <button className="tap" onClick={() => go("buy")}
            style={{ width: "100%", textAlign: "left", cursor: "pointer", border: "none", borderRadius: 16, overflow: "hidden", background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DK} 100%)`, padding: "20px 18px", color: "#fff", position: "relative" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.85 }}>New · This season</div>
            <div style={{ ...display, fontSize: 25, lineHeight: 1.05, margin: "8px 0 6px" }}>Get your<br />Panthers Token</div>
            <div style={{ fontSize: 13.5, opacity: 0.92, lineHeight: 1.4, maxWidth: 230 }}>Buy in, unlock your tier, and grab a free draft beer — on us.</div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, background: "#fff", color: BLUE_DK, borderRadius: 9, padding: "9px 15px", fontSize: 14, fontWeight: 700 }}>
              Get started <ChevronRight size={17} />
            </div>
            <Beer size={120} color="#fff" strokeWidth={1} style={{ position: "absolute", right: -18, bottom: -22, opacity: 0.12 }} />
          </button>
        </div>

        {/* faux news to feel real */}
        <div style={{ padding: "4px 16px 20px" }}>
          <div style={{ ...display, color: BLUE, fontSize: 18, marginBottom: 12 }}>Latest News</div>
          {[["Bryce Young comes in at No. 98 on the NFL Top 100", "Article"],
            ["Happy Half Hour Ep. 205: Captain America", "Audio"]].map(([t, k]) => (
            <div key={t} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "center" }}>
              <div style={{ width: 92, height: 60, borderRadius: 8, background: "#23272E", flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: 10.5, color: "#9AA0A6", border: "1px solid #3A3F46", borderRadius: 6, padding: "2px 7px" }}>{k}</span>
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginTop: 6, lineHeight: 1.3 }}>{t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );

  /* ---------- web landing + auth (Journey A) ---------------------- */
  const WebLanding = () => (
    <>
      <BrowserHeader />
      <div style={{ background: LIGHTBG, flex: 1, overflowY: "auto" }}>
        <div style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DK} 100%)`, padding: "26px 20px 30px", color: "#fff" }}>
          <span style={{ ...display, fontSize: 16, fontStyle: "italic" }}>Carolina Panthers</span>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, background: "rgba(255,255,255,0.18)", borderRadius: 8, padding: "5px 11px", fontSize: 12.5, fontWeight: 600 }}>
            📍 You're in Section 112
          </div>
          <div style={{ ...display, fontSize: 27, lineHeight: 1.08, margin: "14px 0 8px" }}>Free draft beer,<br />on the house</div>
          <div style={{ fontSize: 14.5, opacity: 0.93, lineHeight: 1.45 }}>Grab your first Panthers Token and we'll pour you one. No app download needed.</div>
        </div>
        <div style={{ padding: "22px 20px" }}>
          <button className="tap" onClick={() => go("auth")}
            style={{ width: "100%", border: "none", cursor: "pointer", background: BLUE, color: "#fff", borderRadius: 13, height: 54, fontSize: 17, fontWeight: 700 }}>
            Get started
          </button>
          <div style={{ display: "flex", justifyContent: "center", gap: 22, marginTop: 22 }}>
            {[[Beer, "Free beer"], [BadgeCheck, "Unlock tier"], [Wallet, "Your wallet"]].map(([Icon, l]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "#E1EFF9", display: "grid", placeItems: "center" }}>
                  <Icon size={22} color={BLUE_DK} />
                </div>
                <span style={{ fontSize: 11.5, color: MUTED }}>{l}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 26, fontSize: 11.5, color: "#9AA0A6" }}>
            <Lock size={11} style={{ verticalAlign: "-1px", marginRight: 4 }} /> Powered by Republic
          </div>
        </div>
      </div>
    </>
  );

  const WebAuth = () => (
    <>
      <BrowserHeader />
      <div style={{ background: "#fff", flex: 1, overflowY: "auto", padding: "30px 24px" }}>
        <h2 style={{ ...display, fontSize: 22, color: TXT, margin: "0 0 8px", lineHeight: 1.15 }}>Continue with Carolina Panthers</h2>
        <p style={{ fontSize: 14.5, color: MUTED, margin: "0 0 26px" }}>One tap to set up your wallet. We'll never ask for a password.</p>
        <button className="tap" onClick={() => go("buy")}
          style={{ width: "100%", border: "1.5px solid #C9C9C9", background: "#fff", borderRadius: 12, height: 56, fontSize: 16, fontWeight: 600, color: TXT, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
          <BadgeCheck size={20} color={TXT} /> Continue with a passkey
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "4px 0 16px", color: "#AAA" }}>
          <div style={{ flex: 1, height: 1, background: "#E2E2E2" }} /><span style={{ fontSize: 12, fontWeight: 600 }}>OR</span><div style={{ flex: 1, height: 1, background: "#E2E2E2" }} />
        </div>
        <label style={{ fontSize: 13, color: MUTED, fontWeight: 500 }}>Email address</label>
        <input placeholder="you@email.com" style={{ width: "100%", marginTop: 8, boxSizing: "border-box", border: "1.5px solid #C9C9C9", borderRadius: 10, height: 50, padding: "0 14px", fontSize: 16, fontFamily: FONT, outline: "none" }} />
        <button className="tap" onClick={() => go("buy")}
          style={{ width: "100%", marginTop: 18, border: "none", cursor: "pointer", background: BLUE, color: "#fff", borderRadius: 12, height: 52, fontSize: 16, fontWeight: 700 }}>
          Continue
        </button>
      </div>
    </>
  );

  /* ---------- Apple Pay sheet ------------------------------------- */
  const PaySheet = () => (
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "flex-end", zIndex: 20 }} onClick={() => setPayOpen(false)}>
      <div className="sheet" onClick={(e) => e.stopPropagation()} style={{ width: "100%", background: "#1C1C1E", borderRadius: "20px 20px 0 0", padding: "18px 18px 26px", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 19, fontWeight: 600 }}><AppleMark size={19} /> Pay</div>
          <button className="tap" onClick={() => setPayOpen(false)} style={{ background: "#3A3A3C", border: "none", borderRadius: 15, width: 30, height: 30, display: "grid", placeItems: "center", cursor: "pointer" }}>
            <X size={16} color="#aaa" />
          </button>
        </div>
        <div style={{ background: "#2C2C2E", borderRadius: 12, padding: "14px 15px", display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div style={{ width: 34, height: 22, borderRadius: 4, background: "linear-gradient(135deg,#1A4DA0,#2E7BD6)", flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14.5, fontWeight: 600 }}>Panthers Visa</div>
            <div style={{ fontSize: 12.5, color: "#9A9A9E" }}>•••• 6411</div>
          </div>
          <Check size={18} color={BLUE} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 4px", borderTop: "1px solid #2C2C2E", fontSize: 15 }}>
          <span style={{ color: "#9A9A9E" }}>Panthers Tokens × {pack.tokens}</span>
          <span style={{ fontWeight: 600 }}>${pack.amount}.00</span>
        </div>
        <button className="tap" onClick={confirmPay}
          style={{ width: "100%", marginTop: 8, border: "none", cursor: "pointer", background: "#fff", color: "#000", borderRadius: 12, height: 52, fontSize: 17, fontWeight: 700 }}>
          Pay ${pack.amount}.00
        </button>
        <div style={{ textAlign: "center", fontSize: 11.5, color: "#7A7A7E", marginTop: 12 }}>Confirm with side button</div>
      </div>
    </div>
  );

  /* ---------- in-stadium cold open: seatback QR scan ------------- */
  const SeatScene = ({ jOverride, interactive = true } = {}) => {
    return (
    <div onClick={interactive ? scanAdvance : undefined} style={{ position: "relative", flex: 1, background: "#05070A", display: "flex", flexDirection: "column", cursor: interactive ? "pointer" : "default", overflow: "hidden" }}>
      <StatusBar />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2px 20px 6px", color: "#fff" }}>
        <Zap size={17} color="#fff" strokeWidth={2} style={{ opacity: 0.85 }} />
        <span style={{ fontSize: 12.5, opacity: 0.7, letterSpacing: "0.08em" }}>SCAN</span>
        <SwitchCamera size={18} color="#fff" strokeWidth={2} style={{ opacity: 0.85 }} />
      </div>

      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {/* distant stands + field */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#0B1B2E 0%,#06080C 44%)" }} />
        <div style={{ position: "absolute", top: 14, left: 0, right: 0, height: 9, background: "#1C5E2A", opacity: 0.45, filter: "blur(1px)" }} />
        {[0, 1, 2].map((r) => (
          <div key={r} style={{ position: "absolute", top: 28 + r * 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 5, opacity: 0.16 - r * 0.04, filter: "blur(0.5px)" }}>
            {Array.from({ length: 13 }).map((_, i) => (<div key={i} style={{ width: 9, height: 5, borderRadius: 2, background: "#7FB0D6" }} />))}
          </div>
        ))}

        {/* seatback in front */}
        <div style={{ position: "absolute", left: -30, right: -30, bottom: -40, height: "60%", background: "linear-gradient(180deg,#14181D 0%,#0A0D11 100%)", borderRadius: "44px 44px 0 0", borderTop: "2px solid #23282E" }} />
        <div style={{ position: "absolute", left: 30, bottom: 30, background: "#1B1F25", border: "1px solid #2C323A", borderRadius: 6, padding: "5px 10px", color: SILVER, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>SEC 112 · ROW F</div>
        <div style={{ position: "absolute", right: 30, bottom: 26, width: 44, height: 17, borderRadius: 9, border: "2px solid #2C323A", background: "#0E1115" }} />

        {/* placard / decal mounted on the seat in front */}
        <div style={{ position: "absolute", left: "50%", top: "39%", transform: "translateX(-50%) rotate(-2.2deg)", width: 230, background: "#fff", borderRadius: 16, padding: "16px 16px 15px", boxShadow: "0 18px 44px rgba(0,0,0,0.55)", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, marginBottom: 8 }}>
            <span style={{ ...display, fontSize: 12.5, color: BLUE, fontStyle: "italic" }}>Carolina Panthers</span>
            <span style={{ fontSize: 9, color: MUTED, fontWeight: 700, letterSpacing: "0.06em" }}>× REPUBLIC</span>
          </div>
          <div style={{ ...display, fontSize: 20, color: TXT, lineHeight: 1.04 }}>Free Draft Beer</div>
          <div style={{ fontSize: 11.5, color: MUTED, margin: "3px 0 11px" }}>Scan to claim · 1 per fan</div>
          <div style={{ position: "relative", width: 130, margin: "0 auto", border: "3px solid #FFD60A", borderRadius: 8, padding: 5, background: "#fff", overflow: "hidden" }}>
            <FauxQR size={114} />
            <div className="scanline" style={{ position: "absolute", left: 6, right: 6, top: 4, height: 2, background: "#FFD60A", boxShadow: "0 0 8px #FFD60A" }} />
          </div>
        </div>

        {/* viewfinder hint */}
        <div style={{ position: "absolute", inset: 14, border: "1.5px solid rgba(255,255,255,0.14)", borderRadius: 18, pointerEvents: "none" }} />
      </div>

      {/* scan hint */}
      <div style={{ padding: "15px 16px 20px", background: "#000", textAlign: "center" }}>
        <div style={{ color: "#fff", opacity: 0.5, fontSize: 12 }}>QR code detected</div>
      </div>
    </div>
  );
  };

  /* ---------- referral flow -------------------------------------- */
  const ReferBody = () => (
    <div style={{ padding: "20px 18px 28px" }}>
      <h2 style={{ ...display, fontSize: 22, color: TXT, margin: "0 0 4px" }}>Bring a friend</h2>
      <p style={{ fontSize: 14.5, color: MUTED, margin: "0 0 18px", lineHeight: 1.45 }}>
        When your friend buys in, you both get <b style={{ color: TXT }}>5 bonus tokens</b> — and their first draft beer's on us too.
      </p>

      <div style={{ background: BLUE, borderRadius: 16, padding: "20px 18px", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 18 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 46, height: 46, borderRadius: 23, background: "rgba(255,255,255,0.18)", display: "grid", placeItems: "center", margin: "0 auto 7px", fontSize: 22 }}>🧑</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>You</div>
          <div style={{ fontSize: 12, opacity: 0.85 }}>+5 tokens</div>
        </div>
        <Plus size={20} color="#fff" style={{ opacity: 0.7 }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 46, height: 46, borderRadius: 23, background: "rgba(255,255,255,0.18)", display: "grid", placeItems: "center", margin: "0 auto 7px", fontSize: 22 }}>👋</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>Friend</div>
          <div style={{ fontSize: 12, opacity: 0.85 }}>+5 tokens</div>
        </div>
      </div>

      <label style={{ fontSize: 13, color: MUTED, fontWeight: 500 }}>Your invite link</label>
      <div style={{ display: "flex", gap: 10, marginTop: 8, marginBottom: 18 }}>
        <div style={{ flex: 1, border: "1.5px solid #D5D5D5", borderRadius: 11, height: 50, display: "flex", alignItems: "center", padding: "0 14px", fontSize: 15, color: TXT, background: "#fff", whiteSpace: "nowrap", overflow: "hidden" }}>panthers.co/r/anna7k</div>
        <button className="tap" onClick={copyLink} style={{ border: `1.5px solid ${BLUE}`, background: copied ? BLUE : "#fff", color: copied ? "#fff" : BLUE, borderRadius: 11, padding: "0 15px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
          {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}
        </button>
      </div>

      <button className="tap" onClick={() => setShareOpen(true)} style={{ width: "100%", border: "none", cursor: "pointer", background: BLUE, color: "#fff", borderRadius: 13, height: 52, fontSize: 17, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 9 }}>
        <Share2 size={19} /> Share invite
      </button>
    </div>
  );

  const ReferSentBody = () => (
    <div style={{ padding: "0 22px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 18 }}>
      <div className="spin" style={{ width: 46, height: 46, borderRadius: 23, border: "4px solid #DDE4EA", borderTopColor: BLUE }} />
      <div>
        <div style={{ fontSize: 18, fontWeight: 700, color: TXT }}>Invite sent</div>
        <div style={{ fontSize: 14, color: MUTED, marginTop: 6, lineHeight: 1.5, maxWidth: 250 }}>Waiting for your friend to join. We'll drop your bonus tokens the moment they buy in.</div>
      </div>
    </div>
  );

  const ReferRewardBody = () => (
    <div style={{ padding: "22px 18px 28px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 18 }}>
        <div style={{ fontSize: 52 }}>🎉</div>
        <h2 style={{ ...display, fontSize: 22, color: TXT, margin: "6px 0 0" }}>Your friend joined</h2>
        <p style={{ fontSize: 14, color: MUTED, margin: "6px 0 0", lineHeight: 1.5, maxWidth: 280 }}>You both earned 5 bonus tokens. Their welcome beer is waiting at the stand.</p>
      </div>
      <div style={{ background: BLUE, borderRadius: 16, padding: "18px", color: "#fff", marginBottom: 16 }}>
        <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 600 }}>New balance</div>
        <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, marginTop: 2 }}>{pack.tokens + 5}.00</div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, background: "rgba(255,255,255,0.16)", borderRadius: 9, padding: "6px 11px" }}>
          <Plus size={15} color="#fff" /><span style={{ fontSize: 13, fontWeight: 700 }}>5 referral bonus</span>
        </div>
      </div>
      <button className="tap" onClick={() => go("refer")} style={{ width: "100%", border: `2px solid ${BLUE}`, background: "#fff", color: BLUE, borderRadius: 13, height: 50, fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <Users size={18} /> Invite another friend
      </button>
      <button className="tap" onClick={() => go(journey === "R" ? "r_wallet" : "redeemed")} style={{ width: "100%", border: "none", background: BLUE, color: "#fff", borderRadius: 13, height: 52, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>Done</button>
    </div>
  );

  const ShareSheet = () => {
    const targets = [["Messages", "#34C759", MessageCircle], ["WhatsApp", "#25D366", MessageCircle], ["Copy Link", "#8E8E93", Link2], ["More", "#C7C7CC", Share2]];
    return (
      <div onClick={() => setShareOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-end", zIndex: 20 }}>
        <div className="sheet" onClick={(e) => e.stopPropagation()} style={{ width: "100%", background: "#F2F2F7", borderRadius: "16px 16px 0 0", padding: "14px 14px 24px" }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 9, background: BLUE, display: "grid", placeItems: "center", flexShrink: 0 }}><Beer size={20} color="#fff" /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: TXT }}>Join me on Panthers Token</div>
              <div style={{ fontSize: 12.5, color: MUTED, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>panthers.co/r/anna7k</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", padding: "4px 2px 10px" }}>
            {targets.map(([name, color, Icon]) => (
              <button key={name} className="tap" onClick={sendInvite} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0, width: 62 }}>
                <div style={{ width: 54, height: 54, borderRadius: 27, background: color, display: "grid", placeItems: "center" }}><Icon size={24} color="#fff" /></div>
                <span style={{ fontSize: 11.5, color: TXT, textAlign: "center" }}>{name}</span>
              </button>
            ))}
          </div>
          <button className="tap" onClick={() => setShareOpen(false)} style={{ width: "100%", marginTop: 8, border: "none", background: "#fff", color: BLUE, borderRadius: 13, height: 50, fontSize: 16, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
        </div>
      </div>
    );
  };

  /* ---------- returning fan (Journey R) -------------------------- */
  const TIER1_PERKS = ["10% off team store merch", "Members-only locker-room content", "Early access to single-game tickets"];
  const TIER2_PERKS = ["Everything in Tier 1", "Discounted club-level upgrades", "Skip-the-line concession lane", "Entry into signed-jersey drops"];

  const RWallet = () => {
    const toNext = Math.max(0, 50 - RETURN_BAL);
    return (
      <>
        <div style={{ background: BLUE, flexShrink: 0 }}>
          <StatusBar />
          <div style={{ height: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px" }}>
            <span style={{ color: "#fff", fontSize: 19, fontWeight: 700 }}>Wallet</span>
            <div style={{ width: 32, height: 32, borderRadius: 16, background: "rgba(255,255,255,0.22)", display: "grid", placeItems: "center", color: "#fff", fontSize: 14, fontWeight: 700 }}>A</div>
          </div>
        </div>
        <div style={{ background: LIGHTBG, flex: 1, overflowY: "auto", padding: "16px 16px 22px" }}>
          <div style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DK} 100%)`, borderRadius: 18, padding: "18px 18px 20px", color: "#fff" }}>
            <div style={{ fontSize: 13.5, opacity: 0.9, fontWeight: 600 }}>Welcome back, Anna</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
              <span style={{ fontSize: 42, fontWeight: 800, lineHeight: 1 }}>{RETURN_BAL}.00</span>
              <span style={{ fontSize: 14, fontWeight: 600, opacity: 0.9 }}>Panthers Tokens</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 12, background: "rgba(255,255,255,0.16)", borderRadius: 9, padding: "7px 11px" }}>
              <BadgeCheck size={16} color="#fff" /><span style={{ fontSize: 13, fontWeight: 700 }}>Tier 1 · Roaring Riot</span>
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.22)" }}>
                <div style={{ width: `${Math.min(100, (RETURN_BAL / 50) * 100)}%`, height: "100%", borderRadius: 3, background: "#fff" }} />
              </div>
              <div style={{ fontSize: 11.5, opacity: 0.9, marginTop: 6 }}>{toNext} tokens to Tier 2 · Keep Pounding Club</div>
            </div>
          </div>

          <div style={{ ...display, fontSize: 12, color: MUTED, letterSpacing: "0.06em", margin: "20px 2px 9px" }}>Today at the stadium</div>
          <button className="tap" onClick={() => go("reward")}
            style={{ width: "100%", textAlign: "left", cursor: "pointer", border: "2px solid #F0C26B", background: "#FFF8EC", borderRadius: 14, padding: "14px 15px", display: "flex", alignItems: "center", gap: 13 }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: "#F6E2B0", display: "grid", placeItems: "center", flexShrink: 0 }}><Beer size={22} color="#8A6A1A" /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: TXT }}>Game-day reward</div>
              <div style={{ fontSize: 12.5, color: "#8A6A1A", marginTop: 1 }}>Free draft beer · tap to claim</div>
            </div>
            <ChevronRight size={20} color="#8A6A1A" />
          </button>

          <button className="tap" onClick={() => go("buy")}
            style={{ width: "100%", marginTop: 11, border: "none", cursor: "pointer", background: BLUE, color: "#fff", borderRadius: 13, height: 50, fontSize: 15.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <Plus size={18} /> Buy more tokens
          </button>

          <div style={{ ...display, fontSize: 12, color: MUTED, letterSpacing: "0.06em", margin: "20px 2px 9px" }}>Your Tier 1 perks</div>
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #E4E4E4", overflow: "hidden" }}>
            {TIER1_PERKS.map((p, i) => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: 11, padding: "13px 15px", borderTop: i ? "1px solid #EEE" : "none" }}>
                <Check size={17} color={GREEN} strokeWidth={3} /><span style={{ fontSize: 14, color: TXT }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
        <BottomNav />
      </>
    );
  };

  const RebuySuccessBody = () => {
    const total = RETURN_BAL + pack.tokens;
    const tier2 = total >= 50;
    return (
      <div style={{ padding: "22px 18px 28px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 18 }}>
          <div style={{ width: 62, height: 62, borderRadius: 31, background: tier2 ? "#7A5BBE" : GREEN, display: "grid", placeItems: "center", marginBottom: 12 }}>
            {tier2 ? <Crown size={32} color="#fff" /> : <Check size={34} color="#fff" strokeWidth={3} />}
          </div>
          <h2 style={{ ...display, fontSize: 22, color: TXT, margin: 0 }}>{tier2 ? "Tier 2 unlocked" : "Tokens added"}</h2>
          <p style={{ fontSize: 14, color: MUTED, margin: "4px 0 0" }}>{tier2 ? "Welcome to the Keep Pounding Club." : `${50 - total} tokens to the Keep Pounding Club.`}</p>
        </div>

        <div style={{ background: tier2 ? "linear-gradient(135deg,#7A5BBE,#5B3F9E)" : BLUE, borderRadius: 16, padding: "18px", color: "#fff", marginBottom: 16 }}>
          <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 600 }}>New balance</div>
          <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, marginTop: 2 }}>{total}.00</div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 10, background: "rgba(255,255,255,0.18)", borderRadius: 9, padding: "7px 11px" }}>
            {tier2 ? <Crown size={16} color="#fff" /> : <BadgeCheck size={16} color="#fff" />}
            <span style={{ fontSize: 13.5, fontWeight: 700 }}>{tier2 ? "Tier 2 · Keep Pounding Club" : "Tier 1 · Roaring Riot"}</span>
          </div>
        </div>

        {tier2 && (
          <div style={{ background: "#F6F2FC", border: "1px solid #E0D5F2", borderRadius: 14, padding: "14px 16px", marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#4A2F86", marginBottom: 9 }}>Newly unlocked</div>
            {TIER2_PERKS.slice(1).map((p) => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 7 }}>
                <Crown size={14} color="#7A5BBE" /><span style={{ fontSize: 13.5, color: "#4A2F86" }}>{p}</span>
              </div>
            ))}
          </div>
        )}

        <button className="tap" onClick={() => go("r_wallet")} style={{ width: "100%", border: "none", background: BLUE, color: "#fff", borderRadius: 13, height: 52, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>Back to wallet</button>
      </div>
    );
  };

  const RRedeemedBody = () => (
    <div style={{ padding: "0 22px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 6 }}>
      <div style={{ fontSize: 56 }}>🍺</div>
      <h2 style={{ ...display, fontSize: 24, color: TXT, margin: "8px 0 0" }}>Beer's on us</h2>
      <p style={{ fontSize: 15, color: MUTED, margin: "6px 0 0", lineHeight: 1.5 }}>
        Enjoy the game, Anna. Your <b style={{ color: TXT }}>{RETURN_BAL} tokens</b> are safe — Tier 2 is just {Math.max(0, 50 - RETURN_BAL)} away.
      </p>
      <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
        <button className="tap" onClick={() => go("refer")} style={{ width: "100%", border: `2px solid ${BLUE}`, background: "#fff", color: BLUE, borderRadius: 13, height: 48, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Users size={18} /> Bring a friend, you both get tokens
        </button>
        <button className="tap" onClick={() => go("r_wallet")} style={{ width: "100%", border: "none", background: BLUE, color: "#fff", borderRadius: 13, height: 50, fontSize: 15.5, fontWeight: 700, cursor: "pointer" }}>Back to wallet</button>
      </div>
    </div>
  );

  /* ---------- router ---------------------------------------------- */
  const renderInner = () => {
    if (step === "seat") return <SeatScene />;
    if (journey === "B" && step === "home") return <NativeHome />;
    if (journey === "A" && step === "land") return <WebLanding />;
    if (journey === "A" && step === "auth") return <WebAuth />;
    if (journey === "R" && step === "r_wallet") return <RWallet />;

    const back = {
      buy: journey === "A" ? "land" : journey === "R" ? "r_wallet" : "home",
      reward: journey === "R" ? "r_wallet" : "success",
      refer: journey === "R" ? "r_redeemed" : "redeemed",
    }[step];

    const body =
      step === "buy" ? <BuyBody /> :
      step === "processing" ? <Processing /> :
      step === "success" ? <SuccessBody /> :
      step === "reward" ? <RewardBody /> :
      step === "redeemed" ? <RedeemedBody /> :
      step === "refer" ? <ReferBody /> :
      step === "refer_sent" ? <ReferSentBody /> :
      step === "refer_reward" ? <ReferRewardBody /> :
      step === "r_success" ? <RebuySuccessBody /> :
      step === "r_redeemed" ? <RRedeemedBody /> : null;

    return (
      <>
        {journey === "A" ? <BrowserHeader /> : <LightHeader onBack={back ? () => go(back) : null} />}
        <div style={{ background: LIGHTBG, flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {body}
        </div>
      </>
    );
  };

  /* ---------- phone wrappers ------------------------------------- */
  const Phone = ({ children }) => (
    <div style={{ width: 384, height: 770, background: "#000", borderRadius: 46, padding: 11, boxShadow: "0 18px 50px rgba(0,0,0,0.28)" }}>
      <div className="ptp-screen" style={{ width: "100%", height: "100%", borderRadius: 36, overflow: "hidden", background: LIGHTBG, display: "flex", flexDirection: "column", position: "relative" }}>
        {children}
      </div>
    </div>
  );

  const ScaledPhone = ({ children, scale = 0.56 }) => (
    <div style={{ width: 384 * scale, height: 770 * scale, flexShrink: 0 }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}><Phone>{children}</Phone></div>
    </div>
  );

  const MainPhone = () => (
    <Phone>
      {renderInner()}
      {payOpen && <PaySheet />}
      {shareOpen && <ShareSheet />}
    </Phone>
  );

  /* ---------- pitch chrome --------------------------------------- */
  const PitchBar = ({ title }) => (
    <div style={{ width: "100%", maxWidth: 384, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <button className="tap" onClick={openCover} style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#fff", border: "1px solid #CBD2D9", borderRadius: 9, padding: "7px 12px", fontSize: 13, fontWeight: 600, color: "#3A4048", cursor: "pointer", fontFamily: FONT }}>
        <ChevronLeft size={16} /> Overview
      </button>
      <span style={{ ...display, fontSize: 12.5, color: "#3A4048", letterSpacing: "0.05em" }}>{title}</span>
      <span style={{ width: 92 }} />
    </div>
  );

  const JTOGGLE = [["B", "With app"], ["A", "Without app"], ["R", "Returning"]];
  const EXPLORE_CAPS = {
    A: "No app installed. The seatback QR opens mobile web in Safari — the hardest cold start, with the app-store gate removed.",
    B: "App already installed. The same QR deep-links straight into the native Panthers app.",
    R: "A fan who bought in last game. They scan, land in a funded wallet, claim a game-day beer, and top up toward the next tier.",
  };

  const ExploreView = () => (
    <>
      <PitchBar title="Explore the flow" />
      <div style={{ display: "inline-flex", background: "#fff", borderRadius: 11, padding: 4, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        {JTOGGLE.map(([j, label]) => (
          <button key={j} className="tap" onClick={() => start(j)} style={{ border: "none", cursor: "pointer", borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 600, fontFamily: FONT, background: journey === j ? BLUE : "transparent", color: journey === j ? "#fff" : "#6B7280" }}>{label}</button>
        ))}
        <button className="tap" onClick={() => start(journey)} title="Restart" style={{ border: "none", cursor: "pointer", borderRadius: 8, padding: "8px 11px", background: "transparent", color: "#6B7280", display: "grid", placeItems: "center" }}><RotateCcw size={16} /></button>
      </div>
      <MainPhone />
      <div key={journey} className="fade" style={{ maxWidth: 360, textAlign: "center", fontSize: 13, color: "#5A616B", lineHeight: 1.5 }}>{EXPLORE_CAPS[journey]}</div>
    </>
  );

  const AutoplayView = () => {
    const sc = SCRIPT[sceneIdx];
    const last = sceneIdx === SCRIPT.length - 1;
    return (
      <>
        <PitchBar title="Guided walkthrough" />
        <div style={{ pointerEvents: "none" }}><MainPhone /></div>
        <div style={{ width: "100%", maxWidth: 384, background: "#fff", borderRadius: 16, padding: "15px 17px 16px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 9 }}>
            <span style={{ ...display, fontSize: 11, color: BLUE, letterSpacing: "0.06em" }}>Step {sceneIdx + 1} / {SCRIPT.length}</span>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="tap" onClick={replay} title="Replay" style={{ border: "1px solid #D5DBE1", background: "#fff", borderRadius: 8, width: 32, height: 32, display: "grid", placeItems: "center", cursor: "pointer", color: "#3A4048" }}><RotateCcw size={15} /></button>
              <button className="tap" onClick={() => { if (!playing && last) replay(); else setPlaying(!playing); }} style={{ border: "none", background: BLUE, borderRadius: 8, width: 32, height: 32, display: "grid", placeItems: "center", cursor: "pointer", color: "#fff" }}>{playing ? <Pause size={15} /> : <Play size={15} />}</button>
            </div>
          </div>
          <div key={sceneIdx} className="fade">
            <div style={{ fontSize: 15.5, fontWeight: 700, color: TXT, lineHeight: 1.3 }}>{sc.caption}</div>
            {sc.sub && <div style={{ fontSize: 13, color: MUTED, marginTop: 4, lineHeight: 1.45 }}>{sc.sub}</div>}
          </div>
          <div style={{ display: "flex", gap: 4, marginTop: 13 }}>
            {SCRIPT.map((_, i) => (
              <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= sceneIdx ? BLUE : "#E2E6EA" }} />
            ))}
          </div>
        </div>
      </>
    );
  };

  const SBS_CAPS = [
    { t: "One QR on the seatback", s: "The same code for every fan in the building — nothing to install to use it." },
    { t: "The phone picks the door", s: "No app → mobile web in Safari. Has the app → it opens natively. Same scan, different landing." },
    { t: "The paths converge", s: "From the buy-in on, both journeys are identical: a token pack and the free-beer hook." },
  ];

  const sbsContent = (j, beat) => {
    if (beat === 0) return <SeatScene jOverride={j} interactive={false} />;
    if (beat === 1) return j === "A" ? <WebLanding /> : <NativeHome />;
    return (
      <>
        {j === "A" ? <BrowserHeader /> : <LightHeader onBack={null} />}
        <div style={{ background: LIGHTBG, flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}><BuyBody /></div>
      </>
    );
  };

  const SideBySideView = () => (
    <>
      <PitchBar title="Same QR, two journeys" />
      <div style={{ display: "inline-flex", background: "#fff", borderRadius: 11, padding: 4, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        {["Scan", "Land", "Buy in"].map((label, i) => (
          <button key={label} className="tap" onClick={() => setSbsBeat(i)} style={{ border: "none", cursor: "pointer", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, fontFamily: FONT, background: sbsBeat === i ? BLUE : "transparent", color: sbsBeat === i ? "#fff" : "#6B7280" }}>{label}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        {[["A", "Without the app"], ["B", "With the app"]].map(([j, label]) => (
          <div key={j} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#3A4048" }}>{label}</span>
            <div style={{ pointerEvents: "none" }}><ScaledPhone>{sbsContent(j, sbsBeat)}</ScaledPhone></div>
          </div>
        ))}
      </div>
      <div key={sbsBeat} className="fade" style={{ maxWidth: 430, textAlign: "center" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: TXT }}>{SBS_CAPS[sbsBeat].t}</div>
        <div style={{ fontSize: 13, color: MUTED, marginTop: 4, lineHeight: 1.45 }}>{SBS_CAPS[sbsBeat].s}</div>
      </div>
    </>
  );

  const CoverBtn = ({ icon, title, sub, onClick, primary }) => (
    <button className="tap" onClick={onClick} style={{ width: "100%", textAlign: "left", cursor: "pointer", borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 13, fontFamily: FONT, border: primary ? "none" : "1px solid #CBD2D9", background: primary ? BLUE : "#fff", color: primary ? "#fff" : TXT }}>
      <div style={{ width: 40, height: 40, borderRadius: 11, flexShrink: 0, display: "grid", placeItems: "center", background: primary ? "rgba(255,255,255,0.18)" : "#EAF4FB", color: primary ? "#fff" : BLUE_DK }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15.5, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 12.5, color: primary ? "rgba(255,255,255,0.85)" : MUTED, marginTop: 1 }}>{sub}</div>
      </div>
      <ChevronRight size={20} color={primary ? "rgba(255,255,255,0.8)" : "#B0B6BD"} />
    </button>
  );

  const CoverScreen = () => (
    <div style={{ width: "100%", maxWidth: 440, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", borderRadius: 22, overflow: "hidden", boxShadow: "0 18px 50px rgba(0,0,0,0.22)", background: `linear-gradient(150deg, ${BLUE} 0%, ${BLUE_DK} 55%, #064E78 100%)`, color: "#fff", position: "relative" }}>
        <Beer size={210} color="#fff" strokeWidth={1} style={{ position: "absolute", right: -40, bottom: -50, opacity: 0.1 }} />
        <div style={{ padding: "30px 26px 28px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontStyle: "italic", ...display, fontSize: 13 }}>Carolina Panthers</span>
            <span style={{ opacity: 0.55 }}>×</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>REPUBLIC</span>
          </div>
          <div style={{ ...display, fontSize: 34, lineHeight: 1.04, margin: "20px 0 12px" }}>Scan. Tap.<br />Free beer.</div>
          <div style={{ fontSize: 15, opacity: 0.94, lineHeight: 1.5, maxWidth: 330 }}>
            A token, a tier, and a draft beer in under a minute — without the word "crypto" ever appearing on screen. A prototype of the in-stadium fan moment.
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 22 }}>
            {[["20s", "to first beer"], ["0", "app downloads"], ["1", "QR code"]].map(([n, l]) => (
              <div key={l}><div style={{ fontSize: 22, fontWeight: 800 }}>{n}</div><div style={{ fontSize: 12, opacity: 0.82 }}>{l}</div></div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10, marginTop: 18 }}>
        <CoverBtn icon={<Play size={18} />} title="Play the walkthrough" sub="Auto-runs the full no-app journey" onClick={openAutoplay} primary />
        <CoverBtn icon={<Smartphone size={18} />} title="Explore it yourself" sub="Tap through — with app, without, or returning" onClick={() => openExplore("B")} />
        <CoverBtn icon={<Columns2 size={18} />} title="Compare the two journeys" sub="App vs. no-app, side by side" onClick={openSideBySide} />
      </div>

      <div style={{ fontSize: 11.5, color: "#7E848C", maxWidth: 380, textAlign: "center", lineHeight: 1.5, marginTop: 18 }}>
        Threaded through the Panthers app's existing Virtual Currency wallet. Tiers, prices, and bonus amounts are placeholders pending the economic-design lock.
      </div>
    </div>
  );

  /* ---------- frame ----------------------------------------------- */
  return (
    <div style={{ fontFamily: FONT, background: "#D7DCE1", minHeight: 760, padding: "22px 16px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes scan { from { transform: translateY(0); } to { transform: translateY(110px); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }
        .spin { animation: spin 0.9s linear infinite; }
        .sheet { animation: slideUp 0.28s cubic-bezier(.2,.8,.2,1); }
        .scanline { animation: scan 1.5s ease-in-out infinite alternate; }
        .fade { animation: fadeIn 0.35s ease; }
        .tap { transition: transform .08s ease, filter .12s ease; }
        .tap:active { transform: scale(.975); filter: brightness(.97); }
        .ptp-screen::-webkit-scrollbar { display: none; }
      `}</style>

      {mode === "cover" && <CoverScreen />}
      {mode === "explore" && <ExploreView />}
      {mode === "autoplay" && <AutoplayView />}
      {mode === "sidebyside" && <SideBySideView />}
    </div>
  );
}
