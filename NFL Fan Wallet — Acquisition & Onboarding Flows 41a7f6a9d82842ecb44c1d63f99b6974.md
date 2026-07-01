# NFL Fan Wallet — Acquisition & Onboarding Flows

# ACQUISITION & ONBOARDING — SYSTEM ARCHITECTURE & FLOW SPECIFICATION

# 0. Executive Summary & Acquisition Architecture

**Document purpose**

This document consolidates the acquisition and onboarding layer of the NFL Fan Wallet into a standalone specification. It mirrors the structure of the NFL Fan Token App User Flows document — Executive Summary, User Flows, Screen Inventory, Modal & Notification Triggers, and Flow Logic Matrix — but covers only how a fan ENTERS the wallet before the canonical Buy → Pledge → Unlock → Dashboard spine. All content here was derived from the sibling "NFL Fan Wallet Acquisition Scenarios" page and folds into the main flows wherever they converge.

**Core thesis**

The wallet should operate as a team loyalty and rewards layer, not a standalone crypto product. Fans should usually encounter it inside an existing fan journey — at the stadium, in the team app, through ticketing, through a reward, or via an NFL-level entry point. The hero narrative is: "Claim a team reward. Tokens unlock it, keep you earning, and turn into your team wallet" — i.e. Reward → identity → purchase → wallet → reward unlocked → points/tier → next action. The legacy "Wallet → account → tokens → team → maybe rewards" order is the fallback only.

**0.1 The three acquisition layers**

**Layer 1 — Team-context / reward-first acquisition.** Entry from a team campaign surface (seatback QR, concessions QR, stadium signage, website banner, email, SMS, push, social, merch store, game-day promo). Always reward-first: the funnel is framed around claiming a team reward, boost, or perk, with tokens positioned as the mechanism. Best for stadium conversion, cold-start and casual fans, and game-day activation.

**Layer 2 — Team-app / logged-in fan acquisition.** Entry from inside the team's digital environment (team app home, member hub, ticketing area, mobile wallet, game-day guide, rewards page, push, Account Manager). Highest identity confidence; the funnel can be shorter. Best for existing fans, Season Ticket Members, PSL owners, and ticket holders.

**Layer 3 — NFL-level / standard wallet acquisition.** The neutral, league-level path already documented in the main NFL User Flows (Flows 1–12). Used when there is no team campaign, team-app context, or reward-first entry. Best for general NFL fans, fans outside the five pilot markets, and users who intentionally seek out the wallet. This should remain the fallback / lower-frequency path, not the hero path.

**0.2 Identity & context model**

Every campaign or deep-link entry runs a context check: Is team_id present? Is reward_id present? Is a boost active? Is the app installed? Is the user logged in? Is Ticketmaster / team identity available? Does an NFL Fan Token wallet already exist? Is the user returning? Is the user eligible for member / ticket / reward benefits?

Identity is then resolved in this order: (A) logged-in team app user → pass credentials silently; (B) Ticketmaster / Account Manager user → match identity; (C) no app → mobile web passkey / email / phone; (D) existing NFL wallet → sign in / match; (E) new user → register minimal profile + silent wallet creation.

**0.3 Pilot scope & assets**

Pilot teams: Carolina Panthers, Miami Dolphins, Philadelphia Eagles, San Francisco 49ers, New England Patriots. Token packs: $10 Starter / $25 Most popular (default) / $50 Superfan at a flat $1/token. Tiers: Bronze / Silver / Gold / Platinum–Diamond, with voting at Silver+.

**0.4 MVP priority (acquisition)**

Priority 1 — Acquisition must-haves: reward-first QR / promo / website banner; app installed + logged-in deep link; app installed + not logged-in quick login; no-app mobile web reward landing; team app banner / card; returning fan reward/top-up.

Priority 2 — Game-day & payoff: game-day boost; reward unlock; reward redemption / voucher; team dashboard; activity / pending states.

Priority 3 — Retention: quests; referral; raffle; ticket purchase / redeem; member/ticket-based benefits.

Priority 4 — Secondary: voting; multi-team pledge / change team; unsupported-team waitlist; advanced tier explanations.

# 1. User flows

