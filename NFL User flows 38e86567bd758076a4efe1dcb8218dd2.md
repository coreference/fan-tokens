# NFL User flows

# PROJECT SYSTEM ARCHITECTURE & PROTOTYPE SPECIFICATION

# **0. Executive Summary & Design System Defaults**

App Name: **NFL Fan Wallet**

Core Objective:

The NFL Fan Wallet lets fans buy fixed-price NFL fan tokens, pledge those tokens to a selected NFL team, unlock that team’s branded app skin, and participate in a points-based loyalty experience tied to games, raffles, tickets, referrals, quests, and selective voting. The user-facing experience should feel like a simple sports loyalty wallet — **not** a crypto product, staking dashboard, governance portal, or economic system interface.

Target Device: **Mobile App / Mobile-First Prototype**

The primary target is a native-feeling mobile experience, optimized for fans who may download and use the app **in-stadium on game day**. The prototype should be designed as a mobile app flow, ideally in Figma or another screen-based mockup tool, with possible export as static screenshots or interactive frames. Desktop/web is not the target for this first UX pass.

Theme/Vibe:

**Modern Sports FinTech + Loyalty App**

The app should combine:

the immediacy and clarity of a consumer mobile wallet,

the excitement of an NFL game-day companion,

the trust cues of a payments/FinTech product,

and the visual flexibility of a team-branded fan experience.

The base app starts in a neutral **League skin**. Once a fan pledges tokens to a team, the interface unlocks that team’s visual theme — colors, logo treatment, cards, gradients, badges, and accent states. The skin system is central to the product’s emotional payoff: the fan should feel that pledging tokens causes the app to “become theirs” and align with their team identity.

**0.1 Product Positioning**

The NFL Fan Wallet should be positioned as:

“Buy a token. Pledge to your team. Earn points all season.”

The product is not primarily about exposing token economics, staking mechanics, smart contracts, score calculation, or governance systems. It is a fan-facing loyalty and engagement experience where tokens are the entry point into a team-specific rewards journey.

The app should answer four simple user questions at every stage:

**What do I have?**

Tokens, points, tier/status, rewards access.

**Who am I supporting?**

The team to which the fan has pledged loyalty.

**What can I do next?**

Buy tokens, pledge, earn points, enter raffles, buy/redeem tickets, refer fans, attend games, vote if eligible.

**What do I get for doing it?**

Points, status/tier progression, boosted earning, raffles, tickets, team-specific rewards, and emotional/team identity.

**0.2 Core Product Principles**

**Principle 1 — Fan-first, not crypto-first**

The product should avoid language such as:

staking contract,

smart contract,

validator,

emissions,

token-weighted governance,

protocol,

wallet address,

private key,

seed phrase,

on-chain transaction,

score calculation.

Instead, the app should use user-facing language such as:

buy tokens,

pledge to your team,

earn points,

unlock your team skin,

boost active,

enter raffle,

redeem points,

reach Silver,

support your team.

Backend complexity may exist, but the mobile experience should abstract it away completely.

**Principle 2 — The primary action is “come on and buy”**

The app should minimize cognitive overhead. The first-time journey should lead the fan quickly from:

download,

registration,

token purchase,

team pledge,

team skin unlock,

points dashboard.

The experience should not ask the fan to deliberate too much before purchase. Voting, governance, or complex decision-making should be secondary or deferred.

**Principle 3 — Team identity is the emotional reward**

The fan’s team selection should not feel like a dry account setting. It should be a moment of transformation.

Before pledge:

neutral League skin,

generic NFL Wallet branding,

empty state,

strong “buy tokens” CTA.

After pledge:

team colors,

team logo,

team name,

team-specific points dashboard,

visible confirmation that loyalty has been activated.

The app should make the user feel:

**“I joined my team’s program.”**

**Principle 4 — Points and status should be understandable at a glance**

The points system may be economically complex, but the UX should be simple:

points balance,

tier/status level,

next tier progress,

ways to earn,

available boosts,

available rewards.

The tier ladder should be visible and intuitive:

**Bronze**

**Silver**

**Gold**

**Platinum / Diamond**

Voting eligibility begins at **Silver** or above, but voting should not dominate the experience.

**Principle 5 — Game-day context matters**

The product hypothesis is that fans may download the app at the stadium. Therefore:

onboarding must be fast,

location prompts must be clear,

poor connectivity must be handled gracefully,

the app should support a “detected at game / boosted earning” moment,

the purchase and pledge flow must remain legible under time pressure.

**Principle 6 — Flow matters more than final copy**

The first design objective is to describe and prototype the end-to-end mobile UX flow. Screen-level copy should be clear enough for mocks, but the primary deliverable is the flow logic, branching, and user journey.

**0.3 Design System Defaults**

**Base visual system**

**Default skin:** League / neutral NFL Wallet skin.

**Default mode:** Dark mode, high contrast.

**Primary accent:** Gold or electric accent color for neutral League state.

**Typography:** Bold sports-title typography for headers; highly readable sans-serif for body copy.

**UI density:** Medium; optimized for quick scanning in a stadium environment.

**Interaction style:** Large thumb-friendly CTAs, clear step progression, card-based layouts.

**Emotional tone:** Premium, energetic, simple, trustworthy.

**Team skin system**

The app should support multiple team themes. For prototype purposes, use:

**League / Neutral** — pre-pledge state.

**Carolina Panthers** — primary unlocked team example.

**Miami Dolphins** — alternate team example for switching/splitting/secondary pledge scenarios.

Each team skin should include:

primary team color,

secondary team color,

logo/badge placeholder,

themed header,

themed CTA accents,

themed cards,

team-specific dashboard label,

team-specific quests/rewards.

The app should visibly change after pledge confirmation:

header changes,

background or gradient changes,

active tab state changes,

token/points cards become team-branded,

confirmation animation or success state confirms skin unlock.

**Component defaults**

The prototype should use a reusable component language:

**Status bar:** iOS-style top status bar.

**Top app header:** contextual page title, optional back button, optional team badge.

**Primary CTA button:** full-width, high contrast.

**Secondary CTA button:** ghost/text style.

**Cards:** rounded, elevated or outlined, dark-mode friendly.

**Pills/chips:** for quick amounts, filters, team labels, boost labels.

**Progress bars:** for tier progression, pledge allocation, or onboarding steps.

**Bottom tab bar:** persistent after onboarding, likely:

Home

Wallet / Tokens

Points

Quests

Rewards or Manage

The exact tab labels can be refined later, but the prototype should support persistent navigation after initial onboarding.

**Accessibility and usability defaults**

The mobile flow should assume:

large tappable buttons,

high contrast text,

no critical information conveyed by color alone,

inline validation errors,

clear loading and retry states,

no long paragraphs on screens,

short explanatory microcopy,

progressive disclosure for complex concepts.

**0.4 Product Scope for This Prototype**

**In scope**

The prototype should cover:

First launch / splash.

Account creation and sign-in.

Phone verification.

Location permission and fallback.

Home screen empty state.

Token purchase at fixed price of **$1 per token**.

Payment review and confirmation.

Team detection / team selection.

Token pledge to selected team.

Team skin unlock.

Points dashboard.

Tier/status progression.

Game-day boost.

Quest list / ways to earn.

Referral as a points-earning mechanism.

Raffle entry using points.

Ticket purchase with cash.

Ticket redemption with points.

Voting eligibility and lightweight voting flow.

Manage pledge / adjust team allocation if included.

Error states and fallbacks for onboarding, purchase, location, pledge, points, and rewards.

**Out of scope for user-facing prototype**

The prototype should not expose:

smart contract interactions,

staking contract details,

wallet addresses,

seed phrases,

token custody mechanics,

full economic formulae,

backend score calculations,

admin configuration surfaces,

Republic/team operator dashboards,

PRD-level engineering implementation detail.

**Ambiguous / to be treated carefully**

The initial PDF text summary includes “Manage Pledge / Split” where a fan can split allocation across teams. The meeting notes emphasize pledging loyalty to a team and state that each token can only be pledged to one team, while also implying the app changes based on which team the fan pledges to. For prototype purposes:

The main happy path should assume **one primary pledged team**.

Multi-team allocation should be treated as a secondary or advanced management scenario, not the first-run flow.

If shown, it must make clear:

each token can only be pledged to one team at a time,

no token double-earns,

the user has one primary skin/team experience,

team-specific points are tracked separately.

If the final product team wants to avoid multi-team complexity in beta, the “Manage Pledge / Split” flow can be simplified into “Change Team / Manage Pledge” with guardrails and confirmation.

# 1. User flows

### Flow 0 — Demo Shell / Presentation Layer (prototype scaffolding)

- **Main goal:** Let a presenter pitch the concept three ways: auto-play the no-app story, hand the phone over to tap freely, or compare app vs no-app side by side.
- **Place in journey:** Wraps the real product = prototype; not part of the fan experience. Cover screen surfaces the headline metrics (“20s to first beer / 0 app downloads / 1 QR code”) and three entry buttons.
- **Action flow:**
    - *User does:* Picks “Play the walkthrough” (→ autoplay), “Explore it yourself” (→ explore, Journey B), or “Compare the two journeys” (→ side-by-side). Inside explore, toggles A / B / R and can restart; inside autoplay, can pause/play/replay and watches a 12-step progress bar; inside side-by-side, scrubs Scan/Land/Buy-in beats.
    - *User sees:* The phone frame re-themes and resets to the chosen journey’s entry step; a caption strip narrates each beat.
    - *On the backend (state):* `openAutoplay/openExplore/openSideBySide/openCover` reset `mode`, `journey`, `pack → $25`, `step → seat`, and clear `payOpen/shareOpen/copied`. Autoplay’s `useEffect` walks the `SCRIPT` array on per-beat timers and auto-stops on the last beat.
- **Edge cases / fail-states / fallbacks:**
    - *Autoplay reaches the end:* playback stops (`setPlaying(false)`); the play button becomes a **Replay** (clicking when stopped+last calls `replay()` from beat 0). Fallback: no dead-end — always replayable.
    - *Mode switch mid-flow:* any “Overview” back-press (`PitchBar`) returns to cover and pauses; state is reset on next mode entry so a half-finished journey never leaks across modes.
    - *Side-by-side beat 0:* the seat scene is rendered **non-interactive** (`interactive=false`) so scrubbing doesn’t accidentally advance one column.

## PANTHERS TOKEN — FAN ACQUISITION FLOW SPECIFICATION

> Derived from the interactive prototype above. This is the Panthers-specific in-stadium acquisition case that plugs into the main NFL Fan Wallet flow (sibling page). Format mirrors the NFL Wallet spec so the two read as one document.
> 

## 0. Executive Summary & Design System Defaults

- **App Name:** NFL Fan Wallet — Panthers-specified (Carolina Panthers × Republic)
- **Core Objective:** A fan in their seat scans a seatback QR, gets a wallet provisioned invisibly, buys a Panthers Token pack, and redeems a free welcome draft beer — in under a minute, without the word “crypto” ever appearing. Tokens are *held* in the wallet; the beer is the hook that converts a stranger into an attributable, tiered fan.
- **Target Device:** Mobile only (single ~390px phone frame; scrollbars hidden). Three runtime contexts are rendered inside the same frame.
- **Theme/Vibe:** Team-specific Panther skin. Panther blue `#0085CA` / dark blue `#006BA6` for header & accents; native-app dark canvas (`INK #0B0E12`, card `#15191F`); wallet/web light canvas (`#EFEFEF`). Gold reward accents, green (`#1F9D55`) for success/perks, orange reserved as the universal “boost” accent. Uppercase, heavy display type; Apple-system font stack.

**Design-system defaults observed in code:**

- **Token packs (`PACKS`):** `$10 → 10 tokens (Starter)`, `$25 → 25 tokens (Most popular, default-selected)`, `$50 → 50 tokens (Superfan)`. Price is a flat $1/token. Default selection on every entry = the $25 “Most popular” pack.
- **Tiers:** Tier 1 “Roaring Riot” (entry) → Tier 2 “Keep Pounding Club” at **50 tokens**. Progress bar always measures against the 50-token Tier-2 threshold.
- **Returning-fan balance (`RETURN_BAL`):** 38 tokens (12 from Tier 2).
- **Referral bonus:** +5 tokens to *both* parties on a successful join.
- **Reward asset:** single-use free 16oz draft beer voucher, scannable QR + code `8463 1863 3565 3890`, “valid today at Bank of America Stadium.”
- **Anchor context:** Section 112, Row F. Web landing greets with “You’re in Section 112.”
- **Three entry journeys** (the `journey` state): **A** = no app / mobile web, **B** = has app / native, **R** = returning fan. Default boot journey = **B**, default step = `seat`.
- **Four presentation modes** (the `mode` state): `cover` (pitch landing), `explore` (free tap-through with A/B/R toggle), `autoplay` (scripted 12-beat walkthrough of Journey A), `sidebyside` (A vs B at three synced beats: Scan / Land / Buy in). These are demo scaffolding, not shipping product surfaces.

## 1. Main User Flows Definition

### Flow 1 — Cold Open: Seatback QR Scan (shared entry, all journeys)

- **Main goal:** Convert physical presence (a code on the seatback in front of the fan) into a digital session with zero install and zero account friction.
- **Place in journey:** The single shared front door for Journeys A, B, and R. It is the very first step (`step === "seat"`) regardless of journey.
- **Action flow:**
    - *User does:* Raises phone; taps the camera viewfinder (the whole `SeatScene` is the tap target via `scanAdvance`).
    - *User sees:* A faux camera UI (flash / SCAN / flip-camera chrome), the stadium bowl, the seat in front tagged “SEC 112 · ROW F,” a Panthers × Republic placard reading “Free Draft Beer — Scan to claim · 1 per fan,” an animated scan-line over the QR, and a “QR code detected” confirmation pill.
    - *On the backend (state):* `scanAdvance()` branches on `journey`: **A → `land`** (mobile web), **R → `r_wallet`** (funded wallet), **B → `home`** (native app home). The QR itself carries the section/seat + team context.
- **Edge cases / fail-states / fallbacks:**
    - *App detection (deep-link vs web):* the same physical QR must resolve the fork — if the NFL Wallet app is installed it deep-links to native `home` (Journey B); otherwise it opens mobile web `land` (Journey A). Fallback when deep-link fails silently: drop to mobile web landing (never the app store as a hard gate).
    - *Returning fan already authenticated:* skip onboarding entirely → land in funded `r_wallet`. Fallback if session expired: route to a lightweight re-auth (see Flow 2) before the wallet.
    - *QR not detected / poor light / damaged decal:* needs a manual fallback — a short code or “enter Section/Row” entry, plus a retry/torch affordance (the flash glyph implies this). Prototype auto-detects; production must handle non-detection.
    - *Wrong seat / shared code:* placard says “1 per fan” — redemption must be deduped per wallet, not per scan, so re-scanning doesn’t mint a second beer.
    - *No camera permission:* fall back to manual code entry rather than blocking.

### Flow 2 — No-App Onboarding (Journey A): Mobile Web Landing → Auth

- **Main goal:** Win the hardest cold start — a fan with no app — by opening straight into Safari and creating a wallet in one tap.
- **Place in journey:** Journey A only, between the scan and the purchase. The make-or-break moment with the app-store gate removed.
- **Action flow:**
    - *User does:* On the **WebLanding** (browser chrome shows `wallet.panthers.com`), reads the location-aware hero (“You’re in Section 112 — Free draft beer, on the house”) and taps **Get started** (→ `auth`). On **WebAuth**, taps **Continue with a passkey** *or* enters an email and taps **Continue** (both → `buy`).
    - *User sees:* Three value props (Free beer / Unlock tier / Your wallet), “Powered by Republic,” and a passwordless auth screen (“We’ll never ask for a password”) with passkey + email options separated by an OR divider.
    - *On the backend (state):* `go("auth")` then `go("buy")`. A wallet is provisioned invisibly on first auth; no seed phrase, no crypto language.
- **Edge cases / fail-states / fallbacks:**
    - *Passkey unsupported/declined on device:* fall back to the email path (already present); if email also fails, offer an SMS one-time code (consistent with the main NFL flow’s phone verification).
    - *Invalid / malformed email:* inline validation before enabling **Continue**; don’t advance to `buy` on a bad address.
    - *Returning email (account already exists):* detect and route into sign-in rather than creating a duplicate wallet — then jump to `r_wallet`.
    - *Location not granted:* the “Section 112” badge is location-derived; if denied, degrade to a generic “Free draft beer” hero with manual section entry. Never block on location.
    - *Browser/session loss mid-auth:* the QR is re-scannable; re-entry should resume at `auth` or recognize the half-provisioned wallet rather than restarting cleanly.
    - *Wallet provisioning latency/failure:* show a non-blocking retry; do not surface backend/crypto errors to the fan.

### Flow 3 — In-App Entry (Journey B): Native Home Hero

- **Main goal:** Route an already-installed fan straight to the token offer inside the native app.
- **Place in journey:** Journey B only, between scan and purchase.
- **Action flow:**
    - *User does:* Lands on **NativeHome** (dark Panthers app with Home/Schedule/Hall of Fame/Draft tabs + bottom nav), taps the **“Get your Panthers Token”** hero card (→ `buy`).
    - *User sees:* A “New · This season” hero (“Buy in, unlock your tier, and grab a free draft beer”), faux news rows for realism, and a persistent bottom tab bar (Home active).
    - *On the backend (state):* `go("buy")`; the fan is already authenticated, so no wallet creation step is needed.
- **Edge cases / fail-states / fallbacks:**
    - *Fan not logged into the app:* gate the hero behind the same passwordless auth as Journey A before `buy`.
    - *Offer already claimed / not eligible:* the hero should swap to a “top up” state (Journey R behavior) instead of re-offering the welcome beer.
    - *Stale app version without the token feature:* fall back to mobile web (`land`) via the same deep link.
    - *Bottom-nav taps (Tickets/Schedule/Team/More):* currently inert in the prototype — production must keep nav functional or visibly disable during the acquisition moment.

### Flow 4 — Token Purchase + Apple Pay (shared A / B / R)

- **Main goal:** Take dollars in two taps and frame the purchase around the reward, not the asset.
- **Place in journey:** The convergence point — all journeys are identical from `buy` onward.
- **Action flow:**
    - *User does:* On **BuyBody**, selects a pack (Starter/Most popular/Superfan; default $25), taps **Buy with Apple Pay** (opens `PaySheet`), reviews card + line item, taps **Pay $X.00** (`confirmPay`).
    - *User sees:* Context-aware framing — new fans see the **free-beer welcome** callout (“Tokens stay in your wallet”); returning fans see a **tier-progress** nudge (“You’re N tokens from Tier 2”). “Powered by Republic · $X for N tokens” footer. Apple Pay sheet slides up with “Panthers Visa •••• 6411” and “Confirm with side button.”
    - *On the backend (state):* `openPay()` → `confirmPay()` closes the sheet, sets `step → processing`, then after ~1.5s branches: **Journey R → `r_success`**, else **→ `success`**. Tokens are *held/unpledged* at this point.
- **Edge cases / fail-states / fallbacks:**
    - *Apple Pay unavailable (non-Apple device / not set up):* must fall back to a card-entry method; the prototype only renders Apple Pay.
    - *Payment declined / canceled:* dismissing the sheet (`X` or backdrop tap) returns to `buy` with selection intact — good. A *declined* charge needs an explicit inline error + retry, not a silent return.
    - *Network failure during the 1.5s processing window:* show retry; never strand the fan on the spinner. The **Processing** copy already hides crypto (“no app store, no passwords”).
    - *Double-submit / impatient taps:* `confirmPay` should be idempotent to avoid double charges.
    - *Pack changed after sheet open:* sheet reads live `pack`, so totals stay correct; ensure the charged amount matches the displayed amount.
    - *Minimum/maximum:* only three fixed packs exist — no free-quantity edge cases, but if packs become dynamic, enforce min 1.

### Flow 5 — Wallet Provisioning & Success / Tier Assignment