> Derived from the sibling "NFL Fan Wallet Acquisition Scenarios" page. These flows extend the Main NFL Token App flows *upstream*: they describe every way a fan can ENTER the wallet before the canonical Buy → Pledge → Unlock → Dashboard spine, and they converge into the existing purchase/pledge/dashboard screens wherever possible. They are organized into the three acquisition layers (Team-context reward-first, Team-app logged-in, NFL-level standard) and reuse the existing screen vocabulary.
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

# 2. Screen Inventory & Component Breakdown

These acquisition screens extend the main Screen Inventory. Numbering continues from the main document (which ends at 3.38) so the two read as one inventory. Each screen lists its layout, static elements, interactive CTAs, and the variant/edge states it must render. All screens render in one of the three skins (League/Neutral, team skin, or a team-app host surface) and reuse the shared chrome, inline-error, toast, offline-banner, and pull-to-refresh utilities defined in the main inventory.

### I. Acquisition & Onboarding Entry Screens (Layers 1–3)

**3.39 — Reward Landing (Campaign Entry)**

- *Layout:* Reward-first hero, team-skinned from the campaign team_id, no tab bar.
- *Static:* Reward image/name, reward value, availability window, eligibility, "1 per fan" badge, "Powered by Republic" footer.
- *CTAs:* **Claim with [Team] Tokens** (primary) → Reward-Framed Purchase (3.42); **How it works** (secondary).
- *Variant states to draw:* logged-in (skip auth); not-logged-in (→ Login Gate 3.40); reward expired; reward already claimed; location-derived context ("You're in Section 112") vs generic; boost-paired ("+ earn 3×"); provisioning/retry.

**3.40 — Lightweight Login Gate / Identity Checkpoint**

- *Layout:* Compact sheet over the reward context (a checkpoint, not full onboarding).
- *Static:* "Quick login and we'll take you back to your reward," reassurance microcopy, reward thumbnail retained.
- *CTAs:* **Team account** (primary), **Ticketmaster / Account Manager**, **Passkey / biometric**, **Email**, **Phone** — in priority order; **Create account** only if no match.
- *Variant states to draw:* passkey unsupported/declined → email; invalid email inline error; returning account detected → sign-in (→ Returning Wallet 3.47); session loss / resume.

**3.41 — Mobile Web Reward Landing (No App)**

- *Layout:* Mobile-web (light canvas), browser chrome shows a team wallet URL; never gates on app install.
- *Static:* Team-branded reward hero, value props, "Powered by Republic."
- *CTAs:* **Get started** → passwordless auth → Reward-Framed Purchase (3.42).
- *Variant states to draw:* passkey vs email vs phone vs ticket account; location-aware vs generic hero; existing user → sign-in; wallet provisioning latency.

**3.42 — Reward-Framed Purchase Screen**

- *Layout:* Purchase screen centered on the reward, team already attached, reward card pinned at top.
- *Static:* Reward card (name, validity, "unlocked after purchase"), short explainer ("Tokens stay in your wallet. Your reward unlocks after purchase. You'll also start earning [Team] points").
- *Interactive:* Pack selector ($10 Starter / $25 Most popular default / $50 Superfan); **Payment CTA** that adapts ("Unlock reward · $25," "Claim game-day perk," "Get [Team] Tokens," "Buy & unlock boost") → Apple Pay / card.
- *Variant states to draw:* reward-only, boost-paired, top-up framing (returning fan), reward expired (framing removed), Apple Pay unavailable → card, declined/canceled, processing.

**3.43 — Reward Unlock / Voucher & Redemption**

- *Layout:* Success → scannable voucher screen; team-skinned.
- *Static:* "Reward unlocked," voucher name, QR/code, expiration, usage rule, "Single-use," "Tokens stay in your wallet."
- *CTAs:* **Show this QR at any participating stand**, **Back to wallet**.
- *Variant states to draw:* active voucher; already redeemed; expired ("valid today"); offline scanner / queued; QR/staff scan failure; age-gated (beer) check or non-alcohol fallback; redeemed celebratory state; dashboard-load failure → last-known state.

**3.44 — Team App Banner / In-App Campaign Card**