- **Main goal:** Confirm the purchase, assign a tier, and immediately point the fan at the reward.
- **Place in journey:** Post-payment payoff for A/B (`success`) and R (`r_success`).
- **Action flow:**
    - *User does:* Reviews the success screen; taps the **welcome-reward** card (→ `reward`) or, for returning fans, **Back to wallet** (→ `r_wallet`).
    - *User sees (new fan):* Green check, “You’re in · Welcome to the Roaring Riot,” token balance `N.00`, **Tier 1** badge, a progress bar toward Tier 2 (“N tokens to Tier 2”), and a gold **“Welcome reward unlocked — Free draft beer”** card. Journey A also gets an “Add Panthers to your home screen” nudge.
    - *User sees (returning fan, `r_success`):* “Tokens added” *or*, if balance crosses 50, **“Tier 2 unlocked — Keep Pounding Club”** with a crown and a “Newly unlocked” perks list.
    - *On the backend (state):* `RebuySuccessBody` computes `total = RETURN_BAL + pack.tokens` and flips `tier2 = total >= 50` to drive crown vs check and the perks reveal.
- **Edge cases / fail-states / fallbacks:**
    - *Exactly hits 50 tokens:* must read as Tier 2 unlocked (`>= 50` is inclusive) — verify off-by-one at the threshold.
    - *Already at/above Tier 2 before buying:* don’t re-trigger the “unlocked” celebration; show a simple “tokens added” confirmation.
    - *Status vs spendable balance:* per the main NFL flow, status is *lifetime points earned* and never drops; spending must not lower tier. This Panthers case shows balance only — align copy so fans don’t fear losing tier by redeeming.
    - *Journey A home-screen nudge:* PWA install isn’t guaranteed on all browsers — treat as optional, never a blocker to reaching `reward`.
    - *Provisioning succeeded but balance read fails:* show last-known balance with a soft refresh rather than a zero state.

### Flow 6 — Welcome Reward: Free Beer Voucher & Redemption

- **Main goal:** Pay off the hook fast — a scannable beer voucher redeemed at any stand — closing the scan-to-beer loop in under a minute.
- **Place in journey:** Immediately after success (A/B) or from the game-day reward card (R).
- **Action flow:**
    - *User does:* Opens **RewardBody**; shows the QR at a concession stand; staff taps **“Staff: scan to redeem”** (→ `redeemed` for A/B, `r_redeemed` for R).
    - *User sees:* “Free Draft Beer” voucher with FauxQR, code `8463 1863 3565 3890`, “1 Draft Beer · 16 oz,” and “Single-use · valid today at Bank of America Stadium.” After redemption: a celebratory 🍺 “Beer’s on us” screen reassuring that **tokens stay in the wallet** and the fan is a Tier 1 Panther.
    - *On the backend (state):* `go("redeemed" | "r_redeemed")`; the voucher is marked consumed; tokens are untouched.
- **Edge cases / fail-states / fallbacks:**
    - *Double redemption:* the “staff scan” must be one-time; a second scan should fail with “already redeemed” rather than pouring a second beer (ties back to “1 per fan”).
    - *Expired voucher (“valid today”):* after game day, show an expired state, not a live QR.
    - *Offline concession scanner:* need an offline/queued validation fallback so the line keeps moving; reconcile later.
    - *Underage / age-gate:* a beer reward legally needs an age check or a non-alcohol alternative — absent in the prototype, required for production.
    - *Fan navigates back before staff scans:* the back affordance returns to success/wallet; voucher must remain claimable, not voided.

### Flow 7 — Referral / Viral Loop

- **Main goal:** Make acquisition compound — one scan becomes two — by rewarding both inviter and invitee.
- **Place in journey:** Post-redemption upsell; entered from “Bring a friend” on the redeemed/wallet screens.
- **Action flow:**
    - *User does:* On **ReferBody**, taps **Copy** (`copyLink`) or **Share invite** (opens `ShareSheet`), picks a channel (Messages/WhatsApp/Copy Link/More — all call `sendInvite`).
    - *User sees:* “Both get +5 bonus tokens” framing, a you+friend reward graphic, the invite link `panthers.co/r/anna7k`, a “Copied” confirmation (1.6s), then a sending state (**ReferSentBody** — “Waiting for your friend to join”), and finally **ReferRewardBody** (“Your friend joined,” new balance `pack.tokens + 5`, “+5 referral bonus”).
    - *On the backend (state):* `copyLink` toggles `copied` then auto-resets; `sendInvite` closes the sheet, `go("refer_sent")`, then after ~2.2s `go("refer_reward")`. “Invite another friend” loops back to `refer`; “Done” routes to `redeemed`/`r_wallet`.
- **Edge cases / fail-states / fallbacks:**
    - *Friend never joins:* the prototype auto-advances to the reward; production must hold `refer_sent` as a pending state and only credit on actual join — with a clear “pending” indicator and no premature balance bump.
    - *Share canceled / channel returns nothing:* user can re-open the sheet; canceling must not fire `sendInvite`/credit bonuses.
    - *Copy fails (clipboard blocked):* offer a fallback (long-press/select) instead of a false “Copied” state.
    - *Self-referral / fraud / duplicate accounts:* bonuses must validate that the invitee is genuinely new and not the same device/wallet.
    - *Referral cap / abuse:* “invite another” loops infinitely in the prototype — production likely needs a per-fan cap or diminishing rewards.
    - *Invitee on a different team:* per the main NFL flow, referrals of *any* team count — keep cross-team credit consistent.

### Flow 8 — Returning Fan (Journey R): Funded Wallet → Reward → Top-Up & Tier Upgrade

- **Main goal:** Re-engage an existing fan on a later game day — claim a game-day beer, top up tokens, and climb toward Tier 2.
- **Place in journey:** The repeat-visit loop; scan resolves directly into the funded wallet (skips onboarding and purchase as prerequisites).
- **Action flow:**
    - *User does:* From scan, lands in **RWallet** (balance 38, Tier 1). Taps the **game-day reward** card (→ `reward` → `r_redeemed`) and/or **Buy more tokens** (→ `buy` → Apple Pay → `r_success`).
    - *User sees:* “Welcome back, Anna,” 38.00 tokens, Tier 1 progress (“12 tokens to Tier 2 · Keep Pounding Club”), a “Today at the stadium” game-day beer card, a Tier-1 perks list, and the persistent bottom nav.
    - *On the backend (state):* scan → `r_wallet`; `confirmPay` routes R to `r_success`; `RebuySuccessBody` recomputes the tier from `RETURN_BAL + pack`.
- **Edge cases / fail-states / fallbacks:**
    - *Already redeemed today’s reward:* the game-day card must show a claimed/used state instead of re-offering.
    - *Top-up that doesn’t reach Tier 2:* success copy degrades gracefully to “N tokens to the Keep Pounding Club” (handled), while crossing 50 triggers the crown + new-perks reveal.
    - *Expired session at scan:* re-auth before showing the funded wallet (don’t expose balance to an unauthenticated session).
    - *Boost / multiplier absent here:* the main NFL flow defines an at-game 3× boost; this Panthers prototype has no boost surface — flag as a gap to add (boost should re-enter the `buy → pledge` loop within the active window).
    - *Perks list data-driven per team/tier:* the Dolphins alt-skin and pledge-split management from the main flow aren’t represented here — single-team (Panthers) only; multi-team pledge management is out of scope for this case.

### End-to-End Navigation Map

`seat` (shared) → **A:** `land → auth → buy` · **B:** `home → buy` · **R:** `r_wallet → buy` → `buy → (PaySheet) → processing → success | r_success → reward → redeemed | r_redeemed → refer → refer_sent → refer_reward`. Back-paths: `buy`→entry, `reward`→`success`/`r_wallet`, `refer`→`redeemed`/`r_redeemed`; loops: “invite another”→`refer`, `r_success`/`r_redeemed`→`r_wallet`.

## Acquisition & Onboarding Scenario Flows

> Derived from the sibling "NFL Fan Wallet Acquisition Scenarios" page. These flows extend the Main NFL Token App flows *upstream*: they describe every way a fan can ENTER the wallet before the canonical Buy → Pledge → Unlock → Dashboard spine, and they converge into the existing purchase/pledge/dashboard screens wherever possible. They are organized into the three acquisition layers (Team-context reward-first, Team-app logged-in, NFL-level standard) and reuse the existing screen vocabulary. Format mirrors the Main NFL Token App flows so the two read as one document.
> 

### **Acquisition Layer Overview & Routing Principles**

**Main Goal**

Establish the three acquisition layers and the identity/context rules that decide which onboarding flow a fan receives, so the wallet behaves as a team loyalty and rewards layer rather than a standalone crypto product.

**Part in Overall User Journey**

This is the pre-onboarding router. It runs conceptually before Flow 1 (Splash) and determines whether a fan ever sees the neutral League splash at all, or instead enters through a reward-first, team-app, or ticketing context.

**The three acquisition layers**

Layer 1 — Team-context / reward-first acquisition. Entry from a team campaign surface (seatback QR, concessions QR, stadium signage, website banner, email, SMS, push, social, merch store, game-day promo). Always reward-first: the funnel is framed around claiming a team reward, boost, or perk, with tokens positioned as the mechanism. Best for stadium conversion, cold-start and casual fans, game-day activation.

Layer 2 — Team-app / logged-in fan acquisition. Entry from inside the team's digital environment (team app home, member hub, ticketing area, mobile wallet, game-day guide, rewards page, push, Account Manager). Highest identity confidence; the funnel can be shorter. Best for existing fans, Season Ticket Members, PSL owners, ticket holders.

Layer 3 — NFL-level / standard wallet acquisition. The neutral, league-level path already documented in Flows 1–12. Used when there is no team campaign, team-app context, or reward-first entry. Best for general NFL fans, fans outside the five pilot markets, and users who intentionally seek out the wallet. This should remain the fallback / lower-frequency path, not the hero path.

**Context check (runs on every campaign or deep-link entry)**

Is team_id present? Is reward_id present? Is a boost active? Is the app installed? Is the user logged in? Is Ticketmaster / team identity available? Does an NFL Fan Token wallet already exist? Is the user returning? Is the user eligible for member / ticket / reward benefits?

**Identity resolution order**

A. Logged-in team app user → pass credentials silently.

B. Ticketmaster / Account Manager user → match identity.

C. No app → mobile web passkey / email / phone.

D. Existing NFL wallet → sign in / match.

E. New user → register minimal profile + silent wallet creation.

**Product principle**

The hero narrative is "Claim a team reward. Tokens unlock it, keep you earning, and turn into your team wallet," i.e. Reward → identity → purchase → wallet → reward unlocked → points/tier → next action. The legacy "Wallet → account → tokens → team → maybe rewards" order is the fallback only.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — No team_id in campaign:** route to Manual Team Selection / Location Fallback (Acquisition Scenario A11) rather than dead-ending.

**Edge Case 2 — reward_id present but reward expired/unavailable:** continue the purchase funnel with reward context removed; never block token purchase on a dead reward.

**Edge Case 3 — App-install deep link fails silently:** drop to the mobile web reward landing (Scenario A1, Path C); never gate behind the App Store.

**Edge Case 4 — Wallet already exists for a "new" entry:** silently match the existing wallet and route to the returning-fan loop (Scenario A3) instead of re-onboarding.

**Edge Case 5 — Unsupported team in campaign/identity:** route to the waitlist path (Scenario A10) with a pilot-team alternative.

**Edge Case 6 — Conflicting context (campaign team ≠ pledged team):** preserve the fan's existing primary team; treat the new campaign team carefully and never silently re-skin.

### **Acquisition Scenario A1 — Reward-First Team QR / Digital Promo / Website Banner (Hero Path)**

**Main Goal**

Convert a team campaign surface into a funded, pledged fan by leading with a concrete reward and treating token purchase as the mechanism to unlock it, with team context already attached.

**Part in Overall User Journey**

This is the primary, highest-frequency acquisition path and the hero story for the prototype. It precedes and largely replaces the neutral Splash (Flow 1) for campaign traffic. The QR/link already carries team context, so the fan should not pick a team before purchase.

**Campaign payload**

The QR or link carries: team_id, campaign_id, reward_id, source (seatback_qr | concessions_qr | stadium_signage | website_banner | email | sms | push | social | merch_store), venue/location hint, optional section/row/seat, optional boost window.

**Happy Path A — App installed + user already logged in**

Fan scans team QR or taps team promo.

Deep link opens the team app; the app recognizes the logged-in fan.

Reward-first campaign screen opens (reward shown first, not a generic wallet landing).

Team app passes identity/session to the NFL Fan Token system.

Fan lands on a reward-framed purchase screen with the team already selected/attached.

Fan chooses a pack/amount → Apple Pay / card checkout → purchase succeeds.

Wallet is matched or created silently; tokens are pledged/attached to that team by default.

Reward unlocks → team wallet dashboard opens (reward, points, tier, boost, next ways to earn).

**Happy Path B — App installed but user not logged in**

Fan scans QR / taps promo → team app opens → user not logged in.

Lightweight login gate appears (a checkpoint, not full onboarding).

User logs in via priority order: team app account → Ticketmaster / Account Manager → passkey/biometric → email OTP → phone OTP → create account only if no match.

Returns to the reward-first purchase screen → purchases → wallet matched/created → reward unlocks.

**Happy Path C — App not installed**

Fan scans QR / taps promo → mobile web landing opens (team-branded reward page).

User continues with passkey / email / phone / ticket account; existing user logs in, new user registers.

Wallet matched or created silently → reward-framed purchase screen → purchase → tokens attach to team → reward unlocks.

Only AFTER reward unlock: show "Add [Team] Wallet to your home screen" or "Open in the [Team] app next time." Never make app install the first requirement.

**What User Sees / Receives**

A reward landing first: reward name, value, availability window, eligibility, "1 per fan" if applicable, primary CTA "Claim with [Team] Tokens," secondary "How it works."

A reward-framed purchase screen that keeps the reward visible: "Buy tokens to unlock your reward," "Tokens stay in your wallet. Your reward is added after purchase."

Pack selector ($10 Starter / $25 Most popular / $50 Superfan), short explainer, and a payment CTA adapting to context ("Unlock reward · $25," "Claim game-day perk," "Get [Team] Tokens," "Buy & unlock boost").

**What Happens on Backend**

Parse campaign payload; attach team context and reward eligibility.

Resolve identity (Layer rules A–E); match or silently create wallet.

Process payment; credit tokens; pledge/attach tokens to team by default; mark reward unlocked; create transaction + pledge records; initialize team points/tier.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Reward already redeemed for this wallet:** show claimed state; continue to dashboard/top-up rather than re-issuing.

**Edge Case 2 — Reward expired:** show expired state; keep purchase available without reward framing.

**Edge Case 3 — "1 per fan" re-scan:** dedupe redemption per wallet, not per scan, so re-scanning never mints a second reward.

**Edge Case 4 — Deep-link to app fails:** fall back to the mobile web landing (Path C).

**Edge Case 5 — Location-derived context denied (e.g., "Section 112"):** degrade to a generic reward hero with manual section entry; never block on location.

**Edge Case 6 — Wallet provisioning latency/failure:** non-blocking retry; never surface backend/crypto errors.

**Edge Case 7 — Returning email/account during "new" registration:** detect and route to sign-in (then the returning-fan loop, Scenario A3) instead of creating a duplicate wallet.

**Edge Case 8 — Offline scanner at redemption / QR scan failure / staff validation failure:** queued/offline validation fallback; reconcile later so the line keeps moving.

**Edge Case 9 — Age-gated reward (e.g., beer):** require an age check or offer a non-alcohol alternative.

**Edge Case 10 — Reward claimed but dashboard fails to load:** show last-known state with a soft refresh, not a zero state.

### **Acquisition Scenario A2 — Game-Day Boost Activation (Reward-First Context)**

**Main Goal**

Use a time-sensitive, context-detected boost as the acquisition/top-up hook: buying and pledging during the active window earns boosted points.

**Part in Overall User Journey**

Sits in the same reward-first layer as QR/reward campaigns because it depends on context (venue, team, game schedule, campaign window, sometimes location). It extends Flow 13 (Game-Day Boost) by adding the reward-first/QR entry and the "buy and pledge during the active window" framing.

**Happy Path**

Fan scans QR / opens team app / taps promo.

System detects team + venue + active game window.

Boost banner appears ("You're at the game — 3× points active until the final whistle").

Fan sees a simple auth (if needed) and taps "Buy & earn 3×" or "Unlock reward + earn 3×."

Reward/boost-framed purchase screen opens with the boost attached.

Fan buys tokens → tokens attach to team → boosted points added → dashboard shows boosted earning.

**What User Sees / Receives**

A boost banner/modal with countdown and "3×" badge; a single cumulative boost figure (never stacked multiplier math).

Purchase CTA framed around the boost and, where paired, the reward.

**What Happens on Backend**

Check location, game schedule, team eligibility, and pledge/team state; apply the active boost to the eligible transaction/pledge; record boost-applied points.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Location off:** prompt to enable location but allow normal (un-boosted) purchase; "Continue without boost."

**Edge Case 2 — Boost expires during checkout:** continue without boost; "This boost has ended."

**Edge Case 3 — Boost active at purchase but not at pledge:** apply the product rule; recommended copy "Buy and pledge during the active window," with a warning before the window ends.

**Edge Case 4 — Away-team fan at home stadium:** show eligibility neutrally; never imply the fan is wrong for supporting another team.

**Edge Case 5 — Multiple boosts active (tier + game-day):** show one cumulative boost, not stacked math.

**Edge Case 6 — Boost points delayed:** show a pending state ("Boosted points are being added").

**Edge Case 7 — Suspicious/spoofed location:** neutral "couldn't confirm boost"; normal purchase continues.

### **Acquisition Scenario A3 — Returning Fan Reward / Top-Up Loop**

**Main Goal**

Re-engage an existing wallet user without re-onboarding: land them directly in a funded wallet state showing balance, tier, and today's claimable reward/boost.

**Part in Overall User Journey**

The repeat version of the reward-first path. It supersedes Splash/onboarding for any recognized returning fan and feeds top-ups back into Flow 7 (Purchase) and Flow 9 (Pledge).

**Happy Path**

Returning fan scans QR / taps a team app card / opens a promo.

System recognizes the account and opens the team wallet directly.

Wallet shows current balance, tier, and today's reward; fan can claim the reward (if eligible), buy more tokens (framed as a top-up), activate a boost, enter a raffle, or refer a fan.

If they buy more, the purchase screen is framed as a top-up; the wallet updates and the tier recalculates.

**What User Sees / Receives**

"Welcome back, [Name]. You're N tokens from [next tier]."

If a reward is available: "Today at the stadium — Free draft beer available." If not: "Game-day boost active — buy more tokens before kickoff to earn 3×."

**What Happens on Backend**

Recognize account/session; load balance, tier, today's reward and boost eligibility; recompute tier from existing balance + any top-up.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Session expired at scan:** quick re-auth before exposing balance; never show balance to an unauthenticated session.

**Edge Case 2 — Reward already claimed today:** show claimed/used state instead of re-offering.

**Edge Case 3 — Already above tier threshold:** do not replay the tier-unlock celebration; show a simple "tokens added."

**Edge Case 4 — Top-up does not reach next tier:** show graceful progress ("N tokens to [tier]").

**Edge Case 5 — Top-up crosses threshold:** show tier unlock (crown + new perks).

**Edge Case 6 — Fan scans a different team's campaign:** show team-specific context carefully; do not silently re-skin the primary team.

### **Acquisition Scenario A4 — Referral / Viral Reward Loop**

**Main Goal**

Compound acquisition by rewarding both referrer and invitee, with the invitee entering through a reward-first landing.

**Part in Overall User Journey**

A reward-driven acquisition mechanic that pairs with the reward/boost layer and extends Flow 15 (Referral). Most relevant post-reward, for groups, watch parties, and off-season campaigns.

**Happy Path**

Fan opens the referral quest/reward and sees "Invite a fan — both get bonus tokens/points."

Fan shares an invite link → friend opens a team-specific reward-first landing.

Friend signs up / buys / claims the reward → referrer receives reward or points → friend receives a welcome reward.

**Important rule — cross-team referrals**

Referrals work across teams: a Panthers fan can invite a Dolphins fan; the Dolphins fan joins the Dolphins interface and the Panthers fan still receives the referral reward.

**What User Sees / Receives**

"Both get +5 bonus tokens" framing, an invite link, a "Copied" confirmation, an invited-fans status list, and pending/completed reward states.

**What Happens on Backend**

Generate a referral code; track shared-link attribution; attribute the new signup; validate the qualifying condition; credit both parties only on a genuine, qualifying join.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Friend never joins / signs up but no qualifying action:** hold a pending state; credit only on a qualifying join; no premature balance bump.

**Edge Case 2 — Friend already has an account / duplicate referral:** "This invite wasn't eligible"; keep it neutral and simple.

**Edge Case 3 — Self-referral / same device or wallet / fraud:** validate the invitee is genuinely new.

**Edge Case 4 — Referral cap / abuse:** apply a per-fan cap or diminishing rewards.

**Edge Case 5 — Invitee changes/switches team:** cross-team credit remains valid.

**Edge Case 6 — Share canceled / clipboard blocked:** canceling must not fire a credit; offer a fallback copy method instead of a false "Copied."

**Edge Case 7 — Link fails to generate:** "We couldn't create your invite link" + Try again.

### **Acquisition Scenario A5 — Team App Banner / In-App Campaign Card**

**Main Goal**

Convert an already-logged-in team app user with the lowest possible friction by moving them straight from an in-app card into the reward/purchase/wallet experience.

**Part in Overall User Journey**

The entry point for Layer 2 (team-app, highest identity confidence). The team app passes identity, so onboarding can be skipped and the fan lands directly in purchase or wallet.

**Happy Path**

Fan opens the team app → sees a token/reward banner ("Get [Team] Tokens — buy in, unlock your tier, and claim today's reward").

Taps the banner → team app passes identity to the NFL Fan Token system.

Fan lands on a team-specific purchase or wallet screen → wallet matched/created silently → purchase / top-up / claim → team dashboard.

**What User Sees / Receives**

First-time user: "Get [Team] Tokens and unlock today's reward." Returning user: "You're 12 tokens from Gold," "Game-day boost active," "Reward available."

**What Happens on Backend**

The team app passes team_user_id, Ticketmaster account id (if available), email/phone (if permissioned), STM/PSL/premium status (if available), team affiliation, campaign source, app session.

The NFL Fan Token system matches an existing wallet, creates one if missing, attaches team context, loads reward/boost/eligibility, and routes to purchase or dashboard.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Logged in but missing phone/email:** ask only for the missing field.

**Edge Case 2 — App user not Ticketmaster-linked:** allow wallet now, prompt to link the ticket account later.

**Edge Case 3 — Offer already claimed:** show top-up state instead of re-offering.

**Edge Case 4 — Feature unavailable in old app version:** fall back to mobile web.

**Edge Case 5 — Team app session expired:** quick login, then resume.

### **Acquisition Scenario A6 — Ticketing / Mobile-Ticket Identity Activation**

**Main Goal**

Use the Ticketmaster / Account Manager identity bridge to surface the token offer during a game-day ticketing task and activate the wallet with high identity confidence.

**Part in Overall User Journey**

The most important identity bridge across the pilot teams. The offer appears while the fan is opening a mobile ticket, adding a ticket to a wallet, entering the stadium, viewing the game-day guide, managing tickets, or transferring a ticket.

**Happy Path**

Fan opens the team app for tickets → Ticketmaster / Account Manager identity exists.

Token reward/boost offer appears ("Turn today's game into rewards — get [Team] Tokens and earn points while you're here" / "Ticket holder boost unlocked").

Fan taps → identity is passed to the NFL Fan Token system → wallet matched/created → reward/purchase flow opens.

Attendance or ticket status can inform points/boost eligibility.

**What User Sees / Receives**

A ticketing-contextual offer tied to today's game; reward or ticket-holder boost framing; standard purchase/pledge convergence.

**What Happens on Backend**

Match Ticketmaster/team identity; create/match wallet; attach attendance/ticket context; apply attendance-based eligibility where available.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Ticket transferred:** identify the current ticket holder where possible.

**Edge Case 2 — Corporate ticket:** incomplete identity; gather only what's missing.

**Edge Case 3 — Has ticket but no team app login:** offer lightweight login/registration before purchase.

**Edge Case 4 — Ticketmaster login exists but app profile missing:** create the wallet from the ticketing identity.

**Edge Case 5 — Attendance verification delayed:** show pending; award attendance points after confirmation.

**Edge Case 6 — Ticket scanned but wallet not yet created:** reconcile and create the wallet on first token action.

### **Acquisition Scenario A7 — Member / Loyalty Hub Activation**

**Main Goal**

Position the wallet as an extension of existing member benefits, activating high-value fans from inside member/loyalty hubs.

**Part in Overall User Journey**

Layer 2 entry for STMs, PSL owners, premium members, and fan-club members via spaces such as Dolphins Member HQ, Eagles STM Hub, 49ers member benefits, Panthers PSL/Silver Club perks, and Patriots STM/member-code benefits.

**Happy Path**

Fan opens the member hub / benefits page → sees a token benefit card.

Taps → identity and membership status are passed → wallet loads.

Fan sees a member-specific reward, boost, or tier advantage → purchases or claims.

**What User Sees / Receives**

"Member-only token boost — your [Team] membership unlocks bonus points today" or "Unlock more from your membership — get [Team] Tokens to access raffles, rewards, and game-day perks."

**What Happens on Backend**

Pass and verify membership status; attach member-specific eligibility/benefits; match/create wallet; route to purchase or claim.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Membership status cannot be verified:** proceed without member benefits; offer to verify later.

**Edge Case 2 — Logged in but not recognized as STM/PSL:** treat as a standard fan; do not promise member-only perks.

**Edge Case 3 — Partner benefits require a third-party account:** prompt to link; allow wallet without it.

**Edge Case 4 — Discount-code identity differs from ticketing identity:** reconcile or ask which to use.

**Edge Case 5 — User has multiple account identities:** disambiguate before attaching benefits.

### **Acquisition Scenario A8 — Team-Specific Quests / Ongoing Engagement**

**Main Goal**

After acquisition, make the wallet the team's repeat engagement surface, where the fan always sees what they have, what they earned, their team relationship, and what to do next.

**Part in Overall User Journey**

The retention loop that follows any acquisition layer; extends Flow 14 (Quests / Ways to Earn) with team-specific quest sets.

**Happy Path**

Fan opens the team wallet → sees the team dashboard → opens Ways to Earn → completes quests → points update → tier progresses → rewards unlock.

**Example team-specific quests**

Dolphins: use mobile wallet at concessions; buy merch through Member HQ; attend a home game; add a payment method; transfer/resell/donate tickets.

Eagles: complete STM profile; choose a favorite player; attend a game; use a partner offer; join the family/Kids Club experience.

49ers: attend a game/event; shop the team store; digital/social engagement; fan club participation; earn "yards"-style rewards.

Panthers: use the Panthers app at the game; purchase food; join a predictive game; complete a responsibility pledge; use a PSL/Silver Club perk.

Patriots: use a ProShop member code; attend an STM event; use a partner offer; join waitlist/member activity.

**What User Sees / Receives**

A team-skinned quest list (available / completed / locked / upcoming) with point values or boost labels and clear CTAs.

**What Happens on Backend**

Fetch quest configuration, completion status, and eligibility; track completion; award points or mark pending.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Quest locked by tier:** show "Reach Silver to unlock" + ways to earn.

**Edge Case 2 — Quest requires external validation:** show pending ("We're verifying this activity").

**Edge Case 3 — Points pending:** show a pending status row.

**Edge Case 4 — Quest expired:** label/move to a completed/expired section.

**Edge Case 5 — No quests configured:** "More ways to earn coming soon" + evergreen actions.

**Edge Case 6 — User completes an action outside the wallet and expects credit:** reconcile via external validation; show pending until confirmed.

### **Acquisition Scenario A9 — Main NFL App / NFL Fan Wallet Onboarding (League-Level Fallback)**

**Main Goal**

Provide the neutral, league-level onboarding when no team campaign, team-app context, or reward-first entry exists.

**Part in Overall User Journey**

This is Layer 3 and is fully documented in Flows 1–12 (Splash → Create account / Sign in → Buy tokens → Detect or choose team → Pledge → Unlock team skin → Team dashboard). It should remain the fallback / lower-frequency path, not the hero path.

**Happy Path**

Neutral NFL Wallet → Create account / sign in → Buy tokens → Detect or choose team → Pledge → Unlock team skin → Team dashboard. (See Flows 1, 2, 3, 4, 5, 7, 9, 10, 11.)

**Edge Cases, Fail-States, and Fallbacks**

All edge cases are as documented in Flows 1–12. Additionally: if a campaign/team hint or referral code is present on a "neutral" launch, store it and preserve attribution without skinning the app until pledge (see Flow 1, Edge Cases 3–4).

### **Acquisition Scenario A10 — Unsupported-Team / Waitlist Path**

**Main Goal**

Avoid dead-ends when a fan chooses a non-pilot team (only five pilot teams are supported), offering a waitlist or a pilot-team alternative.

**Part in Overall User Journey**

A Layer 3 resilience flow that branches off team selection (Flow 5) whenever the chosen team is outside the pilot cohort.

**Happy Path**

User searches/selects an unsupported team.

System says the team is not available yet.

User can: join the waitlist; choose an available pilot team; or continue with the neutral NFL wallet if allowed.

**What User Sees / Receives**

"[Team] isn't available yet. Signal your support to [Team]! Join the list and we'll let you know when your team launches." Plus a "Choose an available team" option.

**What Happens on Backend**

Record waitlist interest with team affiliation; preserve any campaign attribution; allow neutral-wallet continuation where permitted.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — User refuses to choose a pilot team:** allow the neutral wallet or exit without a dead-end.

**Edge Case 2 — User joins waitlist but later enters a team QR:** route to that team's reward-first flow.

**Edge Case 3 — User's NFL favorite team is unsupported:** keep waitlist + pilot alternatives.

**Edge Case 4 — User is physically in a pilot stadium but supports an unsupported team:** offer the home pilot team's context neutrally and the waitlist for their team.

### **Acquisition Scenario A11 — Manual Team Selection / Location Fallback**

**Main Goal**

Provide a resilient path when the system cannot infer team context, letting the fan select from available teams.

**Part in Overall User Journey**

Layer 3 resilience that backstops Flows 4 (Location/Team Detection) and 5 (Manual Team Selection). Used when there is no team_id, location is denied or ambiguous, the user wants a different team, the user is outside a pilot market, or the favorite team is unavailable.

**Happy Path**

No team context → ask for location or team choice → user selects a team → continue to purchase / pledge.

**What User Sees / Receives**

A team picker (first-cohort pilot teams), search, and a clear path back into the purchase/pledge spine.

**What Happens on Backend**

Store the user-confirmed team; clear/override any location-based suggestion; prepare the pledge flow.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Multiple teams in the region:** multi-team chooser (see Flow 4, Edge Case 5).

**Edge Case 2 — Location denied:** manual picker (see Flow 4, Edge Case 1).

**Edge Case 3 — Team unavailable / not in cohort:** route to the waitlist path (Scenario A10).

**Edge Case 4 — Team data fails to load:** "Teams couldn't load" + Try again / Continue later.

**Edge Case 5 — User changes team before pledge:** no pledge committed; allow re-selection.

## Main NFL Token App flows

### **Flow 1 — First Launch, Splash, and Account Entry**

**Main Goal**

Introduce the user to the NFL Fan Wallet, communicate the core value proposition, and route the user into either account creation or sign-in.

**Part in Overall User Journey**

This is the entry point into the product. It sets the emotional and functional frame:

This is an NFL-level wallet.

Tokens cost $1.

Fans pledge to a team.

Pledging unlocks team identity and rewards.

The app starts neutral until a team is selected.

This flow should be extremely simple because the likely user context may be high-distraction — at a game, with friends, in a stadium, or while preparing to buy tokens quickly.

**Desired User Action Flow**

**Happy Path**

User opens the app for the first time.

App displays the neutral League splash screen.

User sees:

NFL Wallet wordmark,

token medallion or $1 token symbol,

tagline: “Buy a token. Pledge to your team. Earn points all season.”

primary CTA: “Create account”

secondary CTA: “I already have an account”

User taps **Create account**.

App routes user to profile registration.

**What User Sees / Receives**

A premium sports wallet splash.

Clear reason to continue.

No team branding yet.

No crypto complexity.

No long explanation of economics.

**What Happens on Backend**

App checks whether there is an existing authenticated session.

If no active session:

render public splash screen.

If valid session exists:

route directly to appropriate post-login screen:

if user has pledged team: team-skinned dashboard,

if user has account but no pledge: neutral home / buy tokens CTA,

if onboarding incomplete: resume onboarding step.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Returning user with valid session**

**Condition:** User has previously logged in and session token is valid.

**User sees:** Brief loading state, then dashboard.

**Fallback:** If session check takes more than 2 seconds, show splash with spinner and “Loading your wallet…”

**Backend:** Validate auth token and fetch user profile, token balance, pledge status, team skin state.

**Edge Case 2 — Returning user with expired session**

**Condition:** Stored session exists but is expired.

**User sees:** Splash, then sign-in prompt.

**Message:** “For your security, please sign in again.”

**Fallback:** Route to sign-in screen, not account creation.

**Edge Case 3 — App opened from referral link**

**Condition:** User opens app through a referral/deep link.

**User sees:** Splash screen with subtle referral context.

**Message:** “You were invited to join NFL Wallet.”

**Backend:** Store referral code temporarily until account creation completes.

**Fallback:** If code invalid, continue normal onboarding without blocking.

**Edge Case 4 — App opened from team-specific campaign link**

**Condition:** User opens app from Panthers campaign link or QR code at stadium.

**User sees:** Neutral League splash may include “Panthers game day offer” banner, but should not fully skin the app until pledge.

**Backend:** Store campaign/team hint.

**Fallback:** Team suggestion can preselect Panthers later, but user must confirm pledge.

**Edge Case 5 — Offline launch**

**Condition:** No internet connection.

**User sees:** Offline message.

**Message:** “You’re offline. Connect to continue setting up your wallet.”

**Fallback:** Allow user to view splash only. Disable create/sign-in CTAs or show retry.

**Backend:** No account actions until connection restored.

**Edge Case 6 — App under maintenance**

**Condition:** Backend maintenance flag active.

**User sees:** Maintenance screen.

**Message:** “NFL Wallet is temporarily unavailable. Please try again soon.”

**Fallback:** Retry button.

**Prototype requirement:** Include as possible fail-state, but not primary screen.

### **Flow 2 — Account Creation and Profile Registration**

**Main Goal**

Create a secure user profile using minimal required information: name, email, and phone number.

**Part in Overall User Journey**

This flow converts an anonymous fan into a registered wallet user. It should feel like signing up for a modern loyalty/payment app, not creating a crypto wallet.

Registration must be fast and clear. Wallet provisioning should happen invisibly after verification, without exposing wallet infrastructure.

**Desired User Action Flow**

**Happy Path**

User taps **Create account** from splash.

App opens **Create your profile** screen.

User enters:

full name,

email address,

phone number.

User taps **Verify phone** or **Continue**.

App sends one-time passcode via SMS.

User enters OTP code.

App verifies phone number.

Account is created.

Wallet is provisioned invisibly.

User proceeds to location/team setup or home/buy-token screen.

**What User Sees / Receives**

Step indicator, e.g. “Step 1 of 3 — Create profile.”

Simple form.

Inline validation.

OTP confirmation screen or modal.

Success state: “Profile created.”

**What Happens on Backend**

Validate email format.

Validate phone format.

Check duplicate account by email/phone.

Send OTP.

Verify OTP.

Create user account.

Create or assign wallet account behind the scenes.

Store onboarding status:

profile created,

phone verified,

wallet provisioned,

location/team not yet completed,

pledge not yet completed.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Empty required fields**

**Condition:** User taps continue with missing name, email, or phone.

**User sees:** Inline field errors.

**Example messages:**

“Enter your name.”

“Enter a valid email address.”

“Enter a valid phone number.”

**Fallback:** Keep user on same screen.

**Edge Case 2 — Invalid email**

**Condition:** Email is malformed.

**User sees:** Inline error.

**Message:** “Use a valid email address.”

**Backend:** No account creation attempt.

**Fallback:** User edits email.

**Edge Case 3 — Invalid phone number**

**Condition:** Phone number cannot be parsed or is unsupported.

**User sees:** Inline error.

**Message:** “Use a valid mobile number that can receive texts.”

**Fallback:** Allow correction.

**Edge Case 4 — Duplicate account**

**Condition:** Email or phone already exists.

**User sees:** Account exists message.

**Message:** “An account already exists with this email or phone.”

**CTAs:**

“Sign in”

“Use different details”

**Fallback:** Route to sign-in if user chooses.

**Edge Case 5 — OTP delivery failure**

**Condition:** SMS cannot be delivered.

**User sees:** Error state.

**Message:** “We couldn’t send the code. Check your number and try again.”

**CTAs:**

“Resend code”

“Edit phone number”

**Backend:** Track resend attempts and rate limits.

**Edge Case 6 — OTP code incorrect**

**Condition:** User enters wrong code.

**User sees:** Inline OTP error.

**Message:** “That code doesn’t match. Try again.”

**Fallback:** Allow retry until max attempts.

**Edge Case 7 — OTP expired**

**Condition:** User waits too long.

**User sees:** Expired code message.

**Message:** “This code expired. Request a new one.”

**CTA:** “Resend code”

**Backend:** Invalidate old OTP and issue new one.

**Edge Case 8 — Too many OTP attempts**

**Condition:** User exceeds retry threshold.

**User sees:** Temporary lock.

**Message:** “Too many attempts. Please wait before trying again.”

**Fallback:** Countdown or support option.

**Edge Case 9 — Wallet provisioning delay**

**Condition:** User account created, but wallet provisioning takes longer than expected.

**User sees:** Loading screen.

**Message:** “Setting up your wallet…”

**Fallback:** If delayed, continue to neutral home with pending wallet status and disable purchase until ready.

**User-facing language:** Do not mention backend wallet errors unless needed.

**Edge Case 10 — User abandons during registration**

**Condition:** User closes app mid-flow.

**Backend:** Save partial state only after valid account creation.

**Fallback:** On next open, resume at appropriate step:

if profile incomplete: restart registration,

if profile created but phone unverified: resume verification,

if verified but no pledge: continue onboarding.

### **Flow 3 — Sign-In for Returning Users**

**Main Goal**

Allow returning users to regain access to their wallet and route them to the correct state based on pledge/team status.

**Part in Overall User Journey**

This supports repeat use after initial setup. The returning-user experience is important because fans may come back on game days to buy more tokens, enter raffles, check points, redeem tickets, or vote.

**Desired User Action Flow**

**Happy Path**

User taps **I already have an account**.

App shows sign-in screen.

User enters email or phone.

User receives OTP or uses saved authentication.

User verifies.

App routes to:

team dashboard if pledge exists,

neutral home if no pledge exists,

incomplete onboarding screen if setup is unfinished.

**What User Sees / Receives**

Email/phone sign-in form.

OTP verification.

Loading state.

Dashboard or onboarding continuation.

**What Happens on Backend**

Locate user account.

Send OTP or validate stored auth.

Fetch:

user profile,

token balance,

pledged team(s),

points,

tier,

active boosts,

open rewards/actions.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Account not found**

**Condition:** Email/phone not associated with account.

**User sees:** “No account found.”

**CTAs:**

“Create account”

“Try again”

**Fallback:** Route to registration.

**Edge Case 2 — User has account but no pledge**

**Condition:** User registered but never completed purchase/pledge.

**User sees:** Neutral home with “Buy tokens” CTA.

**Backend:** No team skin applied.

**Edge Case 3 — User has tokens but no pledged team**

**Condition:** User bought tokens but did not pledge.

**User sees:** Wallet balance with unpledged token warning.

**Message:** “You have tokens ready to pledge.”

**CTA:** “Pledge now”

**Fallback:** Route to team selection / pledge flow.

**Edge Case 4 — User has pledged team**

**Condition:** User has completed pledge.

**User sees:** Team-skinned dashboard.

**Backend:** Load primary team skin and team-specific data.