- *Layout:* In-app card/banner inside the host team app (team-app chrome, not NFL Wallet chrome).
- *Static:* "Get [Team] Tokens — buy in, unlock your tier, and claim today's reward," or returning-fan nudge.
- *CTAs:* **Tap to continue** → identity passed → Reward-Framed Purchase (3.42) or Returning Wallet (3.47).
- *Variant states to draw:* first-time vs returning copy; offer already claimed → top-up; missing phone/email (ask only the gap); old app version → mobile web; session expired → quick login.

**3.45 — Ticketing / Mobile-Ticket Token Offer**

- *Layout:* Offer surface attached to a ticketing task (mobile ticket, add-to-wallet, entry, game-day guide, manage/transfer).
- *Static:* "Turn today's game into rewards — get [Team] Tokens and earn points while you're here" / "Ticket holder boost unlocked."
- *CTAs:* **Tap offer** → Ticketmaster/Account Manager identity passed → purchase/reward flow.
- *Variant states to draw:* ticket transferred (current holder); corporate ticket (incomplete identity); ticket but no app login → lightweight login; attendance verification pending; ticket scanned, wallet not yet created.

**3.46 — Member / Loyalty Hub Benefit Card**

- *Layout:* Benefit card inside a member/loyalty hub (Member HQ, STM Hub, member benefits, PSL/Silver Club, ProShop member benefits).
- *Static:* "Member-only token boost — your [Team] membership unlocks bonus points today," or "Unlock more from your membership."
- *CTAs:* **Tap** → identity + membership status passed → purchase or claim.
- *Variant states to draw:* membership unverifiable (proceed without perks); logged in but not STM/PSL (standard fan); partner benefit needs third-party link; discount-code vs ticketing identity mismatch; multiple identities → disambiguate.

**3.47 — Returning Fan Funded Wallet**

- *Layout:* Team-skinned funded wallet landing (skips onboarding); persistent bottom nav.
- *Static:* "Welcome back, [Name]," balance, tier, progress to next tier, "Today at the stadium" reward card or active boost card, perks list.
- *CTAs:* **Claim reward**, **Buy more tokens** (top-up), **Activate boost**, **Enter raffle**, **Refer a fan**.
- *Variant states to draw:* reward available vs claimed; boost active; session expired → re-auth; top-up below threshold (progress) vs crossing threshold (tier unlock + crown); different-team campaign (careful, no silent re-skin).

**3.48 — Unsupported-Team / Waitlist Screen**

- *Layout:* Neutral League skin, no dead-end.
- *Static:* "[Team] isn't available yet. Signal your support to [Team]! Join the list and we'll let you know when your team launches."
- *CTAs:* **Join the waitlist**, **Choose an available team**, **Continue with NFL wallet** (if allowed).
- *Variant states to draw:* refuses pilot team (neutral wallet/exit); later enters a team QR (route to that team); favorite unsupported; physically in a pilot stadium but supports an unsupported team.

**3.49 — Add-to-Home / Open-in-App Nudge (post-reward)**

- *Layout:* Non-blocking prompt shown only AFTER reward unlock (mobile web/Journey A).
- *Static:* "Add [Team] Wallet to your home screen" or "Open in the [Team] app next time."
- *CTAs:* **Add to home** / **Open in app**, **Not now**.
- *Variant states to draw:* PWA install unsupported (treat as optional, never a blocker); already installed (suppress).

# 3. Modal & Notification Triggers

These overlays extend the main Modal & Notification Triggers (4.1–4.7). They are the acquisition-specific sheets, prompts, and toasts that can appear over any entry screen, and they should reuse the shared sheet/toast/inline-error components.

### 4.8 — Acquisition / Onboarding overlays