**Edge Case 5 — Account suspended / restricted**

**Condition:** Compliance or account flag.

**User sees:** Restricted access screen.

**Message:** “Your account needs review before you can continue.”

**Fallback:** Contact support.

**Prototype note:** Include as edge state, not primary flow.

### **Flow 4 — Location Permission and Team Detection**

**Main Goal**

Use location to suggest the most relevant team, especially when the fan is at or near a stadium, while preserving manual team choice.

**Part in Overall User Journey**

This flow bridges the user from generic NFL Wallet setup into team-specific loyalty. It supports the core hypothesis that users may download the app at the stadium and expect the app to understand which team/game context they are in.

Location should be helpful, not mandatory.

**Desired User Action Flow**

**Happy Path: Location Granted**

App asks for location permission after registration or before team suggestion.

User taps **Allow location**.

App detects current location.

App maps location to:

stadium,

city,

state,

team,

active game context if applicable.

App shows **Team Detected** screen.

User sees:

“North Carolina detected”

“Your home team is the Carolina Panthers”

CTA: “Sounds good”

secondary: “Choose a different team”

User taps **Sounds good**.

App routes to pledge confirmation.

**What User Sees / Receives**

Clear explanation of why location is requested.

Suggested team.

Manual override option.

No sense that location is coercive.

**What Happens on Backend**

Request device location.

Map coordinates to eligible team/stadium.

Store location permission state.

Store suggested team.

If game-day event is active:

store active boost eligibility,

prepare boost state for later display.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — User denies location**

**Condition:** User taps “Don’t Allow.”

**User sees:** Manual team picker.

**Message:** “No problem — choose your team manually.”

**Backend:** Store location permission denied.

**Fallback:** User can still complete pledge.

**Edge Case 2 — User skips location**

**Condition:** User chooses “Not now.”

**User sees:** Team picker.

**Fallback:** Continue without location.

**Backend:** No location boost until permission granted later.

**Edge Case 3 — Location permission previously denied at OS level**

**Condition:** App cannot request permission again.

**User sees:** Explanation screen.

**Message:** “Location is off. You can choose a team manually or enable location in Settings.”

**CTAs:**

“Choose team manually”

“Open Settings”

**Fallback:** Manual team selection.

**Edge Case 4 — Location unavailable**

**Condition:** GPS unavailable, weak signal, airplane mode, or stadium interference.

**User sees:** Detection failed state.

**Message:** “We couldn’t detect your location.”

**CTAs:**

“Try again”

“Choose team manually”

**Fallback:** Manual selection.

**Edge Case 5 — Multiple teams in detected region**

**Condition:** Location maps to multiple teams or ambiguous market.

**User sees:** Multi-team chooser.

**Example:** “We found multiple teams near you.”

**Fallback:** User selects team manually.

**Backend:** Store selected team as user-confirmed.

**Edge Case 6 — User is at a stadium but not their preferred team**

**Condition:** Location detects stadium/team, but fan supports visiting team or another team.

**User sees:** Suggested team with override.

**Message:** “Based on your location. You can choose a different team.”

**Fallback:** User chooses preferred team.

**Design requirement:** Do not imply detected team is mandatory.

**Edge Case 7 — No eligible team in region**

**Condition:** User is outside supported team markets.

**User sees:** Team picker with first cohort teams.

**Message:** “Choose one of the available teams to start.”

**Fallback:** Manual selection.

**Edge Case 8 — Active game-day boost detected**

**Condition:** User is in stadium during active boost window.

**User sees:** Team detection screen may include small boost hint.

**Example:** “Game day boost may be available after you pledge.”

**Fallback:** Show boost after pledge, not before purchase complexity.

**Edge Case 9 — Location spoofing / suspicious location**

**Condition:** Backend flags inconsistent or suspicious location data.

**User sees:** Standard team picker or no boost.

**Message:** Do not accuse user. Use neutral message: “We couldn’t confirm game-day boost.”

**Fallback:** User can still buy and pledge normally.

### **Flow 5 — Manual Team Selection**

**Main Goal**

Allow the fan to choose their team manually when location is unavailable, denied, ambiguous, or not preferred.

**Part in Overall User Journey**

Manual team selection ensures the product remains usable without location access and supports personal fandom over geographic assumptions.

**Desired User Action Flow**

**Happy Path**

User taps **Choose a different team** or denies location.

App opens team picker.

User sees available first-cohort NFL teams.

User searches or scrolls.

User selects team.

App shows team confirmation.

User confirms.

App routes to pledge screen.

**What User Sees / Receives**

List/grid of teams.

Team logos and names.

Search input if there are many teams.

Selected team state.

Confirmation CTA.

**What Happens on Backend**

Store selected team as user-confirmed.

Clear or override location-based suggestion.

Prepare pledge flow using selected team.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — User changes mind before pledge**

**Condition:** User selects Panthers, then backs out.

**User sees:** Team picker again.

**Backend:** No pledge committed yet.

**Fallback:** User can choose another team.

**Edge Case 2 — Team not in beta cohort**

**Condition:** User searches for unsupported team.

**User sees:** Unavailable state.

**Message:** “This team isn’t available yet.”

**CTA:** “Notify me” or “Choose available team”

**Fallback:** Return to available teams list.

**Edge Case 3 — User attempts to continue without selecting team**

**Condition:** CTA tapped without team selected.

**User sees:** Inline error.

**Message:** “Choose a team to continue.”

**Fallback:** Stay on picker.

**Edge Case 4 — Team data fails to load**

**Condition:** API failure.

**User sees:** Error state.

**Message:** “Teams couldn’t load.”

**CTAs:**

“Try again”

“Continue later”

**Fallback:** Route to neutral home if account exists.

**Edge Case 5 — Team selected from campaign deep link**

**Condition:** User came from Panthers QR/link.

**User sees:** Panthers preselected with option to change.

**Backend:** Attribution preserved.

**Fallback:** User can override.

### **Flow 6 — Home Empty State / Pre-Purchase Activation**

**Main Goal**

Show the user their wallet state before purchase and provide a clear route to buy tokens.

**Part in Overall User Journey**

This is the activation screen after account creation/sign-in if the user has no tokens and no pledge. It reinforces the product’s main action.

**Desired User Action Flow**

**Happy Path**

User lands on neutral home.

App shows:

greeting,

wallet balance: 0 tokens,

points: 0,

team: none yet,

CTA card: “Get NFL Tokens”

fixed price: “$1 each”

CTA: “Buy tokens”

User taps **Buy tokens**.

App routes to token purchase flow.

**What User Sees / Receives**

Neutral League skin.

Clear empty state.

No shame or error for having no tokens.

Strong CTA.

**What Happens on Backend**

Fetch user profile.

Fetch token balance.

Fetch pledge state.

Determine home state:

no tokens / no pledge,

tokens / no pledge,

pledge exists,

account incomplete.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — User has tokens but no pledge**

**User sees:** “You have unpledged tokens.”

**CTA:** “Pledge now”

**Secondary CTA:** “Buy more”

**Backend:** Token balance exists, no pledge allocation.

**Fallback:** Route to team selection/pledge.

**Edge Case 2 — User has pledge but no points yet**

**User sees:** Team-skinned dashboard with 0 points and earning prompts.

**Message:** “Start earning with quests, referrals, and game-day actions.”

**Fallback:** Route to Points Dashboard, not empty home.

**Edge Case 3 — User has pending purchase**

**User sees:** Pending state.

**Message:** “Your token purchase is processing.”

**CTA:** “View status”

**Fallback:** Prevent duplicate confusion.

**Edge Case 4 — User is offline**

**User sees:** Cached wallet state if available.

**Message:** “You’re offline. Balances may be out of date.”

**Fallback:** Disable purchase until connection restored.

### **Flow 7 — Token Purchase**

**Main Goal**

Allow the fan to buy NFL tokens at a fixed price of **$1 per token** with minimal friction.

**Part in Overall User Journey**

Token purchase is the central monetization and activation action. It funds the subsequent pledge. The flow should be extremely clear and should not burden the fan with minimums, maximums, lockups, or token mechanics.

**Desired User Action Flow**

**Happy Path**

User taps **Buy tokens**.

App opens **Buy NFL Tokens** screen.

User sees:

price: “$1.00 per token”

quantity selector,

quick amount chips: 10 / 50 / 100,

total calculation,

payment method.

User selects quantity.

User chooses or confirms payment method.

User taps **Review purchase**.

App shows review screen or bottom sheet:

token quantity,

price,

total,

payment method,

next step: pledge to team.

User confirms purchase.

Payment processes.

App shows purchase success.

App routes to location/team selection or pledge flow.

**What User Sees / Receives**

Fixed price.

Real-time total.

Familiar payment method.

Review step.

Success confirmation.

Clear indication that tokens need to be pledged to earn.

**What Happens on Backend**

Validate quantity.

Calculate total.

Create payment intent.

Process payment.

On success:

mint/assign token balance or credit user balance,

mark tokens as unpledged,

create transaction record,

route user to pledge.

On failure:

no token balance change,

preserve attempted quantity for retry.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Quantity is zero**

**Condition:** User sets quantity to 0 or clears input.

**User sees:** Inline error.

**Message:** “Buy at least 1 token.”

**Fallback:** Disable review CTA.

**Edge Case 2 — Non-numeric quantity**

**Condition:** User types invalid value.

**User sees:** Input correction.

**Message:** “Enter a valid number of tokens.”

**Fallback:** Reset to previous valid quantity.

**Edge Case 3 — Very large quantity**

**Condition:** User enters unusually large number.

**User sees:** Confirmation warning if needed.

**Message:** “Review your total before continuing.”

**Fallback:** Since brief says no minimum/maximum to worry about for UX, do not overcomplicate. Basic sanity warning only if necessary.

**Edge Case 4 — No payment method available**

**Condition:** Apple Pay/card not available.

**User sees:** Add payment method prompt.

**CTA:** “Add payment method”

**Fallback:** Route to payment setup.

**Edge Case 5 — Payment authorization canceled**

**Condition:** User cancels Apple Pay/card authorization.

**User sees:** Purchase canceled state.

**Message:** “Purchase canceled. No tokens were bought.”

**CTA:** “Try again”

**Fallback:** Return to buy screen with selected quantity preserved.

**Edge Case 6 — Payment declined**

**Condition:** Card/payment fails.

**User sees:** Error banner.

**Message:** “Payment declined. Try another method.”

**CTAs:**

“Change payment method”

“Try again”

**Backend:** No token credit.

**Edge Case 7 — Payment pending**

**Condition:** Payment provider returns pending state.

**User sees:** Processing state.

**Message:** “Your purchase is processing.”

**Fallback:** Route to home with pending transaction card; do not route to pledge until tokens settle.

**Edge Case 8 — Payment succeeds but token credit delayed**

**Condition:** Payment success, token balance not updated immediately.

**User sees:** Success with pending token credit.

**Message:** “Purchase confirmed. Tokens will appear shortly.”

**Fallback:** Show transaction status and refresh.

**User-facing:** Avoid backend detail.

**Edge Case 9 — User exits during payment**

**Condition:** App backgrounded or closed.

**Backend:** Payment intent state persists.

**Fallback:** On reopen, show:

completed purchase,

canceled purchase,

or pending purchase.

**Edge Case 10 — Network failure after confirmation**

**Condition:** User confirms but connection drops.

**User sees:** Uncertain state.

**Message:** “We’re checking your purchase status.”

**Fallback:** Poll/retry; avoid duplicate purchase CTA until status known.

### **Flow 8 — Purchase Success and Transition to Pledge**

**Main Goal**

Confirm token purchase and move the user immediately into pledging tokens to a team.

**Part in Overall User Journey**

This is the critical transition from “I bought something” to “I am now supporting my team and earning points.” The user should not be left with unpledged tokens unless they intentionally stop.

**Desired User Action Flow**

**Happy Path**

Purchase succeeds.

App shows success state:

“50 tokens purchased”

“Next: pledge to your team to start earning.”

User taps **Pledge tokens** or automatically continues after short confirmation.

App routes to team detection/selection if team not already chosen.

If team already chosen, app routes to pledge confirmation.

**What User Sees / Receives**

Celebration moment.

Token count.

Clear next step.

No technical settlement language.

**What Happens on Backend**

Create transaction record.

Increase unpledged token balance.

Update user onboarding state:

purchase complete,

pledge pending.

Determine next route:

no selected team: location/team detection,

selected team exists: pledge confirmation.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — User stops after purchase**

**Condition:** User closes app before pledge.

**Fallback on return:** Home shows unpledged token card.

**Message:** “You have 50 tokens ready to pledge.”

**CTA:** “Pledge now”

**Edge Case 2 — User already has a team selected before purchase**

**Condition:** Team was selected via campaign/location/manual choice.

**Fallback:** Skip detection and route directly to pledge screen.

**Edge Case 3 — User bought additional tokens after existing pledge**

**Condition:** Returning pledged user buys more tokens.

**User sees:** “Add these tokens to Panthers?”

**CTA:** “Pledge to Panthers”

**Secondary:** “Choose different team”

**Backend:** New tokens are unpledged until confirmed.

### **Flow 9 — Pledge Tokens to Team**

**Main Goal**

Commit purchased tokens to a selected team’s points program and activate earning.

**Part in Overall User Journey**

This is the defining conversion moment. It turns generic tokens into team loyalty. It should feel meaningful but simple.

**Desired User Action Flow**

**Happy Path**

User arrives at **Pledge your tokens** screen.

App shows:

selected team card,

token amount,

default allocation: 100% to selected team,

explanation: “Pledging unlocks the team skin and starts your points earning.”

User taps **Confirm pledge**.

App processes pledge.

App shows success animation:

team colors animate in,

“Panthers skin unlocked”

“You’re earning points now.”

App routes to team-skinned Points Dashboard.

**What User Sees / Receives**

Team card.

Token amount.

Simple pledge explanation.

Confirmation CTA.

Team skin unlock moment.

**What Happens on Backend**

Validate token balance.

Assign tokens to selected team program.

Mark tokens as pledged.

Create pledge record.

Initialize team-specific points state.

Apply skin preference.

Calculate initial points if applicable.

Determine user tier.

Update onboarding as complete.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — No tokens available to pledge**

**Condition:** User reaches pledge screen with 0 unpledged tokens.

**User sees:** Empty pledge state.

**Message:** “Buy tokens before pledging.”

**CTA:** “Buy tokens”

**Fallback:** Route to purchase.

**Edge Case 2 — Selected team unavailable**

**Condition:** Team removed or temporarily unavailable.

**User sees:** Team unavailable message.

**Message:** “This team isn’t available right now.”

**CTA:** “Choose another team”

**Fallback:** Route to team picker.

**Edge Case 3 — Pledge processing failure**

**Condition:** Backend error.

**User sees:** Error state.

**Message:** “We couldn’t complete your pledge. Your tokens are still in your wallet.”

**CTA:** “Please, try again”

**Fallback:** No token loss; preserve state.

**Edge Case 4 — Network failure during pledge**

**Condition:** Connection drops after user taps confirm.

**User sees:** Status check.

**Message:** “Checking your pledge status…”

**Fallback:** Poll backend; avoid duplicate pledge submission.

**Edge Case 5 — User backs out before confirming**

**Condition:** User taps back.

**User sees:** Return to team selection or purchase success.

**Backend:** No pledge committed.

**Fallback:** Tokens remain unpledged.

**Edge Case 6 — User wants to change selected team before pledge**

**Condition:** User taps team card or “Change team.”

**User sees:** Team picker.

**Backend:** No pledge committed until confirm.

**Fallback:** Return to pledge with new team.

**Edge Case 7 — User has already pledged to a different team**

**Condition:** Returning user with active pledge tries to pledge new tokens.

**User sees:** Default prompt to pledge additional tokens to primary team.

**Secondary option:** “Choose another team”

**Design caution:** Avoid introducing split complexity unless necessary.

**Fallback:** If multi-team allowed, explain each team tracks separately. If not allowed, require team change flow.

### **Flow 10 — Team Skin Unlock**

**Main Goal**

Reward the user visually and emotionally for pledging by transforming the app from neutral League mode into the selected team’s branded skin.

**Part in Overall User Journey**

This is the “magic moment.” It confirms that the user’s action had a visible effect and that they are now part of a team-specific points program.

**Desired User Action Flow**

**Happy Path**

Pledge succeeds.

App transitions from neutral skin to team skin.

User sees:

team logo,

team colors,

success message,

token pledge confirmation,

points/tier initialization.

App routes to Points Dashboard.

**What User Sees / Receives**

Animation or high-impact transition.

“Panthers skin unlocked.”

“50 tokens pledged.”

“You’re earning points now.”

CTA: “View my points”

**What Happens on Backend**

Set selected team as primary team.

Store active skin.

Initialize team dashboard.

Apply team theme to future sessions.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Skin assets fail to load**

**Condition:** Logo/colors not available.

**User sees:** Team name and fallback colors.

**Fallback:** Use generic team badge placeholder.

**Backend:** Pledge still valid.

**Edge Case 2 — User has low-bandwidth connection**

**Condition:** Animation/assets slow.

**User sees:** Lightweight success state.

**Fallback:** Skip animation; show static confirmation.

**Edge Case 3 — Theme conflict with accessibility**

**Condition:** Team colors create contrast issue.

**Fallback:** Use accessible variant of team theme.

**Design requirement:** Team colors should be adapted for readability.

### **Flow 11 — Points Dashboard**

**Main Goal**

Show the fan their team-specific points, tier/status, pledged tokens, and ways to earn more.

**Part in Overall User Journey**

This is the main post-pledge home. It should become the fan’s recurring destination.

**Desired User Action Flow**

**Happy Path**

User lands on team-skinned dashboard.

App shows:

team name,

points balance,

tier/status,

pledged tokens,

progress to next tier,

ways to earn,

current boosts if any.

User can tap:

Buy more tokens,

View quests,

Enter raffle,

Buy/redeem tickets,

Refer a fan,

Vote if eligible.

**What User Sees / Receives**

Immediate sense of status.

Clear next actions.

Team-specific identity.

No backend mechanics.

**What Happens on Backend**

Fetch user points.

Fetch tier.

Fetch available quests.

Fetch active boosts.

Fetch rewards availability.

Fetch pledge balance.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Zero points after pledge**

**Condition:** User has pledged but no points credited yet.

**User sees:** “You’re ready to earn.”

**CTA:** “View ways to earn”

**Fallback:** Avoid making dashboard feel empty.

**Edge Case 2 — Points update delayed**

**Condition:** Recent action not reflected.

**User sees:** Pending activity.

**Message:** “Points update in a few minutes.”

**Fallback:** Show recent activity with pending status.

**Edge Case 3 — Tier calculation unavailable**

**Condition:** Points loaded but tier unavailable.

**User sees:** Points balance, tier placeholder.

**Message:** “Tier status updating.”

**Fallback:** Keep dashboard usable.

**Edge Case 4 — User has multiple team pledges**

**Condition:** Multi-team scenario allowed.

**User sees:** Primary team dashboard with switcher or secondary team summary.

**Fallback:** Keep primary skin dominant; do not confuse the user.

**Edge Case 5 — Offline dashboard**

**Condition:** No connection.

**User sees:** Last synced dashboard.

**Message:** “Offline — balances may be out of date.”

**Fallback:** Disable actions requiring network.

### **Flow 12 — Tier / Status Progression**

**Main Goal**

Help the fan understand their progress through the loyalty tiers and what reaching the next tier unlocks.

**Part in Overall User Journey**

Tier progression motivates continued engagement. It provides a framework for voting eligibility and reward access.

**Desired User Action Flow**

**Happy Path**

User views dashboard or tier detail.

App shows:

current tier: Bronze / Silver / Gold / Platinum or Diamond,

points earned,

progress bar to next tier,

benefits unlocked,

next benefits.

User sees ways to earn more points.

User taps a recommended action.

**What User Sees / Receives**

Clear tier name.

Progress to next tier.

Benefits.

Eligibility cues, e.g. “Voting unlocks at Silver.”

**What Happens on Backend**

Calculate tier based on cumulative points or status metric.

Fetch benefit rules.

Fetch user’s current qualification status.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — User has enough points but tier not updated**

**User sees:** Pending tier update.

**Message:** “You’ve reached the next tier. Updating status…”

**Fallback:** Show optimistic progress if safe.

**Edge Case 2 — Spending points should not reduce status**

**Condition:** User spends points on raffle/ticket.

**User sees:** Points balance decreases, tier remains based on cumulative earned status if that is the intended model.

**Design requirement:** Make distinction between “available points” and “status progress” if needed.

**Fallback:** Avoid user thinking spending points causes demotion.

**Edge Case 3 — Tier benefits unavailable**

**Condition:** Benefits not configured.

**User sees:** Generic benefit state.

**Message:** “More benefits coming soon.”

**Fallback:** Keep tier progress visible.

### **Flow 13 — Game-Day Boost**

**Main Goal**

Show an automatic boost when the user is at a relevant game or event, encouraging timely token purchase and pledge.

**Part in Overall User Journey**

Game-day boost supports the stadium-download hypothesis. It creates urgency and contextual relevance.

**Desired User Action Flow**

**Happy Path**

User opens app at stadium or during active game window.

App detects eligible game-day context.

User sees boost banner or modal:

“You’re at the game”

“3× boost unlocked”

“Buy and pledge now to earn boosted points”

User taps **Buy & pledge at 3×**.

App routes to purchase flow.

User buys tokens.

User pledges tokens.

Boost applies to eligible action.

Dashboard shows boosted earning.

**What User Sees / Receives**

Boost badge.

Countdown.

Clear action.

No stacked multiplier complexity.

**What Happens on Backend**

Check location.

Check game schedule.

Check team eligibility.

Check user pledge/team state.

Apply active boost to eligible transaction/pledge.

Record boost-applied points.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Location not enabled**

**Condition:** App cannot confirm stadium presence.

**User sees Popup:** “Enable location to check game-day boosts.”

**CTAs:**

“Enable location”

“Continue without boost”

**Fallback:** User can still buy/pledge normally.

**Edge Case 2 — User is at stadium but supports away team**

**Condition:** Location detected, pledged team differs from home team.

**User sees:** Boost eligibility depends on rule configuration.

**Fallback copy:** “No boost available for your pledged team right now.”

**Design requirement:** Avoid making user feel wrong for supporting different team.

**Edge Case 3 — Boost expired during purchase**

**Condition:** Countdown ends before purchase/pledge completes.

**User sees:** Expired message.

**Message:** “This boost has ended.”

**Fallback:** Continue normal purchase/pledge; do not apply boost.

**Edge Case 4 — Boost active at purchase but not pledge**

**Condition:** Tokens bought during boost window, pledge after window.

**Rule needed:** Product must define whether boost applies at purchase, pledge, or both.

**Prototype recommendation:** Copy should say “Buy and pledge during the active window.”

**Fallback:** If incomplete, show warning before window ends.

**Edge Case 5 — Boost calculation delayed**

**Condition:** User completes action but boost points not shown.

**User sees:** Pending state.

**Message:** “Boosted points are being added.”

**Fallback:** Show recent activity pending.

**Edge Case 6 — Multiple boosts active**

**Condition:** Tier boost + game-day boost.

**User sees:** One cumulative boost figure.

**Message:** “Your active boost: 3×”

**Design requirement:** Do not show stacked multiplier math.

### **Flow 14 — Quests / Ways to Earn**

**Main Goal**

Show the fan a clear list of actions that earn points or improve engagement.

**Part in Overall User Journey**

Quests are the repeat engagement surface. They make the loyalty system actionable.

**Desired User Action Flow**

**Happy Path**

User taps **Quests** or **Ways to earn**.

App shows team-specific quest list.

Example quests:

Sign in this month,

Attend a home game,

Refer a fan,

Buy team merch,

Buy tickets,

Enter raffle,

Vote if eligible.

User taps a quest.

App opens quest detail or routes to the relevant flow.

User completes action.

App updates points/progress.

**What User Sees / Receives**

List of available, completed, locked, and upcoming quests.

Point values or boost labels.

Clear CTA for each.

**What Happens on Backend**

Fetch quest configuration.

Fetch completion status.

Fetch eligibility.

Track completion.

Award points or mark pending.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Quest locked by tier**

**Condition:** User below required tier.

**User sees:** Locked state.

**Message:** “Reach Silver to unlock.”

**Fallback:** Show actions to earn more points.

**Edge Case 2 — Quest completed**

**Condition:** User already completed quest.

**User sees:** Completed checkmark.

**Fallback:** Show next eligible quest.

**Edge Case 3 — Quest expired**

**Condition:** Time-limited quest no longer active.

**User sees:** Expired label.

**Fallback:** Hide or move to completed/expired section.

**Edge Case 4 — Quest requires external validation**

**Condition:** Attend game or merch purchase must be verified.

**User sees:** Pending state.

**Message:** “We’re verifying this activity.”

**Fallback:** Award points after confirmation.

**Edge Case 5 — No quests available**

**Condition:** Team has not configured quests.

**User sees:** Empty state.

**Message:** “More ways to earn are coming soon.”

**Fallback:** Show evergreen actions like buy tokens/referral if available.

### **Flow 15 — Referral Flow**

**Main Goal**

Let fans invite other fans and earn points when referrals qualify.

**Part in Overall User Journey**

Referral is an additional point-earning mechanism that can grow the platform across teams. The meeting notes state referrals can include fans of any team.

**Desired User Action Flow**

**Happy Path**

User opens referral quest.

App shows referral screen.

User sees:

referral link/code,

share CTA,

reward explanation.

User taps **Invite a fan**.

Native share sheet opens.

Referred fan signs up.

Referrer receives points when qualification condition is met.

**What User Sees / Receives**

Simple invite UI.

Status of invited fans.

Pending/completed referral rewards.

**What Happens on Backend**

Generate referral code.

Track shared link attribution.

Attribute new user signup.

Validate qualification condition.

Award points.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Referral link fails to generate**

**User sees:** Error.

**Message:** “We couldn’t create your invite link.”

**CTA:** “Try again”

**Edge Case 2 — User shares but referred fan does not sign up**

**User sees:** No completed reward.

**Fallback:** Optional pending invite state if trackable.

**Edge Case 3 — Referred fan supports another team**

**Condition:** Referral is valid regardless of team.

**User sees:** Reward status still valid.

**Backend:** Attribute across teams.

**Edge Case 4 — Duplicate referral**

**Condition:** Referred user already has account.

**User sees:** Referrer may not get points.

**Message:** “This invite wasn’t eligible.”

**Fallback:** Keep neutral and simple.

**Edge Case 5 — Referral reward pending**

**Condition:** Referred user signed up but has not completed qualifying action.

**User sees:** Pending status.

**Message:** “Waiting for your friend to complete setup.”

### **Flow 16 — Raffle Entry**

**Main Goal**

Allow fans to use points to enter raffles for experiences or merchandise.

**Part in Overall User Journey**

Raffles are one of the three core engagement types prioritized in the brief. They provide a clear reason to earn and spend points.

**Desired User Action Flow**

**Happy Path**

User opens Rewards or Raffles.

App shows available raffle.

User sees:

prize,

entry cost in points,

available points,

number of entries,

deadline,

draw date.

User selects number of entries.

App shows confirmation.

User confirms.

Points are deducted.

Entry is recorded.

App shows success state.

**What User Sees / Receives**

Raffle card.

Point cost.

Confirmation.

Entry receipt.

**What Happens on Backend**

Validate user points balance.

Validate raffle availability.

Deduct points.

Create raffle entry.

Update points balance.

Record transaction.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Insufficient points**

**User sees:** Error or disabled CTA.

**Message:** “You need more points to enter.”

**CTA:** “Earn more points”

**Fallback:** Route to quests.

**Edge Case 2 — Raffle closed**

**User sees:** Closed state.

**Message:** “This raffle has ended.”

**Fallback:** Show other available raffles.

**Edge Case 3 — User tries too many entries**

**Condition:** Entry max exists.

**User sees:** Inline error.

**Message:** “Maximum entries reached.”

**Fallback:** Adjust to allowed max.

**Edge Case 4 — Points deduction fails**

**User sees:** Error.

**Message:** “We couldn’t complete your entry. Your points were not used.”

**Fallback:** Retry.

**Edge Case 5 — Entry recorded but UI update delayed**

**User sees:** Pending entry.

**Message:** “Your entry is being confirmed.”

**Fallback:** Show in activity list.

### **Flow 17 — Ticket Purchase and Points Redemption**

**Main Goal:** Allow fans to either buy tickets with cash or redeem tickets with points — but not combine cash and points in a single purchase.

**Part in Overall User Journey:** Ticketing is a core engagement type. It should feel familiar, similar to airline miles: either pay with money and earn points, or redeem with points.

**Desired User Action Flow**

**Happy Path A — Buy Ticket with Cash**

User opens Tickets.

User selects event/game.

User chooses ticket.

User selects **Pay with cash**.

App shows price and payment method.

User confirms.

Payment succeeds.

App shows ticket confirmation.

User earns points if applicable.

**Happy Path B — Redeem Ticket with Points**

User opens Tickets.

User selects event/game.

User chooses ticket.

User selects **Redeem with points**.

App shows required points and available points.

User confirms.

Points are deducted.

App shows ticket confirmation.

**What User Sees / Receives**

Ticket list.

Payment choice:

cash,

points.

Clear statement: “Cash and points can’t be combined.”

Confirmation.

**What Happens on Backend**

Fetch events/tickets.

Validate inventory.

Validate cash payment or points balance.

Create ticket order.

Deduct points or process payment.

Award points on cash purchase if applicable.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — User tries to combine cash and points**

**Condition:** User lacks points and expects partial payment.

**User sees:** Explanation.

**Message:** “Tickets can be purchased with cash or redeemed with points, not both.”

**Fallback:** Let user choose cash or earn more points.

**Edge Case 2 — Insufficient points**

**User sees:** Disabled redeem CTA.

**Message:** “You need X more points.”

**CTA:** “Earn points”

**Fallback:** Show cash option.

**Edge Case 3 — Ticket sold out**

**User sees:** Sold out state.

**Fallback:** Show other games or ticket types.

**Edge Case 4 — Payment failure**

**User sees:** Declined message.

**Fallback:** Try another payment method.

**Edge Case 5 — Points redemption failure**

**User sees:** Error.

**Message:** “We couldn’t redeem your points. No points were used.”

**Fallback:** Retry.

**Edge Case 6 — Ticket confirmation delayed**

**User sees:** Pending order.

**Message:** “Your ticket is being confirmed.”

**Fallback:** Show order in activity.

### **Flow 18 — Voting Eligibility and Voting Flow**

**Main Goal**

Allow eligible fans to vote on simple team-related decisions, such as jersey or logo design, while keeping voting secondary and lightweight.

**Part in Overall User Journey**

Voting is explicitly deprioritized relative to purchase, pledge, points, raffles, and tickets. It is considered complex from a UX perspective because it asks the user to deliberate. Therefore, the prototype should include voting as a secondary surface, not a main onboarding path.

Eligibility begins at **Silver tier or above**.

**Desired User Action Flow**

**Happy Path**

User reaches Silver tier.

Voting quest or card becomes available.

User opens vote.

App shows:

poll title,

two options,

visual previews,

voting deadline,

simple explanation.

User selects option.

User confirms vote.

App shows success:

“Vote submitted”

optional results hidden or shown depending on rules.

Voting may count toward engagement, but does not provide major multipliers.

**What User Sees / Receives**

Simple two-option poll.

Eligibility status.

Confirmation.

No governance/token-weight mechanics.

**What Happens on Backend**

Check tier eligibility.

Check vote availability.

Record vote.

Prevent duplicate vote if applicable.

Update engagement status if applicable.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — User below Silver**

**User sees:** Locked vote card.

**Message:** “Reach Silver to vote.”

**CTA:** “Earn more points”

**Fallback:** Route to quests.

**Edge Case 2 — Vote closed**

**User sees:** Closed state.

**Message:** “Voting has ended.”

**Fallback:** Show result if allowed or hide.

**Edge Case 3 — User already voted**

**User sees:** Submitted state.

**Message:** “Your vote has been submitted.”

**Fallback:** Do not allow duplicate vote unless vote changes are allowed.

**Edge Case 4 — User tries to vote without selecting option**

**User sees:** Inline error.

**Message:** “Choose an option to submit your vote.”

**Edge Case 5 — Vote submission fails**

**User sees:** Error.

**Message:** “We couldn’t submit your vote. Try again.”

**Fallback:** Preserve selected option.

**Edge Case 6 — Voting option assets fail to load**

**User sees:** Text-only options.

**Fallback:** Still allow vote if option labels load.

**Edge Case 7 — Voting is removed from beta**

**Condition:** Product team cuts voting from MVP.

**Fallback:** Remove from main navigation and quests.

**Prototype option:** Include as optional/deprioritized module after primary flows.

### **Flow 19 — Manage Pledge / Change Team / Split Allocation**

**Main Goal**

Allow the user to view and manage where their tokens are pledged, while avoiding confusion about double-earning or team identity.

**Part in Overall User Journey**

This is an advanced management flow, not a first-run priority. The initial draft includes a “Manage Pledge / Split” screen with Panthers 80% and Dolphins 20%. This may be useful to demonstrate flexibility, but it introduces complexity. It should be handled carefully.

**Desired User Action Flow**

**Happy Path A — View Current Pledge**

User opens Manage.

App shows:

primary team,

total pledged tokens,

current allocation,

team-specific points,

manage options.

User can:

buy more tokens,

pledge unpledged tokens,

change allocation if allowed,

change primary team if allowed.

**Happy Path B — Adjust Split if Allowed**

User opens Manage Pledge.

User sees allocation sliders or token counts.

User adjusts Panthers to 80%, Dolphins to 20%.

App enforces total = 100%.

User taps **Save changes**.

App shows confirmation.

Backend updates token allocation.

App returns to dashboard.

**Happy Path C — Change Primary Team if Split Not Allowed**

User opens Manage Pledge.

User taps **Change team**.

App warns user about implications.

User selects new team.

User confirms.

Team skin updates after confirmation.

**What User Sees / Receives**

Current team.

Current pledged tokens.

Clear explanation that each token can only support one team at a time.

Confirmation before changes.

**What Happens on Backend**

Fetch current pledge records.

Validate allocation.

Update pledge team assignment.

Recalculate team-specific points eligibility if needed.

Update primary team/skin.

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — User allocation does not total 100%**

**User sees:** Inline error.

**Message:** “Your allocation must total 100%.”

**Fallback:** Disable save.

**Edge Case 2 — User tries to double-pledge same tokens**

**User sees:** Explanation.

**Message:** “Each token can only be pledged to one team.”

**Fallback:** Enforce allocation constraints.

**Edge Case 3 — User changes primary team**

**User sees:** Confirmation modal.

**Message:** “Changing your primary team will update your app skin.”

**Fallback:** Require explicit confirmation.

**Edge Case 4 — Team-specific points do not transfer**

**Condition:** Points are team-scoped.

**User sees:** Warning.

**Message:** “Points and status are tracked by team.”

**Fallback:** User must confirm before moving tokens.

**Edge Case 5 — Save fails**

**User sees:** Error.

**Message:** “We couldn’t save your changes.”

**Fallback:** Keep previous allocation.

**Edge Case 6 — Multi-team pledge not supported in beta**

**Design fallback:** Replace split UI with simple:

current team,

pledged tokens,

buy more,

change team.

**Recommendation:** For MVP clarity, avoid split allocation unless stakeholders confirm it is required.

### **Flow 20 — Activity and Transaction History**

**Main Goal**

Give users a clear record of purchases, pledges, points earned, points spent, raffle entries, referrals, ticket transactions, and votes.

**Part in Overall User Journey**

Activity history supports trust and reduces confusion, especially where points updates or payment confirmations may be delayed.

**Desired User Action Flow**

**Happy Path**

User opens Activity or taps recent activity card.

App shows chronological list:

token purchase,

pledge,

points earned,

raffle entry,

ticket purchase,

referral pending/completed,

vote submitted.

User taps an item.

App shows detail screen or bottom sheet.

**What User Sees / Receives**

Transaction type.

Date/time.

Status:

completed,

pending,

failed.

Amount:

tokens,

dollars,

points.

**What Happens on Backend**

Fetch transaction and activity log.

Display latest status.

Allow retry for failed eligible actions.

**Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — No activity**

**User sees:** Empty state.

**Message:** “Your activity will appear here.”

**CTA:** “Buy tokens”

**Edge Case 2 — Pending activity**

**User sees:** Pending badge.

**Message:** “Still processing.”

**Fallback:** Refresh status.

**Edge Case 3 — Failed transaction**

**User sees:** Failed badge.

**CTA:** “Try again” if appropriate.

### **Flow 21 — Global Error, Loading, and Recovery States**

**Main Goal**

Ensure the prototype accounts for real-world mobile conditions: poor connectivity, stadium network congestion, failed payments, delayed points, and incomplete onboarding.

**Part in Overall User Journey**

These states prevent the app from feeling broken and preserve user trust.

**Desired User Action Flow:** 

**Common Loading States**
these states should appear on/under the buttons/spaces where the action was happening

“Loading your wallet…”

“Processing purchase…”

“Confirming pledge…”

“Updating points…”

“Checking boost eligibility…”

**Common Success States**
These states should appear as non-invasive popups with green confirmatory ticked icon

“Account created.”

“Tokens purchased.”

“Pledge confirmed.”

“Team skin unlocked.”

“Points added.”

“Raffle entered.”

“Vote submitted.”

“Ticket confirmed.”

**Common Error States**

“Something went wrong.”

“Check your connection.”

“Payment declined.”

“We couldn’t confirm your pledge.”

“Points are taking longer than expected.”

### **Edge Cases, Fail-States, and Fallbacks**

**Edge Case 1 — Stadium connectivity issues**

**Design requirement:** All critical flows need retry and clear status.

**Fallback:** Preserve user inputs and transaction state.

**Edge Case 2 — Duplicate tap on purchase/pledge**

**Backend:** Idempotency required.

**User sees:** Button loading state.

**Fallback:** Prevent duplicate actions.

**Edge Case 3 — App closed mid-action**

**Backend:** Persist transaction state.

**User sees on return:** Resume or status confirmation.

**Edge Case 4 — Data stale**

**User sees:** Last updated timestamp.

**Fallback:** Pull-to-refresh or automatic retry.

**Edge Case 5 — Feature unavailable**

**User sees:** Feature-specific unavailable state.

**Message:** “This feature isn’t available right now.”

**Fallback:** Return to dashboard.

## **Canonical End-to-End Happy Path**

This is the cleanest narrative for the first mockup sequence:

1. User downloads and opens NFL Fan Wallet.
2. User creates account with name, email, and phone.
3. User verifies phone.
4. User lands on neutral League home.
5. User taps **Buy tokens**.
6. User buys 50 tokens at $1 each.
7. User grants location.
8. App detects Carolina Panthers.
9. User confirms Panthers.
10. User pledges 50 tokens.
11. App unlocks Panthers skin.
12. User lands on Panthers Points Dashboard.
13. User sees Bronze tier and points balance.
14. User sees ways to earn: attend game,vrefer fan, enter raffle, buy/redeem tickets, vote at Silver.
15. User sees game-day boost if eligible.
16. User continues to quests/rewards.

This path should be the spine of the prototype.

## **Canonical Edge-Case Path for Prototype Coverage**

To show product maturity, the prototype should also include at least a few edge-case frames:

1. Location denied → manual team picker.
2. Payment declined → try another method.
3. Tokens purchased but not pledged → “Pledge now” card.
4. Boost expired → continue normal earning.
5. Voting locked → reach Silver to unlock.
6. Insufficient points for raffle/ticket → earn more points.
7. Points pending → “updating soon” state.

These do not need to dominate the main screens, but they should be enabled in the specification so the mockup system can generate robust screens later.

## **Recommended MVP Flow Priority**

Because the first deliverable is mockups/screens for an NFL sync and the stated priority is flow over copy, the prototype should prioritize the flows in this order:

**Priority 1 — Must-have happy path**

- Splash.
- Create account.
- Verify phone.
- Home empty state.
- Buy tokens.
- Location/team detection.
- Confirm team.
- Pledge tokens.
- Unlock team skin.
- Points dashboard.