- **Lightweight login gate (sheet)** — appears when a deep-link/campaign entry finds the user not logged in (Scenario A1 Path B, A5, A6). Checkpoint framing; returns to the exact reward/purchase step on success.
- **Passkey / biometric prompt** — system-level passkey/Face ID/Touch ID sheet within the login gate or mobile-web auth; falls back to email then phone OTP.
- **Ticketmaster / Account Manager OAuth sheet** — identity-bridge sheet for ticketing/member entries (A6, A7); on success, identity is passed and the sheet dismisses back into the flow.
- **Member-status verification prompt** — confirms STM/PSL/premium status (A7); on failure, dismiss and proceed as a standard fan without promising member perks.
- **Campaign team-preselect confirmation** — when a neutral launch carries a team hint/referral code, a banner/toast preserves attribution without skinning the app until pledge (A9; main Flow 1, Edge Cases 3–4).
- **Combined boost + reward banner/modal** — context-detected game-day overlay ("You're at the game — 3× active"); shows one cumulative boost, countdown, and "Buy & earn 3×" / "Unlock reward + earn 3×" (A2).
- **Boost expiry / location toasts** — "This boost has ended," "Continue without boost," "Boosted points are being added," "We couldn't confirm boost" (A2).
- **Waitlist confirmation toast** — "You're on the list for [Team] — we'll let you know when they launch" (A10).
- **Add-to-home / PWA prompt** — post-reward nudge overlay; non-blocking (A1 Path C; screen 3.49).
- **Cross-team referral landing prompt** — invitee opens a team-specific reward-first landing; "Both get +5 bonus tokens"; pending vs credited toasts; "This invite wasn't eligible" (A4).
- **Returning-fan re-auth sheet** — quick re-auth before exposing a funded wallet when a session has expired (A3, 3.47).

# 4. Fully Branched Flow Logic Matrix (The Navigation Rules)

This router runs *before* the main Global Router (5.0). It decides which acquisition scenario a fan enters based on context and identity, then hands off to the existing purchase → pledge → unlock → dashboard spine. It reuses the main matrix's PATH notation.

### 5.0a — Acquisition Entry Router (campaign / deep-link / team-app / ticketing)

- **ENTRY** — Team QR · website banner · digital promo link · team app banner · ticketing / mobile ticket · member hub · referral link · NFL app / NFL Wallet.
- **STEP 1 — Parse context:** read team_id, campaign_id, reward_id, source, venue/location hint, boost window. If none present → **PATH H** (neutral).
- **STEP 2 — Resolve identity (A–E):** team app session → pass silently; Ticketmaster/Account Manager → match; no app → mobile web passkey/email/phone; existing NFL wallet → sign-in/match; new → minimal profile + silent wallet.
- **PATH A — Reward-first campaign, app installed + logged in:** Reward Landing (3.39) → Reward-Framed Purchase (3.42) → silent wallet + default pledge → Reward Unlock (3.43) → Team Dashboard (main Flow 11). [Scenario A1-A]
- **PATH B — Reward-first campaign, app installed + not logged in:** Reward Landing (3.39) → Login Gate (3.40) → Purchase (3.42) → Unlock → Dashboard. [A1-B]
- **PATH C — Reward-first campaign, no app:** Mobile Web Reward Landing (3.41) → web auth → Purchase (3.42) → Unlock → post-reward Add-to-Home (3.49). [A1-C]
- **PATH D — Game-day boost context:** detect venue + active window → Boost banner (4.8) → boost-framed Purchase (3.42) → boosted points → Dashboard. [A2]
- **PATH E — Returning fan recognized:** route directly to Funded Wallet (3.47); top-ups feed main Flow 7 → Flow 9. [A3]
- **PATH F — Team-app banner / ticketing / member entry:** in-app card (3.44) / ticketing offer (3.45) / member card (3.46) → identity passed → Purchase or Wallet. [A5 / A6 / A7]
- **PATH G — Referral link:** team-specific reward-first landing for the invitee → PATH A/B/C by their own context; credit referrer on qualifying join (cross-team allowed). [A4]
- **PATH H — Neutral / league-level:** hand off to main Global Router (5.0) and Flows 1–12; preserve any stored hint/attribution without skinning until pledge. [A9]
- **PATH I — Team resolution failures:** no team_id or denied/ambiguous location → Manual Team Selection / Location Fallback (3.x, A11); unsupported team → Waitlist (3.48, A10).

**Guardrails (apply across all paths)**

- **Never silently re-skin:** if the campaign team ≠ the fan's existing primary team, preserve the primary team and treat the new context carefully.
- **Never block on a dead reward:** reward expired/unavailable → continue purchase with reward framing removed.
- **Never gate on app install:** deep-link failure → mobile web landing (PATH C).
- **Never duplicate a wallet:** a "new" entry that matches an existing wallet → returning-fan loop (PATH E).
- **Never expose an unauthenticated balance:** expired session → re-auth before the funded wallet.
- **Always dedupe rewards per wallet, not per scan** ("1 per fan").