**Priority 2 — Must-have engagement surfaces**

- Quests / ways to earn.
- Game-day boost.
- Raffle entry.
- Ticket purchase/redeem.
- Referral.

**Priority 3 — Secondary / conditional**

- Voting eligibility and vote.
- Manage pledge / change team.
- Activity history.
- Error states.
- Pending states.

**Priority 4 — Optional / likely not needed in first mockup pass**

- Full multi-team split allocation.
- Complex tier benefit explanations.
- Detailed admin/team configuration.
- Full economic mechanics.

# 2. Screen Inventory & Component Breakdown

Screens are grouped by journey phase. Each screen lists its layout, static elements, interactive CTAs, and the variant/edge states it must render so the mockup system can generate every frame.

### A. Shared Chrome & Reusable Components (apply to all screens unless noted)

- **iOS status bar** (time, signal, battery) pinned top.
- **Top app header:** contextual title, optional back chevron (left), optional team badge (right). Neutral League logo pre-pledge; team badge post-pledge.
- **Skin layer:** every screen renders in one of three skins — *League/Neutral* (dark, gold/electric accent), *Carolina Panthers* (`#0085CA` / `#006BA6`, ink canvas), *Miami Dolphins* (alt). Skin is a global wrapper, not a per-screen asset.
- **Bottom tab bar** (appears only after onboarding completes): Home · Wallet/Tokens · Points · Quests · Rewards/Manage. Active tab themed to current skin.
- **Primary CTA button:** full-width, high-contrast, thumb-zone bottom. Has default / pressed / loading (inline spinner + label e.g. "Confirming pledge…") / disabled states.
- **Secondary CTA:** ghost/text style.
- **Inline field error component**, **toast/pill confirmation**, **pull-to-refresh**, **offline banner**, **"last updated" timestamp** are shared utilities reused across screens (see Section 4).

### B. Onboarding & Entry Screens

**3.1 — Splash / First Launch**

- *Layout:* Centered hero, no tab bar, neutral skin.
- *Static:* NFL Wallet wordmark, $1 token medallion, tagline strip, "Powered by Republic" footer.
- *CTAs:* **Create account** (primary) → Profile Registration; **I already have an account** (secondary) → Sign-In.
- *Variant states to draw:*
    - Session-check loading ("Loading your wallet…" + spinner, shown if check > 2s).
    - Referral-context banner ("You were invited to join NFL Wallet").
    - Team-campaign banner ("Panthers game day offer") — banner only, app stays neutral.
    - Offline state (CTAs disabled / retry).
    - Maintenance screen ("temporarily unavailable" + Retry).

**3.2 — Create Your Profile**

- *Layout:* Form screen, step indicator "Step 1 of 3."
- *Static:* Header, helper microcopy.
- *Interactive:* Name field, Email field, Phone field; **Verify phone / Continue** primary CTA.
- *Inline error variants:* empty fields, invalid email, invalid/unsupported phone, duplicate account (with **Sign in** / **Use different details** CTAs).

**3.3 — OTP / Phone Verification**

- *Layout:* Modal or full screen with code-entry boxes.
- *Static:* "Enter the code we texted you," masked phone number.
- *Interactive:* OTP input, **Resend code**, **Edit phone number**.
- *States:* incorrect code, expired code, too-many-attempts lock (countdown), delivery failure.

**3.4 — Wallet Provisioning (invisible / loading)**

- *Static:* "Setting up your wallet…" spinner.
- *Fallback state:* provisioning delay → continue to neutral home with purchase disabled + "pending wallet" status. No backend/crypto error language surfaced.

**3.5 — Sign-In (Returning User)**

- *Layout:* Email/phone form, neutral skin.
- *Interactive:* Email-or-phone field, **Continue** → OTP (reuses 3.3).
- *Routing variants the screen leads into:* account-not-found ("No account found" + Create account / Try again), suspended/restricted account screen ("needs review" + Contact support).

**3.6 — Success-routing loader** (post sign-in / session resume)

- Branches to: team dashboard (pledged), neutral home (no pledge), unpledged-tokens home, or resume-onboarding step.

### C. Location & Team Selection Screens

**3.7 — Location Permission Prompt**

- *Static:* Explanation of why location helps ("find your team / game-day boosts"), icon.
- *CTAs:* **Allow location** (primary), **Not now** (secondary).
- *Note:* leads to OS-level permission dialog (system modal, see Section 4).

**3.8 — Team Detected**

- *Static:* "North Carolina detected," suggested team card (logo + name), supporting line "Your home team is the Carolina Panthers."
- *CTAs:* **Sounds good** → Pledge confirmation; **Choose a different team** → Manual picker.
- *Variant states:* multi-team chooser ("multiple teams near you"), at-stadium-but-different-team (suggested + override, non-coercive copy), boost hint pill ("Game day boost may be available after you pledge").

**3.9 — Location Fallback / Detection Failed**

- *States:* permission denied → "choose manually" message; OS-level previously denied → "Open Settings" + "Choose team manually"; GPS unavailable → "Try again" / "Choose team manually"; no eligible team in region → picker with first-cohort teams; suspicious/spoofed location → neutral "couldn't confirm boost," normal flow continues.

**3.10 — Manual Team Picker**

- *Layout:* Search input + scrollable grid/list of team logos & names.
- *Interactive:* search field, team tiles (selectable state), **Confirm team** CTA.
- *Variant states:* selected-team highlight, team not in beta cohort ("isn't available yet" + Notify me / Choose available), no-selection error ("Choose a team to continue"), team-data load failure ("Teams couldn't load" + Try again / Continue later), campaign-preselected team (Panthers pre-highlighted, overridable).

**3.11 — Team Confirmation**

- *Static:* Selected team card, brief confirm line.
- *CTAs:* **Confirm** → Pledge; **Change** → back to picker.

### D. Purchase & Pledge Screens

**3.12 — Home / Empty State (Neutral, Pre-Purchase)**

- *Layout:* Neutral skin, greeting header, tab bar visible.
- *Static:* Wallet balance "0 tokens," Points "0," Team "none yet."
- *Hero card:* "Get NFL Tokens · $1 each."
- *CTA:* **Buy tokens** → Purchase.
- *Variant states:* tokens-but-no-pledge ("You have unpledged tokens" + **Pledge now** / **Buy more**), pledge-but-no-points (route to dashboard instead), pending-purchase card ("processing" + View status), offline (cached balances + "may be out of date," purchase disabled).

**3.13 — Buy NFL Tokens**

- *Layout:* Price header "$1.00 per token," quantity stepper, quick-amount chips (10 / 50 / 100), running total, payment-method row.
- *Interactive:* quantity input/stepper, chips, payment method selector, **Review purchase** CTA.
- *Variant states:* quantity = 0 ("Buy at least 1 token," CTA disabled), non-numeric input (reset to last valid), very large quantity (sanity warning), no payment method ("Add payment method" CTA).
- *(Panthers in-stadium variant:* fixed packs — **$10 Starter / $25 Most popular (default) / $50 Superfan** — instead of free quantity; reward-framed callout for new fans, tier-progress nudge for returning fans.)*

**3.14 — Review Purchase (sheet or screen)**

- *Static:* token quantity, unit price, total, payment method, "Next: pledge to your team."
- *CTA:* **Confirm purchase** → payment.

**3.15 — Apple Pay / Payment Sheet**

- *Static:* card "•••• 6411," line item, total.
- *CTA:* **Pay $X.00** / **Confirm with side button**.
- *Variant states:* declined (inline error + Change method / Try again), canceled (return to Buy with quantity preserved, "No tokens were bought"), pending ("processing" → route home with pending card), Apple Pay unavailable → card-entry fallback, network drop after confirm ("We're checking your purchase status," idempotent, no duplicate CTA).

**3.16 — Purchase Processing / Success**

- *Static:* green check, "50 tokens purchased," "Next: pledge to your team to start earning."
- *CTA:* **Pledge tokens** → Pledge (or auto-continue).
- *Variant states:* token-credit delayed ("Tokens will appear shortly"), user already has a team (skip detection → pledge), returning pledged user ("Add these tokens to Panthers?" + Pledge / Choose different team).

**3.17 — Pledge Your Tokens**

- *Static:* selected-team card, token amount, default allocation 100%, explanation ("Pledging unlocks the team skin and starts points").
- *CTA:* **Confirm pledge**; secondary **Change team**.
- *Variant states:* no tokens to pledge ("Buy tokens before pledging" + Buy tokens), team unavailable (Choose another team), processing failure ("tokens are still in your wallet" + Try again), network drop ("Checking your pledge status…", idempotent), already-pledged-elsewhere prompt (pledge-additional vs choose-another).

**3.18 — Team Skin Unlock (Magic Moment)**

- *Layout:* Full-bleed transition animation, team colors animate in.
- *Static:* team logo, "Panthers skin unlocked," "50 tokens pledged," "You're earning points now."
- *CTA:* **View my points** → Dashboard.
- *Variant states:* skin assets fail (team name + fallback colors / generic badge), low bandwidth (static lightweight success, skip animation), accessibility contrast conflict (accessible color variant).

### E. Core Loyalty / Dashboard Screens

**3.19 — Points Dashboard (Team-Skinned Home)**

- *Layout:* Team skin, header with team name + badge, tab bar.
- *Static:* points balance, tier/status badge, pledged-tokens count, progress bar to next tier, "ways to earn" preview, active-boost chip (if any), recent-activity strip.
- *CTAs:* Buy more tokens, View quests, Enter raffle, Buy/redeem tickets, Refer a fan, Vote (if eligible).
- *Variant states:* zero points post-pledge ("You're ready to earn" + View ways to earn), points-update-delayed (pending activity row), tier-unavailable (placeholder "Tier status updating"), multi-team (primary skin + switcher/secondary summary), offline (last-synced + disabled network actions).

**3.20 — Tier / Status Detail**

- *Static:* current tier (Bronze/Silver/Gold/Platinum-Diamond), points earned, progress bar, benefits-unlocked list, next-benefits list, eligibility cues ("Voting unlocks at Silver").
- *CTA:* recommended earn action.
- *Variant states:* tier-not-yet-updated ("Updating status…", optimistic progress), spend-doesn't-demote (distinguish "available points" vs "status progress"), benefits unconfigured ("More benefits coming soon").

**3.21 — Game-Day Boost (banner/modal + boosted purchase entry)**

- *Static:* "You're at the game," "3× boost unlocked," countdown timer, boost badge.
- *CTA:* **Buy & pledge at 3×** → Purchase.
- *Variant states:* location off (enable-location popup + Continue without boost), away-team-no-boost (neutral copy), boost expired during purchase ("This boost has ended," normal flow), boost-at-purchase-not-pledge (warning copy "Buy and pledge during the active window"), boost-calc delayed ("Boosted points are being added"), multiple boosts (single cumulative "3×," no stacked math).

### F. Engagement Surfaces

**3.22 — Quests / Ways to Earn (list)**

- *Layout:* Team-skinned scrollable list, sectioned (available / completed / locked / upcoming).
- *Static:* quest cards with point value or boost label.
- *CTA:* tap quest → quest detail or relevant flow.
- *Variant states:* tier-locked ("Reach Silver to unlock"), completed (checkmark), expired (label / moved section), external-validation-pending ("We're verifying this activity"), no quests configured ("More ways to earn coming soon" + evergreen actions).

**3.23 — Quest Detail** — title, description, reward, CTA routing into the action flow; pending/completed states.

**3.24 — Referral**

- *Static:* referral link/code (`panthers.co/r/anna7k`), reward explanation ("Both get +5 bonus tokens"), invited-fans status list.
- *CTAs:* **Copy** (→ "Copied" pill 1.6s), **Invite a fan / Share invite** → native share sheet.
- *Sub-screens:* Referral Sent ("Waiting for your friend to join" pending state), Referral Reward ("Your friend joined," new balance, "+5 referral bonus"), with **Invite another** (loop) / **Done**.
- *Variant states:* link-generation failure (Try again), shared-but-no-signup (pending), cross-team referral (still valid), duplicate referral ("This invite wasn't eligible"), reward pending ("Waiting for your friend to complete setup").

**3.25 — Raffle List / Raffle Detail**

- *Static:* prize, entry cost (points), available points, number-of-entries selector, deadline, draw date.
- *CTA:* select entries → **Confirm entry** → success/receipt.
- *Variant states:* insufficient points (disabled + "Earn more points" → quests), raffle closed ("This raffle has ended" + other raffles), max entries reached, deduction failure ("points were not used" + Retry), entry-recorded-UI-delayed ("being confirmed" + activity row).

**3.26 — Tickets List / Event / Ticket Detail**

- *Static:* event/game list, ticket types, price (cash) and points cost, explicit "Cash and points can't be combined."
- *CTAs:* **Pay with cash** (→ payment sheet, earns points) OR **Redeem with points** (→ deduct points). Confirmation screen for each.
- *Variant states:* combine-attempt explanation, insufficient points ("You need X more points" + Earn points + cash option), sold out (other games), payment failure, redemption failure ("No points were used" + Retry), confirmation delayed ("being confirmed" + activity).

**3.27 — Voting List / Vote Detail**

- *Static:* poll title, two options with visual previews, deadline, simple explanation, eligibility status.
- *CTA:* select option → **Confirm vote** → "Vote submitted."
- *Variant states:* below-Silver locked ("Reach Silver to vote" + Earn points), vote closed (result or hidden), already voted (submitted state), no-option-selected error, submission failure (preserve selection + Try again), option assets fail (text-only options), voting removed from beta (hidden from nav/quests).

### G. Management & History Screens

**3.28 — Manage Pledge / Change Team / Split**

- *Layout:* current team header, total pledged tokens, allocation view, team-specific points, manage options.
- *Sub-views:*
    - *View Current Pledge* — buy more / pledge unpledged / change allocation / change primary team.
    - *Adjust Split* (if enabled) — allocation sliders or token counts (e.g., Panthers 80% / Dolphins 20%), enforce total = 100%, **Save changes**.
    - *Change Primary Team* (if split not allowed) — **Change team** → warning → select → confirm → skin updates.
- *Variant states:* allocation ≠ 100% (error, save disabled), double-pledge attempt ("Each token can only be pledged to one team"), change-primary confirmation modal ("will update your app skin"), team-scoped points warning ("Points and status are tracked by team"), save failure (keep previous), beta-simplified view (current team / pledged / buy more / change team — no split).

**3.29 — Activity / Transaction History**

- *Layout:* chronological list, status badges.
- *Static:* item type (purchase / pledge / points earned / points spent / raffle / ticket / referral / vote), date-time, status (completed / pending / failed), amount (tokens / $ / points).
- *CTA:* tap item → detail screen or bottom sheet; **Try again** on eligible failed items.
- *Variant states:* empty ("Your activity will appear here" + Buy tokens), pending badge ("Still processing" + refresh), failed badge.

**3.30 — Global Loading / Error / Recovery States** (system-wide patterns to draw as a frame set)

- *Loading copy set:* "Loading your wallet…", "Processing purchase…", "Confirming pledge…", "Updating points…", "Checking boost eligibility…" — rendered inline on the originating button/space.
- *Error copy set:* "Something went wrong," "Check your connection," "Payment declined," "We couldn't confirm your pledge," "Points are taking longer than expected."
- *Recovery patterns:* stadium-connectivity retry + preserved inputs, duplicate-tap protection (button loading state + idempotency), app-closed-mid-action resume/status, stale-data "last updated" + pull-to-refresh, feature-unavailable ("This feature isn't available right now" + return to dashboard).

### H. Panthers In-Stadium Acquisition Screens (Flow 1–8 sibling case)

> These are the seatback-QR acquisition frames that plug into the main wallet. Single phone frame (~390px), three journeys (A = no app/mobile web, B = has app/native, R = returning fan).
> 

**3.31 — Seat / QR Scan (shared front door)** — faux camera UI (flash / SCAN / flip-cam), stadium bowl, seat tag "SEC 112 · ROW F," Panthers × Republic placard "Free Draft Beer — 1 per fan," animated scan line, "QR code detected" pill. Tap target = whole scene. Branches: A → web landing, B → native home, R → funded wallet.

- *Edge frames:* deep-link fail → mobile web; expired session → re-auth; QR not detected / no camera permission → manual short-code or Section/Row entry + torch/retry; re-scan dedupe ("1 per fan").

**3.32 — Web Landing (Journey A)** — browser chrome `wallet.panthers.com`, location hero "You're in Section 112 — Free draft beer," three value props, "Powered by Republic," **Get started**. *Edge:* location denied → generic hero + manual section entry.

**3.33 — Web Auth (Journey A)** — passwordless: **Continue with a passkey** + email field + **Continue**, "We'll never ask for a password." *Edge:* passkey unsupported → email → SMS OTP fallback; invalid email inline; existing email → sign-in → funded wallet; provisioning latency → non-blocking retry.

**3.34 — Native Home Hero (Journey B)** — dark Panthers app, Home/Schedule/Hall of Fame/Draft tabs + bottom nav, "Get your Panthers Token" hero card, faux news rows. *Edge:* not logged in → auth gate; offer already claimed → "top up" state; stale app → web fallback; inert nav must be functional/disabled in production.

**3.35 — Buy / Pack Select (shared A/B/R)** — three packs ($10/$25 default/$50), reward-framed callout (new) or tier nudge (returning), "Powered by Republic" footer, **Buy with Apple Pay**. (See payment-sheet states in 3.15.)

**3.36 — Success / Tier Assignment** — green check, "Welcome to the Roaring Riot," balance `N.00`, Tier 1 badge, progress to Tier 2 (50-token threshold), gold "Welcome reward unlocked — Free draft beer" card; Journey A adds "Add to home screen" nudge. *Returning (r_success):* "Tokens added" or "Tier 2 unlocked — Keep Pounding Club" (crown + new perks) when balance ≥ 50.

- *Edge frames:* exactly 50 = Tier 2 (inclusive), already-Tier-2 = no re-celebration, status-vs-spendable copy alignment, balance-read fail → last-known + soft refresh, PWA nudge optional.

**3.37 — Welcome Reward / Beer Voucher** — "Free Draft Beer" voucher, faux QR, code `8463 1863 3565 3890`, "1 Draft Beer · 16oz," "Single-use · valid today at Bank of America Stadium," **Staff: scan to redeem**. Post-redeem: 🍺 "Beer's on us," reassurance "tokens stay in your wallet."

- *Edge frames:* double-redemption ("already redeemed"), expired voucher, offline scanner (queued validation), age-gate / non-alcohol alternative (production requirement), back-before-scan (voucher stays claimable).

**3.38 — Returning Fan Wallet (Journey R)** — "Welcome back, Anna," 38.00 tokens, Tier 1 progress ("12 tokens to Tier 2"), "Today at the stadium" game-day beer card, Tier-1 perks list, bottom nav. *Edge:* reward already redeemed today (claimed state), top-up below threshold (graceful copy), expired session re-auth, boost surface gap flagged (3× from main flow not present here), single-team only.

### I. Acquisition & Onboarding Entry Screens (Layers 1–3)

These screens sit upstream of Section B and feed into the existing Purchase (3.13–3.16), Pledge (3.17), Skin Unlock (3.18), and Dashboard (3.19) screens. They generalize the Panthers in-stadium frames (Section H) to all five pilot teams and every campaign source, and they realize the Acquisition & Onboarding Scenario Flows (A1–A11) in Section 1.

**3.39 — Reward Landing (Campaign Entry, Layer 1 — Scenario A1)**

- *Layout:* Team-skinned (campaign team) reward-first hero, no tab bar.
- *Static:* Reward card (name, value, availability window, eligibility, "1 per fan" if applicable), team badge, short "tokens unlock this" explainer, "Powered by Republic" footer.
- *CTAs:* **Claim with [Team] Tokens** (primary) → Reward-Framed Purchase (3.42); **How it works** (secondary).
- *Variant states to draw:*
    - Reward expired (purchase still available, reward framing removed).
    - Reward already redeemed for this wallet (claimed state → dashboard / top-up 3.47).
    - Location-derived context denied (generic reward hero + manual section entry; never blocks).
    - Boost-paired variant ("Unlock reward + earn 3×" + countdown).
    - Source-specific framing (seatback / concessions / signage / website banner / email / SMS / push / social / merch store).

**3.40 — Lightweight Login Gate / Identity Checkpoint (Scenario A1 Path B, A5–A7)**

- *Layout:* Compact sheet/screen over the reward context (a checkpoint, not full onboarding).
- *Static:* "Quick login and we'll take you back to your reward," reassurance copy.
- *Interactive (priority order):* **Team app account**, **Ticketmaster / Account Manager**, **Passkey / biometric**, **Email OTP**, **Phone OTP**, **Create account** (only if no match).
- *Variant states:* missing-field-only prompt (ask only for absent email/phone), existing-account detected (route to sign-in → funded wallet 3.47), provisioning latency (non-blocking retry), session expired (quick re-auth).

**3.41 — Mobile Web Reward Landing (No App, Scenario A1 Path C)**

- *Layout:* Browser chrome (e.g. `wallet.[team].com`), team-branded reward page, light/web canvas.
- *Static:* Location-aware hero ("You're in Section 112 — [reward]"), three value props (Free reward / Unlock tier / Your wallet), "Powered by Republic."
- *CTAs:* **Get started** → passwordless auth (passkey / email / phone / ticket account) → Reward-Framed Purchase (3.42).
- *Variant states:* location denied (generic hero + manual section entry), passkey unsupported (email → SMS OTP fallback), invalid email (inline), existing email (sign-in → 3.47), provisioning latency (non-blocking retry). Never make app install the first requirement.

**3.42 — Reward-Framed Purchase Screen (shared convergence, Scenario A1–A7)**

- *Layout:* Reward card pinned at top, then pack selector, explainer, payment CTA. Team context already attached (no team picker).
- *Static:* Reward card ("unlocked after purchase"), packs ($10 Starter / $25 Most popular, default / $50 Superfan), explainer ("Tokens stay in your wallet," "Your reward unlocks after purchase," "You'll also start earning [Team] points").
- *CTAs:* **Buy with Apple Pay** / context-adaptive label ("Unlock reward · $25," "Claim game-day perk," "Get [Team] Tokens," "Buy & unlock boost").
- *Variant states:* new-fan reward framing vs returning-fan tier-progress nudge; boost attached ("earn 3×"); Apple Pay unavailable (card-entry fallback); payment declined / canceled / pending (reuse 3.15 states); tokens pledged/attached to team by default after success.

**3.43 — Reward Unlock / Voucher & Redemption (generic, Scenario A1/A3)**

- *Layout:* Reward-unlocked confirmation → scannable voucher.
- *Static:* "Reward unlocked," reward name, QR/code, expiration, usage rule ("Single-use"), "Tokens stay in your wallet," **Back to wallet**.
- *CTAs:* **Staff: scan to redeem** → redeemed state.
- *Variant states:* reward already redeemed, reward expired, offline scanner (queued validation), QR scan / staff-validation failure, age-gated reward (age check or non-alcohol fallback), duplicate-claim prevention, claimed-but-dashboard-fails-to-load (last-known + soft refresh).

**3.44 — Team App Banner / In-App Campaign Card (Layer 2 — Scenario A5)**

- *Layout:* Banner/card inside the team app home or feed.
- *Static:* First-time "Get [Team] Tokens — buy in, unlock your tier, and claim today's reward"; returning "You're 12 tokens from Gold" / "Game-day boost active" / "Reward available."
- *CTAs:* tap card → identity passed silently → team-specific purchase (3.42) or funded wallet (3.47).
- *Variant states:* logged in but missing phone/email (ask only missing field), not Ticketmaster-linked (allow now, link later), offer already claimed (top-up state), stale app version (mobile web fallback 3.41), session expired (quick login).

**3.45 — Ticketing / Mobile-Ticket Token Offer (Layer 2 — Scenario A6)**

- *Layout:* Offer surfaced during a ticketing task (open ticket, add to wallet, enter stadium, game-day guide, manage/transfer).
- *Static:* "Turn today's game into rewards — get [Team] Tokens and earn points while you're here" / "Ticket holder boost unlocked."
- *CTAs:* tap → Ticketmaster/Account Manager identity passed → wallet matched/created → purchase (3.42).
- *Variant states:* ticket transferred (identify current holder), corporate ticket (incomplete identity), has ticket but no app login (lightweight register), Ticketmaster login but no app profile (create wallet from ticketing identity), attendance verification delayed (pending), ticket scanned but wallet not yet created (reconcile on first action).

**3.46 — Member / Loyalty Hub Benefit Card (Layer 2 — Scenario A7)**

- *Layout:* Token benefit card inside member hub / benefits page (Member HQ, STM Hub, member benefits, PSL/Silver Club, ProShop/member-code).
- *Static:* "Member-only token boost — your [Team] membership unlocks bonus points today" / "Unlock more from your membership."
- *CTAs:* tap → identity + membership status passed → member-specific reward/boost/tier advantage → purchase or claim.
- *Variant states:* membership unverifiable (proceed without member perks), logged-in-not-STM/PSL (standard fan), partner benefit needs third-party account (prompt to link), discount-code vs ticketing identity mismatch (reconcile), multiple identities (disambiguate).

**3.47 — Returning Fan Funded Wallet (generic, Scenario A3 / A8)**

- *Layout:* Team-skinned wallet, bottom nav, opens directly (skips onboarding).
- *Static:* "Welcome back, [Name]," balance, tier + progress ("N tokens from [tier]"), today's reward/boost card, perks list.
- *CTAs:* **Claim reward**, **Buy more tokens** (top-up framing), **Activate boost**, **Enter raffle**, **Refer a fan**.
- *Variant states:* session expired (re-auth before exposing balance), reward already claimed today (claimed state), already above threshold (no re-celebration), top-up below threshold (graceful progress), top-up crosses threshold (tier unlock + perks), scanned a different team's campaign (team-specific context, no silent re-skin).

**3.48 — Unsupported-Team / Waitlist Screen (Layer 3 — Scenario A10)**

- *Layout:* Neutral skin, "not available yet" message with options.
- *Static:* "[Team] isn't available yet. Signal your support to [Team]! Join the list and we'll let you know when your team launches."
- *CTAs:* **Join the waitlist**, **Choose an available team** (→ 3.10), optional **Continue with neutral NFL wallet**.
- *Variant states:* refuses pilot team (neutral wallet / no dead-end), joins waitlist then later scans a team QR (route to that team's reward-first flow), favorite team unsupported, physically in a pilot stadium but supports an unsupported team (offer home pilot context + waitlist).

**3.49 — Add-to-Home / Open-in-App Nudge (post-reward, Scenario A1 Path C)**

- *Layout:* Non-blocking prompt shown ONLY after reward unlock.
- *Static:* "Add [Team] Wallet to your home screen" or "Open in the [Team] app next time."
- *Variant states:* PWA install unsupported on some browsers (optional, never a blocker); dismiss returns to wallet/dashboard.

# 3. Modal & Notification Triggers

Temporary overlays, pop-ups, sheets, and notifications layered above the screens in Section 3.

### 4.1 — System / OS-level modals

- **OS location permission dialog** — triggered by **Allow location** (3.7). Outcomes route to Team Detected, manual picker, or "Open Settings" fallback.
- **OS camera permission dialog** — triggered at QR scan (3.31); denial → manual code-entry fallback.
- **Apple Pay sheet** (3.15) — slide-up; "Confirm with side button"; backdrop/X dismiss returns to Buy with selection intact.
- **Native share sheet** (3.24) — Messages / WhatsApp / Copy Link / More; cancel must NOT fire reward credit.
- **Add-to-home-screen / PWA prompt** (Journey A, 3.36) — optional, non-blocking.

### 4.2 — Confirmation & action modals (slide-ups / bottom sheets)

- **Review Purchase sheet** (3.14) — confirm before charge.
- **Pledge confirmation** is a screen, but **Change-team confirmation modal** ("Changing your primary team will update your app skin") is a warning overlay requiring explicit confirm (3.28).
- **Team-scoped points warning modal** ("Points and status are tracked by team") before moving tokens (3.28).
- **Returning-user pledge-additional prompt** ("Add these tokens to Panthers?" + Choose different team) (3.16).
- **Large-quantity sanity warning** ("Review your total before continuing") (3.13).
- **Raffle entry confirmation** and **ticket cash/points confirmation** bottom sheets.
- **Vote confirmation** ("Confirm your vote") and **"Vote submitted"** success.
- **Staff redemption confirmation** (beer voucher consumed) (3.37).
- **Boost modal/banner** ("You're at the game · 3× boost unlocked" + countdown) (3.21).
- **Enable-location popup** ("Enable location to check game-day boosts" + Continue without boost) (3.21).

### 4.3 — Success notifications (non-invasive pills/toasts, green check)

Triggered on completion of each action; appear near the originating control:

- "Account created." · "Tokens purchased." · "Pledge confirmed." · "Team skin unlocked." · "Points added." · "Raffle entered." · "Vote submitted." · "Ticket confirmed." · "Copied" (referral link, auto-dismiss ~1.6s).

### 4.4 — Inline error alerts (field-level / banner)

- Form validation (empty / invalid email / invalid phone / duplicate account) (3.2).
- OTP errors (incorrect / expired / too-many-attempts lock) (3.3).
- Payment errors (declined / canceled) (3.15).
- Pledge failure ("tokens are still in your wallet") (3.17).
- Raffle/ticket/vote failures ("points were not used" / "couldn't submit your vote") with Retry.
- "Choose a team to continue," "Your allocation must total 100%," "Each token can only be pledged to one team."

### 4.5 — Persistent / passive banners

- **Offline banner** ("You're offline — balances may be out of date," disables network CTAs) — global.
- **Maintenance screen** ("temporarily unavailable" + Retry) — full overlay.
- **Pending-transaction card** ("Your token purchase is processing" + View status) — Home/Activity.
- **Unpledged-tokens card** ("You have N tokens ready to pledge" + Pledge now) — Home.
- **Referral / campaign context banners** on Splash (4.1 entry context).
- **"Last updated" timestamp + pull-to-refresh** for stale data — Dashboard/Activity.
- **Boost-expired notice** ("This boost has ended") — inline.

### 4.6 — Loading overlays / inline spinners

- Session-check splash spinner ("Loading your wallet…").
- Wallet provisioning ("Setting up your wallet…").
- Inline button-loading states ("Processing purchase…", "Confirming pledge…", "Updating points…", "Checking boost eligibility…", "Checking your purchase/pledge status…") — double-tap-protected via idempotency.
- Pending status rows ("Boosted points are being added," "Points update in a few minutes," "We're verifying this activity," "Waiting for your friend to join").

### 4.7 — Demo-shell overlays (Flow 0 scaffolding — prototype only, not shipping UI)

- **Pitch cover** with headline metrics + three entry buttons (Play the walkthrough / Explore it yourself / Compare the two journeys).
- **Autoplay controls** (play/pause/replay + 12-step progress bar + caption strip; auto-stop → Replay).
- **Explore A/B/R toggle** + restart.
- **Side-by-side scrubber** (Scan / Land / Buy-in beats; beat 0 non-interactive).
- **"Overview" back-press** returns to cover and resets journey state.

### 4.8 — Acquisition / Onboarding overlays (Layers 1–3)

- **Reward landing sheet / hero** (3.39) — reward-first entry over a deep link or banner; reward shown before any wallet UI.
- **Lightweight login gate / identity checkpoint** (3.40) — priority methods: team app account → Ticketmaster/Account Manager → passkey/biometric → email OTP → phone OTP → create account. Returns the fan to the reward, never a full restart.
- **Passkey / OS biometric prompt** — system modal during passwordless auth (3.41/3.40); declined → email → SMS OTP fallback.
- **Ticketmaster / Account Manager OAuth sheet** — identity-bridge modal for Layer 2 (3.45); cancel returns to the offer without creating a duplicate wallet.
- **Member-status verification overlay** (3.46) — confirms STM/PSL/premium; on failure, proceed without member-only perks.
- **Boost + reward combined banner** — "Unlock reward + earn 3×" with countdown (Scenario A2); single cumulative boost, never stacked math.
- **"Team detected from campaign" preselect** — campaign team attached silently; never silently re-skins an existing primary team (confirmation required to change).
- **Waitlist confirmation toast** (3.48) — "You're on the list for [Team]."
- **Add-to-home / PWA prompt** (3.49) — post-reward only, optional, non-blocking (see 4.1).
- **Cross-team referral landing** — invitee opens a team-specific reward-first landing; referrer credited across teams (Scenario A4).
- *Success pills:* "Reward unlocked," "Wallet ready," "You're on the list," "Tokens added" (reuse 4.3 pattern, green check, non-invasive).
- *Pending/passive:* "Waiting for your friend to join" (referral), "Verifying your membership/attendance," "Setting up your wallet" (silent provisioning) — reuse 4.6 spinners; never surface backend/crypto errors.

# 4. Fully Branched Flow Logic Matrix (The Navigation Rules)

This maps every meaningful interaction to its conditional outcome. Notation: `→` = route/transition; `IF/ELSE` = branch condition; `STATE:` = persisted flag that drives later routing. Each block lists the success route (PATH A), the error/empty route (PATH B), and any conditional branches (PATH C+).

### 5.0 — Global Router (runs on every cold launch / resume)

- **PATH A — No session:** Launch → render Splash. `STATE: authed=false`.
- **PATH B — Valid session:** Launch → session-check loader → branch on onboarding flags:
    - `IF pledge exists` → Team-Skinned Dashboard.
    - `ELSE IF tokens > 0 AND pledge=none` → Neutral Home (unpledged-tokens variant).
    - `ELSE IF account exists, no tokens` → Neutral Home (empty state).
    - `ELSE IF onboarding incomplete` → resume at last completed step (`profile? phone? wallet?`).
- **PATH C — Expired session:** Launch → Splash → "please sign in again" → Sign-In (NOT Create Account).
- **PATH D — Deep-link entry:** `IF referral code` → store `pendingReferral`, continue normal route. `IF campaign/team hint` → store `campaignTeam`, show banner, do NOT skin app.
- **PATH E — Offline at launch:** render Splash only, disable both CTAs / show Retry.
- **PATH F — Maintenance flag true:** render Maintenance overlay + Retry; block all routes.
- **Latency rule:** if session-check > 2s → show splash spinner "Loading your wallet…" (never blank).

### 5.0a — Acquisition Entry Router (campaign / deep-link / team-app / ticketing / member hub)

- **Runs before 5.0 for any non-organic entry.** Reads the campaign payload + identity, then routes into an acquisition layer. `STATE: entrySource, campaignTeam, rewardId, boostWindow`.
- **PATH A — Reward-first deep link (Layer 1):** `IF reward_id AND team_id` → Reward Landing (3.39). Then branch on identity: app installed + logged in → Reward-Framed Purchase (3.42, Scenario A1-A); app installed + not logged in → Login Gate (3.40) → 3.42 (A1-B); no app → Mobile Web Reward Landing (3.41) → 3.42 (A1-C). After pay: tokens pledged to `campaignTeam` by default → reward unlock (3.43) → Dashboard (3.19).
- **PATH B — Game-day boost (Layer 1):** `IF boostWindow active AND venue/team match` → boost banner (3.21) → 3.42 with boost attached (Scenario A2). `IF location off` → enable-location popup, else continue un-boosted. `IF boost expires before pledge` → continue without boost.
- **PATH C — Returning fan (Layer 1/2):** `IF wallet exists AND recognized` → Funded Wallet (3.47, Scenario A3); top-up routes through 5.8 (Purchase) framed as top-up. `IF session expired` → quick re-auth before exposing balance.
- **PATH D — Team app entry (Layer 2):** `IF in team app AND identity passed` → Team App Banner (3.44) → 3.42 or 3.47 (Scenario A5). Missing field → ask only that field; offer claimed → top-up; stale app → mobile web (3.41).
- **PATH E — Ticketing / member hub (Layer 2):** `IF Ticketmaster/Account Manager identity` → Ticketing Offer (3.45, Scenario A6); `IF member hub` → Member Benefit Card (3.46, Scenario A7). Identity matched/created, then → 3.42.
- **PATH F — Referral deep link (Layer 1):** invitee → team-specific reward-first landing (3.39/3.41); store `pendingReferral`; credit both parties only on qualifying join (Scenario A4); cross-team credit valid.
- **PATH G — Unsupported team:** `IF team ∉ pilot cohort` → Waitlist (3.48, Scenario A10): join waitlist / choose pilot team / neutral wallet.
- **PATH H — No team / ambiguous context:** `IF no team_id` → Manual Team Selection / Location Fallback (3.10, Scenario A11) → normal pledge route.
- **PATH I — No campaign context at all (Layer 3):** fall through to **5.0 Global Router** (neutral Splash, Scenario A9).
- **Guardrails:** existing primary team is never silently re-skinned; expired/used rewards never block purchase; deep-link failure drops to mobile web, never the App Store; existing-account detection routes to sign-in, never a duplicate wallet.

### 5.1 — Splash → Account Entry

- **PATH A:** Tap **Create account** → Profile Registration (3.2).
- **PATH B:** Tap **I already have an account** → Sign-In (3.5).
- **PATH C:** `IF campaignTeam set` → Profile Registration carries Panthers preselect downstream.

### 5.2 — Profile Registration → Verification

- **PATH A (success):** All fields valid → tap **Continue** → send OTP → OTP screen (3.3).
- **PATH B (validation error):** Empty/invalid name, email, or phone → inline field error(s), stay on screen, do NOT send OTP.
- **PATH C (duplicate):** Email/phone exists → "Account exists" → **Sign in** (→ 3.5) OR **Use different details** (stay).
- **PATH D (OTP send fail):** SMS undeliverable → error → **Resend code** / **Edit phone number**.
- **STATE on success:** `profileCreated=true`.

### 5.3 — OTP Verification → Wallet Provisioning

- **PATH A:** Correct code → verify → `STATE: phoneVerified=true` → provision wallet (3.4) → branch:
    - `IF campaignTeam OR will go to location` → Location Permission (3.7).
    - `ELSE` → Neutral Home (3.12).
- **PATH B (wrong code):** inline "doesn't match," allow retry.
- **PATH C (expired):** "code expired" → **Resend code** (invalidate old, issue new).
- **PATH D (too many attempts):** temporary lock + countdown; block submit.
- **PATH E (provisioning delay):** → Neutral Home with `walletPending=true`, **purchase disabled** until ready.
- **PATH F (abandon mid-flow):** on next open, resume by flag (`profile? → restart; verified? → resume; else → continue`).

### 5.4 — Sign-In

- **PATH A:** Valid email/phone → OTP/stored auth → success-routing loader (3.6) → same branch logic as 5.0 PATH B.
- **PATH B:** Account not found → "No account found" → **Create account** (→ 3.2) / **Try again**.
- **PATH C:** `IF accountFlag=suspended` → Restricted screen → Contact support (dead-end except support).

### 5.5 — Location Permission → Team Detection

- **PATH A (allow):** Tap **Allow location** → OS dialog → granted → detect → map coords:
    - `IF single team` → Team Detected (3.8) → **Sounds good** → Pledge confirmation (3.17) `IF tokens exist`, ELSE Neutral Home/Buy.
    - `IF multiple teams` → Multi-team chooser → select → confirm → pledge route.
    - `IF no eligible team` → Manual Picker (3.10) with first-cohort teams.
    - `IF game-day window active` → set `boostEligible=true`, show post-pledge boost hint only.
- **PATH B (deny / not now):** → Manual Picker (3.10). `STATE: locationDenied=true`, `boost=unavailable`.
- **PATH C (OS-level previously denied):** → explanation screen → **Open Settings** OR **Choose team manually**.
- **PATH D (GPS unavailable):** → "couldn't detect" → **Try again** / **Choose team manually**.
- **PATH E (at-stadium, different preferred team):** show suggested + **Choose a different team** (non-coercive).
- **PATH F (suspicious/spoofed):** neutral "couldn't confirm boost," continue to picker/normal flow.

### 5.6 — Manual Team Selection → Confirmation

- **PATH A:** Select team → **Confirm team** → Team Confirmation (3.11) → **Confirm** → Pledge route. `STATE: selectedTeam=X, source=manual`.
- **PATH B (no selection):** Tap continue with nothing selected → inline "Choose a team to continue."
- **PATH C (unsupported team):** searched team not in cohort → "isn't available yet" → **Notify me** / back to list.
- **PATH D (team data load fail):** → "Teams couldn't load" → **Try again** / **Continue later** (→ Neutral Home if account exists).
- **PATH E (campaign preselect):** Panthers pre-highlighted, override allowed; preserve attribution.

### 5.7 — Home (Neutral) → Purchase Entry

- **PATH A (empty):** Tap **Buy tokens** → Buy screen (3.13).
- **PATH B (tokens, no pledge):** show unpledged card → **Pledge now** → Pledge route; **Buy more** → 3.13.
- **PATH C (pledge exists):** route to Dashboard instead of empty home.
- **PATH D (pending purchase):** show pending card → **View status** → Activity (3.29); block duplicate buy.
- **PATH E (offline):** cached balances + banner; **Buy tokens disabled**.

### 5.8 — Token Purchase → Payment

- **PATH A (success):** quantity ≥ 1 + payment method → **Review purchase** (3.14) → **Confirm** → Payment sheet (3.15) → `Pay` → processing → **Purchase Success** (3.16). `STATE: tokens += qty, unpledged=true, txn=created`.
- **PATH B (qty = 0 / non-numeric):** inline "Buy at least 1 token" / reset to last valid; **Review CTA disabled**.
- **PATH C (very large qty):** sanity warning modal → confirm to proceed.
- **PATH D (no payment method):** **Add payment method** → payment setup → back to Buy.
- **PATH E (canceled auth):** dismiss sheet → return to Buy, **quantity preserved**, "No tokens were bought."
- **PATH F (declined):** inline error → **Change payment method** / **Try again**; no token credit.
- **PATH G (pending):** → Neutral Home with pending card; do NOT route to pledge until settled.
- **PATH H (credit delayed):** show success + "Tokens will appear shortly," refreshable.
- **PATH I (network drop post-confirm):** "Checking your purchase status," poll, idempotent — suppress duplicate CTA.

### 5.9 — Purchase Success → Pledge Transition

- **PATH A:** Tap **Pledge tokens** → branch:
    - `IF selectedTeam set` → Pledge confirmation (3.17).
    - `ELSE` → Location/Team detection (3.7/3.10).
- **PATH B (returning pledged user buys more):** "Add these tokens to [Team]?" → **Pledge to [Team]** (→ pledge) / **Choose different team** (→ picker). New tokens `unpledged` until confirm.
- **PATH C (user exits before pledge):** on return, Home shows unpledged card → **Pledge now**.

### 5.10 — Pledge → Skin Unlock → Dashboard

- **PATH A (success):** **Confirm pledge** → processing → Skin Unlock (3.18) → **View my points** → Dashboard (3.19). `STATE: pledge=created, primaryTeam=X, skin=X, onboardingComplete=true`.
- **PATH B (no tokens):** empty pledge state → **Buy tokens** → 3.13.
- **PATH C (team unavailable):** "isn't available right now" → **Choose another team** → picker.
- **PATH D (processing failure):** "tokens are still in your wallet" → **Try again**; no token loss.
- **PATH E (network drop):** "Checking your pledge status…" poll, idempotent (no double pledge).
- **PATH F (back before confirm):** return to team selection / purchase success; tokens stay unpledged.
- **PATH G (change team):** tap team card → picker → return to pledge with new team.
- **PATH H (already pledged elsewhere):** prompt pledge-additional-to-primary (default) / **Choose another team**.
- **PATH I (skin asset fail / low bandwidth / contrast):** fallback badge + colors / static success / accessible variant — pledge remains valid.

### 5.11 — Dashboard Hub Routing (all CTAs)

- **Buy more tokens** → 3.13. · **View quests** → 3.22. · **Enter raffle** → 3.25. · **Buy/redeem tickets** → 3.26. · **Refer a fan** → 3.24. · **Vote** → branch: `IF tier ≥ Silver` → 3.27 vote; `ELSE` → locked card → **Earn more points** → 3.22.
- **PATH — zero points:** "You're ready to earn" → **View ways to earn**.
- **PATH — points delayed:** pending activity row; auto-refresh.
- **PATH — tier unavailable:** balance shown, tier placeholder "updating."
- **PATH — multi-team:** primary skin dominant + switcher/secondary summary.
- **PATH — offline:** last-synced view, network CTAs disabled.

### 5.12 — Tier / Status Progression

- **PATH A:** View tier detail → progress bar + benefits + eligibility cues.
- **PATH B (threshold crossed, not updated):** "You've reached the next tier. Updating status…" optimistic progress.
- **PATH C (spend points):** available points decrease, **status/tier unchanged** (status = cumulative earned, never demotes).
- **PATH D (benefits unconfigured):** "More benefits coming soon," keep progress visible.

### 5.13 — Game-Day Boost

- **PATH A:** Eligible context → boost banner/modal → **Buy & pledge at 3×** → Purchase → Pledge; boost applied to eligible action; Dashboard shows boosted earning.
- **PATH B (location off):** popup → **Enable location** (→ OS dialog) / **Continue without boost** (normal buy/pledge).
- **PATH C (away team / not eligible):** "No boost available for your pledged team right now."
- **PATH D (boost expires mid-flow):** "This boost has ended" → continue normal, no multiplier.
- **PATH E (purchase-in-window, pledge-after):** copy "Buy and pledge during the active window"; warn before expiry.
- **PATH F (boost calc delayed):** "Boosted points are being added," pending row.
- **PATH G (multiple boosts):** show single cumulative "3×," never stacked math.

### 5.14 — Quests / Ways to Earn

- **PATH A:** Tap quest → quest detail (3.23) → route into relevant action flow → on completion, update points/progress.
- **PATH B (tier-locked):** "Reach Silver to unlock" → **Earn more points**.
- **PATH C (completed):** checkmark; surface next eligible quest.
- **PATH D (expired):** move to completed/expired section.
- **PATH E (external validation):** "We're verifying this activity," award after confirmation.
- **PATH F (none configured):** "More ways to earn coming soon" + evergreen actions.

### 5.15 — Referral

- **PATH A:** **Copy** → "Copied" pill (1.6s) OR **Invite a fan** → share sheet → channel → Referral Sent (pending). On qualified join → Referral Reward (+points/tokens).
- **PATH B (link gen fail):** "We couldn't create your invite link" → **Try again**.
- **PATH C (shared, no signup):** stays pending, no reward.
- **PATH D (cross-team invitee):** reward still valid (any team counts).
- **PATH E (duplicate / existing account):** "This invite wasn't eligible."
- **PATH F (share canceled / clipboard blocked):** no credit fired; offer manual select fallback.
- **PATH G (self-referral/fraud):** validate genuine new invitee before crediting.

### 5.16 — Raffle Entry

- **PATH A:** Select entries → **Confirm entry** → deduct points → success/receipt. `STATE: points -= cost, entry=created`.
- **PATH B (insufficient points):** disabled CTA + "You need more points" → **Earn more points** → 3.22.
- **PATH C (raffle closed):** "This raffle has ended" → show other raffles.
- **PATH D (max entries):** inline error, adjust to allowed max.
- **PATH E (deduction fail):** "points were not used" → **Retry**.
- **PATH F (entry-UI delayed):** "being confirmed," appears in Activity.

### 5.17 — Tickets (Cash vs Points — mutually exclusive)

- **PATH A (cash):** select event/ticket → **Pay with cash** → payment sheet → success → ticket confirmation; earn points if applicable.
- **PATH B (points):** **Redeem with points** → confirm → deduct points → ticket confirmation.
- **PATH C (combine attempt):** "Cash and points can't be combined" → choose one path.
- **PATH D (insufficient points):** disabled redeem + "You need X more points" → **Earn points** / fall back to cash.
- **PATH E (sold out):** sold-out state → other games/types.
- **PATH F (payment fail):** declined → another method. **(redemption fail):** "No points were used" → **Retry**.
- **PATH G (confirmation delayed):** "being confirmed," shown in Activity.

### 5.18 — Voting (Silver+ gated)

- **PATH A:** `IF tier ≥ Silver` → open vote → select option → **Confirm vote** → "Vote submitted."
- **PATH B (below Silver):** locked card → "Reach Silver to vote" → **Earn more points**.
- **PATH C (no option selected):** inline "Choose an option to submit your vote."
- **PATH D (vote closed):** "Voting has ended" → result (if allowed) or hidden.
- **PATH E (already voted):** submitted state; block duplicate unless changes allowed.
- **PATH F (submission fail):** error → **Try again**, selection preserved.
- **PATH G (assets fail):** text-only options, voting still allowed.
- **PATH H (voting cut from beta):** removed from nav + quests entirely.

### 5.19 — Manage Pledge / Change Team / Split

- **PATH A (view):** Manage → show team, pledged tokens, allocation, team points.
- **PATH B (adjust split, if enabled):** sliders → enforce total = 100% → **Save changes** → confirmation → Dashboard. `IF total ≠ 100%` → inline error, **Save disabled**.
- **PATH C (change primary):** **Change team** → warning modal ("will update your app skin") → select → confirm → skin updates. `STATE: primaryTeam=Y, skin=Y`.
- **PATH D (double-pledge attempt):** "Each token can only be pledged to one team."
- **PATH E (team-scoped points warning):** "Points and status are tracked by team" → require confirm before moving.
- **PATH F (save fail):** "We couldn't save your changes" → keep previous allocation.
- **PATH G (beta, split disabled):** render simplified view (current team / pledged / buy more / change team).

### 5.20 — Activity / History

- **PATH A:** open Activity → chronological list → tap item → detail sheet.
- **PATH B (empty):** "Your activity will appear here" → **Buy tokens**.
- **PATH C (pending):** pending badge → refresh.
- **PATH D (failed):** failed badge → **Try again** (if eligible).

### 5.21 — Global Recovery Rules (apply across all flows)

- **Duplicate tap:** any purchase/pledge/redeem CTA → immediate button loading state + backend idempotency → suppress second submit.
- **App closed mid-action:** persist txn/intent state → on return show completed / canceled / pending resolution.
- **Stale data:** show "last updated" + pull-to-refresh.
- **Feature unavailable:** "This feature isn't available right now" → **Return to dashboard**.
- **Stadium connectivity:** every critical action preserves inputs + offers retry; never strand on spinner.

### 5.22 — Panthers In-Stadium Branch Logic (sibling acquisition case)

- **Scan front door (shared):** `scanAdvance()` branches on `journey`:
    - **A (no app)** → Web Landing (3.32).
    - **B (has app)** → Native Home (3.34).
    - **R (returning)** → Funded Wallet (3.38).
- **Deep-link fork:** `IF app installed` → native `home`; `ELSE` → mobile web `land` (never hard-gate to app store).
- **Journey A:** Landing → **Get started** → Web Auth (3.33): **passkey** OR **email → Continue** → Buy (3.35). `IF passkey unsupported` → email → `IF email fails` → SMS OTP. `IF email already exists` → sign-in → `r_wallet`.
- **Journey B:** Native Home hero → Buy. `IF not logged in` → auth gate first. `IF offer already claimed` → top-up state (R behavior). `IF stale app` → web fallback.
- **Shared from Buy:** select pack (default $25) → **Buy with Apple Pay** → PaySheet → confirm → processing (~1.5s) → branch: **R → `r_success`**, **else → `success`**. Tokens held/unpledged.
- **Success → Reward:** `success`/`r_success` → tap welcome-reward card → Voucher (3.37) → **Staff: scan to redeem** → `redeemed`/`r_redeemed`.
    - Tier compute: `total = RETURN_BAL + pack.tokens`; `tier2 = total >= 50` (inclusive) → crown + perks; `IF already ≥ Tier 2` → simple "tokens added," no re-celebration.
- **Reward → Referral loop:** **Bring a friend** → Refer (copy/share) → `refer_sent` (pending) → `refer_reward`. "Invite another" → loops to `refer`; "Done" → `redeemed`/`r_wallet`.
- **Journey R repeat loop:** scan → `r_wallet` → game-day reward card (→ reward → `r_redeemed`) and/or **Buy more** (→ buy → Apple Pay → `r_success`). `IF reward already redeemed today` → claimed state. `IF expired session at scan` → re-auth before exposing balance.
- **Apple Pay fallbacks (all journeys):** unavailable → card-entry; declined → inline error + retry (not silent return); cancel (X/backdrop) → return to Buy with selection intact; network drop in processing → retry; `confirmPay` idempotent.
- **Voucher fallbacks:** double-scan → "already redeemed"; expired ("valid today") → expired state; offline scanner → queued validation; age-gate required for production; back-before-scan keeps voucher claimable.
- **Demo-shell modes (scaffolding only):** `openCover/openAutoplay/openExplore/openSideBySide` reset `mode`, `journey`, `pack→$25`, `step→seat`; "Overview" back-press → cover + pause + reset.

# 5. Global State & Data Models (Hardcoded Mock Data)

Exact parameters the mockup/prototype engine should simulate as a live database. Values are illustrative defaults so frames render with realistic, consistent data.

### 2.1 — Session & Onboarding State (drives the Global Router in 5.0)

```
authed: true | false
sessionStatus: "none" | "valid" | "expired"
onboarding: {
  profileCreated: bool,
  phoneVerified: bool,
  walletProvisioned: bool,
  walletPending: bool,
  teamSelected: bool,
  pledgeComplete: bool
}
maintenanceFlag: false
isOffline: false
pendingReferralCode: "anna7k" | null
campaignTeam: "carolina-panthers" | null
locationPermission: "granted" | "denied" | "notDetermined" | "blockedOS"
boostEligible: true | false
accountFlag: "active" | "suspended"
```

### 2.2 — User Data (mock primary user)

```
user: {
  name: "Anna Reyes",
  email: "anna.reyes@email.com",
  phone: "+1 (704) ••• ••12",
  profilePictureUrl: "/mock/avatar-anna.png",
  memberSince: "2026-08",
  primaryTeam: "carolina-panthers" | null,
  activeSkin: "league" | "carolina-panthers" | "miami-dolphins"
}
```

### 2.3 — Wallet & Points State

```
wallet: {
  tokenBalance: 50,            // total tokens owned
  unpledgedTokens: 0,          // tokens not yet pledged
  pledgedTokens: 50,
  currency: "USD",
  tokenPrice: 1.00             // flat $1/token
}
points: {
  available: 1240,             // spendable
  lifetimeEarned: 3850,        // drives tier; never decreases
  tier: "Bronze",              // Bronze | Silver | Gold | Platinum/Diamond
  nextTier: "Silver",
  progressToNext: 0.62,        // 62%
  votingEligible: false        // true at Silver+
}
```

- **Tier ladder mock thresholds:** Bronze 0 / Silver 2,500 / Gold 6,000 / Platinum 12,000 lifetime points. Voting unlocks at Silver.
- **Panthers in-stadium variant tiers:** Tier 1 "Roaring Riot" (entry) → Tier 2 "Keep Pounding Club" at **50 tokens** (inclusive). Returning-fan mock balance `RETURN_BAL = 38` (12 short of Tier 2).

### 2.4 — Teams (cohort)

```
teams: [
  { id:"carolina-panthers", name:"Carolina Panthers", primary:"#0085CA", secondary:"#101820", inCohort:true },
  { id:"miami-dolphins",    name:"Miami Dolphins",    primary:"#008E97", secondary:"#FC4C02", inCohort:true },
  { id:"league-neutral",    name:"NFL Wallet",        primary:"#C8A24B", secondary:"#0B0E12", inCohort:true },
  { id:"unsupported-example", name:"(Other team)",    inCohort:false }   // drives "isn't available yet"
]
detectedTeam: "carolina-panthers"
detectedRegion: "North Carolina"
detectedStadium: "Bank of America Stadium"
```

### 2.5 — Token Packs (Panthers in-stadium)

```
packs: [
  { id:"starter",     price:10, tokens:10, label:"Starter" },
  { id:"popular",     price:25, tokens:25, label:"Most popular", defaultSelected:true },
  { id:"superfan",    price:50, tokens:50, label:"Superfan" }
]
```

### 2.6 — Payment Methods

```
paymentMethods: [
  { type:"applePay", display:"Panthers Visa •••• 6411", default:true },
  { type:"card", display:"Visa •••• 6411" }
]
applePayAvailable: true   // toggle false to render card-entry fallback
```

### 2.7 — Core Entities (3–4 mock items each)

**Quests**

```
[
 { id:"q1", title:"Sign in this month", reward:50, status:"available" },
 { id:"q2", title:"Attend a home game", reward:500, status:"locked", lockReason:"external validation" },
 { id:"q3", title:"Refer a fan", reward:200, status:"available" },
 { id:"q4", title:"Vote on the new jersey", reward:75, status:"locked", lockReason:"Reach Silver" }
]
```

**Raffles**

```
[
 { id:"r1", prize:"Signed game jersey", costPerEntry:250, maxEntries:10, deadline:"2026-09-20", drawDate:"2026-09-22", status:"open" },
 { id:"r2", prize:"2 sideline passes",  costPerEntry:1000, maxEntries:3, deadline:"2026-09-15", status:"open" },
 { id:"r3", prize:"Team merch bundle",  costPerEntry:150, maxEntries:20, status:"closed" }
]
```

**Tickets / Events**

```
[
 { id:"t1", event:"Panthers vs Falcons", date:"2026-09-21", cashPrice:85, pointsPrice:8500, status:"available" },
 { id:"t2", event:"Panthers vs Saints",  date:"2026-10-05", cashPrice:110, pointsPrice:11000, status:"available" },
 { id:"t3", event:"Panthers vs Bucs",    date:"2026-10-19", cashPrice:95, pointsPrice:9500, status:"soldout" }
]
```

**Votes / Polls**

```
[
 { id:"v1", title:"2027 alternate jersey", options:["Carolina Blue","Black Panther"], deadline:"2026-09-30", status:"open", userVoted:false },
 { id:"v2", title:"Halftime anthem act",   options:["Option A","Option B"], status:"closed", userVoted:true }
]
```

**Activity / Transaction History**

```
[
 { id:"a1", type:"token_purchase", date:"2026-09-01 18:42", amount:"50 tokens / $50.00", status:"completed" },
 { id:"a2", type:"pledge",          date:"2026-09-01 18:44", amount:"50 tokens → Panthers", status:"completed" },
 { id:"a3", type:"points_earned",   date:"2026-09-01 18:44", amount:"+1,000 pts", status:"completed" },
 { id:"a4", type:"raffle_entry",    date:"2026-09-03 12:10", amount:"-250 pts", status:"pending" },
 { id:"a5", type:"referral",        date:"2026-09-04 09:00", amount:"+5 tokens", status:"pending" }
]
```

**Referral**

```
referral: {
  code:"anna7k",
  link:"panthers.co/r/anna7k",
  bonusBoth:5,            // +5 tokens to both parties
  invited:[ { name:"Marcus", status:"joined" }, { name:"Dana", status:"pending" } ]
}
```

**Welcome Reward (Panthers)**

```
welcomeReward: {
  type:"draft_beer", size:"16oz",
  code:"8463 1863 3565 3890",
  validity:"today only — Bank of America Stadium",
  status:"unredeemed" | "redeemed" | "expired",
  ageGateRequired:true
}
```

### 2.8 — Boost State

```
boost: {
  active: true,
  multiplier: "3×",
  context:"game-day / in-stadium",
  countdownSeconds: 1800,
  appliesTo:"buy+pledge within window"
}
```

### 2.9 — Toggleable Demo Flags (so the prototype can render every edge frame)

```
demo: {
  journey: "B",                 // A | B | R  (Panthers case)
  mode: "explore",              // cover | explore | autoplay | sidebyside
  forceState: null              // e.g. "paymentDeclined" | "locationDenied" | "offline" |
                                //      "pointsPending" | "voteLocked" | "boostExpired" |
                                //      "walletPending" | "maintenance"
}
```

These flags let a single mock dataset drive both the canonical happy path and the edge-case frames (location denied, payment declined, unpledged tokens, boost expired, voting locked, insufficient points, points pending) without separate data sets.