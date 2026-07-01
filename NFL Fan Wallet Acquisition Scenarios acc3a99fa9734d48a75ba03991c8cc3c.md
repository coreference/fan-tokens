# NFL Fan Wallet Acquisition Scenarios

# NFL Fan Wallet acquisition architecture

The wallet should operate as a **team loyalty and rewards layer**, not as a standalone crypto product. The fan should usually encounter it inside an existing fan journey: at the stadium, in the team app, through ticketing, through a reward, or via an NFL-level entry point.

The three major acquisition layers are:

1. **Team-context / reward-first acquisition**
2. **Team-app / logged-in fan acquisition**
3. **NFL-level / standard wallet acquisition**

Each layer has different user intent, identity confidence, and funnel design.

---

# Layer 1 — Team-context / reward-first acquisition

## Core idea

The fan enters from a **team-specific campaign surface**: stadium QR, seatback QR, concessions QR, digital QR, website banner, email/SMS link, push notification, partner placement, merch-store placement, or game-day promo.

This layer is **always reward-first**.

The user is not primarily thinking:

> “I want to buy tokens.”
> 

They are thinking:

> “I want the reward / boost / perk / claim.”
> 

So the purchase funnel should be framed around **unlocking or claiming a team reward**, with tokens positioned as the mechanism that makes the reward, points, and future benefits available.

### Best for

- Stadium conversion
- Game-day activation
- Cold-start users
- Fans who do not know the product yet
- Casual fans
- Reward-driven users
- Seatback / signage / concessions campaigns
- Team website visitors
- Social/email/SMS promo traffic

### Target users

- Fans physically at the stadium
- Fans watching a game at home who click a digital promo
- Fans coming from team website banners
- Fans who do not have the team app installed
- Fans who may not know what fan tokens are
- Casual fans motivated by immediate perks
- Returning fans responding to another reward or boost

### Scenarios in this layer

| Scenario | Core idea | Best for | Target audience |
| --- | --- | --- | --- |
| **1. Reward-first team QR / promo / website banner** | Fan scans/taps a team campaign to claim a reward; wallet and token purchase are framed as the path to unlock that reward. | Highest-frequency acquisition; stadium and digital campaigns. | Cold-start fans, casual fans, stadium attendees, web visitors. |
| **2. Game-day boost activation** | Fan is at an eligible game/event; buying and pledging during the active window earns boosted points. | Urgency, repeat purchases, in-stadium conversion. | Stadium fans, returning users, high-intent game-day users. |
| **3. Reward redemption / voucher claim** | Fan completes purchase/activation and receives a scannable reward, e.g. beer, merch discount, food voucher, sweepstakes entry. | Immediate payoff and trust-building. | Reward-motivated fans, first-time users. |
| **4. Returning fan reward/top-up loop** | Existing wallet user scans a new QR or taps a new promo and lands in wallet with current balance, today’s reward, and top-up options. | Repeat engagement. | Existing token holders, returning stadium fans. |
| **5. Referral / viral reward loop** | Fan shares an invite; both referrer and invitee earn bonus tokens/points/reward eligibility. | Fan-to-fan growth. | Social fans, groups attending together, watch-party users. |

## Scenario 1 — Reward-first team QR / digital promo link / website banner

### Core idea

This is the primary acquisition path.

A fan sees a team-specific reward or offer:

> “Scan to claim your free draft beer.”
> 

> “Get your game-day merch discount.”
> 

> “Unlock today’s Panthers reward.”
> 

> “Claim your 3× game-day boost.”
> 

> “Get [Team] Tokens and unlock rewards.”
> 

The QR or link already contains the **team context**, so the fan should not have to select a team before the purchase funnel. The experience should start with the reward, not the wallet.

The campaign carries:

```
team_id
campaign_id
reward_id
source: seatback_qr | concessions_qr | stadium_signage | website_banner | email | sms | push | social | merch_store
venue/location hint
optional section / row / seat context
optional boost window
```

## Reward-first happy path A — app installed + user already logged in

```
Fan scans team QR / taps team promo
→ Deep link opens team app
→ Team app recognizes logged-in fan
→ Reward-first campaign screen opens
→ Fan sees the reward and what is required to unlock it
→ Team app passes identity/session to NFL Fan Token system
→ Fan lands on reward-framed purchase screen
→ Team is already selected/attached
→ Fan chooses pack or amount
→ Apple Pay/card checkout
→ Purchase succeeds
→ Wallet is matched or created silently
→ Tokens are pledged/attached by default to that team
→ Reward unlocks
→ Team wallet dashboard opens
→ Fan sees reward, points, tier, boost, and next ways to earn
```

### What the fan sees

The first screen should be a **reward landing**, not a generic wallet landing.

Example:

> **Free draft beer unlocked with Panthers Tokens**
> 

> Buy Panthers Tokens today and your welcome reward is ready at checkout.
> 

or:

> **Claim today’s game-day reward**
> 

> Get [Team] Tokens, earn points, and unlock your reward.
> 

The reward card should show:

- Reward name
- Reward value
- Availability window
- Eligibility
- “1 per fan” if applicable
- CTA: **Claim with [Team] Tokens**
- Secondary: **How it works**

Then the purchase screen should keep the reward context visible:

> “Buy tokens to unlock your reward.”
> 

> “Tokens stay in your wallet. Your reward is added after purchase.”
> 

This is important because cold users are more likely to convert when the funnel is attached to a concrete payoff.

---

## Reward-first happy path B — app installed but user not logged in

```
Fan scans QR / taps promo
→ Team app opens
→ User is not logged in
→ Lightweight login gate appears
→ User logs in with team / Ticketmaster / passkey / email / phone
→ Returns to reward-first purchase screen
→ Purchases tokens
→ Wallet matched/created
→ Reward unlocks
```

Suggested copy:

> **Quick login and we’ll take you back to your reward.**
> 

> We’ll use your [Team] account to set up your fan wallet.
> 

The login should feel like a small checkpoint, not a full onboarding process.

Priority login methods:

1. Team app account
2. Ticketmaster / Account Manager identity
3. Passkey / biometric
4. Email OTP
5. Phone OTP
6. Create account only if no match exists

---

## Reward-first happy path C — app not installed

```
Fan scans QR / taps promo
→ Mobile web landing opens
→ Team-branded reward page appears
→ User continues with passkey / email / phone / ticket account
→ Existing user logs in, new user registers
→ Wallet matched or created silently
→ Reward-framed purchase screen
→ Purchase
→ Tokens attach to team
→ Reward unlocks
→ Web wallet / add-to-home / app-install nudge appears after reward
```

The mobile web version should never make app install the first requirement.

The product should avoid:

```
Scan QR → App Store → Download → Create account → Find reward
```

Instead:

```
Scan QR → Reward page → Quick identity → Buy → Reward unlocked
```

Only after reward unlock should we show:

> “Add [Team] Wallet to your home screen”
> 

> or
> 

> “Open in the [Team] app next time.”
> 

---

## Reward-first purchase screen

The purchase screen should be centered around the reward.

Instead of:

> “Buy NFL Tokens”
> 

Use:

> **Unlock your [Team] reward**
> 

> Get [Team] Tokens to claim today’s reward and start earning points.
> 

Recommended structure:

1. Reward card at top  
    - “Free draft beer”
    - “Valid today at Bank of America Stadium”
    - “Unlocked after purchase”
2. Token pack selector  
    - $10 Starter
    - $25 Most popular
    - $50 Superfan
3. Short explainer  
    - “Tokens stay in your wallet.”
    - “Your reward unlocks after purchase.”
    - “You’ll also start earning [Team] points.”
4. Payment CTA  
    - “Buy with Apple Pay”
    - “Unlock reward · $25”

For generic team campaigns, the CTA can adapt:

- **Unlock reward · $25**
- **Claim game-day perk**
- **Get [Team] Tokens**
- **Buy & unlock boost**

---

## Reward unlock / redemption flow

```
Purchase succeeds
→ Success screen confirms tokens
→ Reward card becomes active
→ User taps reward
→ Scannable voucher / QR / code appears
→ Staff scans or user redeems
→ Reward marked used
→ Tokens remain in wallet
→ User lands on team dashboard
```

### What the fan sees

> **Reward unlocked**
> 

> Show this QR at any participating stand.
> 

Voucher screen should include:

- Reward name
- QR/code
- Expiration
- Usage rule
- “Single-use”
- “Tokens stay in your wallet”
- “Back to wallet”

### Required edge cases

- Reward already redeemed
- Reward expired
- Offline scanner
- QR scan failure
- Staff validation failure
- Age-gated reward, e.g. beer
- Non-alcohol fallback
- Duplicate claim prevention
- Reward claimed but wallet dashboard fails to load

## Scenario 2 — Game-day boost activation

### Core idea

Boosts should sit thematically next to rewards because they are also **contextual, time-sensitive incentives**.

A boost is another kind of game-day reward:

> “You’re at the game — 3× points active.”
> 

It should appear in the same acquisition layer as QR/reward campaigns, because it depends on context: venue, team, game schedule, campaign window, and sometimes location.

### Best for

- Stadium urgency
- Increasing purchase size
- Returning fan top-ups
- Game-day activation
- Reinforcing “now is the moment”

### Target users

- Fans at the stadium who are curious about the boost
- Fans opening the app during a live game
- Returning token holders
- Users entering via QR, ticketing, or team app on game day

### Happy path

```
Fan scans QR / opens team app / taps promo
→ System detects team + venue + active game window
→ Boost banner appears
→ User sees reward/boost context
→ User sees a simple auth
→ User taps “Buy & pledge at 3×”
→ Purchase screen opens with boost attached
→ User buys tokens
→ Tokens attach to team
→ Boosted points are added
→ Dashboard shows boosted earning
```

### What the fan sees

> **You’re at the game**
> 

> 3× points are active until the final whistle.
> 

CTA:

> **Buy & earn 3×**
> 

or, if paired with reward:

> **Unlock reward + earn 3×**
> 

### Edge cases

- Location off → ask to enable location, but allow normal purchase
- Boost expired during checkout → continue without boost
- Boost active at purchase but not pledge → product rule needed; recommended copy says “buy and pledge during the active window”
- Away-team fan at home stadium → show eligibility neutrally
- Multiple boosts → show one cumulative boost, not stacked math
- Boost points delayed → show pending state

## Scenario 3 — Returning fan reward / top-up loop

### Core idea

A returning fan should not go through onboarding again. They should land directly in a wallet state that says:

> “Welcome back. Here’s what you can claim today.”
> 

This is the repeat version of the reward-first acquisition path.

### Best for

- Repeat game-day engagement
- Top-ups
- Tier progression
- Reward reactivation
- Season-long retention

### Target users

- Existing wallet users
- Existing token holders
- Season Ticket Members
- Fans who previously claimed a reward
- Fans close to next tier

### Happy path

```
Returning fan scans QR / taps team app card / opens promo
→ System recognizes account
→ Opens team wallet
→ Shows current balance, tier, and today’s reward
→ Fan can:
   claim reward if eligible
   buy more tokens
   activate boost
   enter raffle
   refer a fan
→ If they buy more, purchase screen is framed as top-up
→ Wallet updates
```

### What the fan sees

> **Welcome back, Anna**
> 

> You’re 12 tokens from Keep Pounding Club.
> 

If reward available:

> **Today at the stadium**
> 

> Free draft beer available.
> 

If no reward:

> **Game-day boost active**
> 

> Buy more tokens before kickoff to earn 3×.
> 

### Edge cases

- Session expired → quick re-auth
- Reward already claimed → show claimed state
- User is already above tier threshold → do not replay tier unlock
- Top-up does not reach next tier → show progress
- Top-up crosses threshold → show tier unlock
- User scans a different team’s campaign → show team-specific context carefully

## Scenario 4 — Referral / viral reward loop

### Core idea

Referral should also sit near the reward/boost layer because it is a **reward-driven acquisition mechanic**.

The referrer is motivated by a reward or points. The invitee enters through a reward-first landing.

### Best for

- Group attendance
- Stadium social behavior
- Watch parties
- Fan-to-fan growth
- Off-season campaigns

### Target users

- Fans attending with friends
- Highly engaged fans
- Returning users
- Users who just claimed a reward
- Fans near the next tier

### Happy path

```
Fan opens referral quest/reward
→ Sees “Invite a fan — both get bonus tokens/points”
→ Shares link
→ Friend opens team-specific landing
→ Friend signs up / buys / claims reward
→ Referrer receives reward or points
→ Friend receives welcome reward
```

### Important rule

Referrals should work across teams.

```
Panthers fan invites Dolphins fan
→ Dolphins fan joins Dolphins interface
→ Panthers fan still receives referral reward
```

### Edge cases

- Friend already has account
- Friend signs up but does not complete qualifying action
- Self-referral
- Duplicate account
- Referral cap
- Invitee changes team
- Reward pending

---

# Layer 2 — Team-app / logged-in fan acquisition

## Core idea

The fan is already inside the team’s digital environment. This is the highest-trust, highest-identity-confidence acquisition layer.

The wallet appears as a module, SDK, native surface, or embedded webview inside:

- Team app home
- Member hub
- Ticketing area
- Mobile wallet
- Game-day guide
- Rewards/perks page
- Push notification
- Account Manager flow

Here the funnel can be shorter because the team app already knows the user.

### Best for

- Existing fans
- App users
- Season Ticket Members
- PSL owners
- Ticket holders
- Fans with known identity
- Repeat engagement

### Target users

- Logged-in team app users
- Season Ticket Members
- PSL owners
- Premium members
- Mobile-ticket users
- Fans with Ticketmaster-linked accounts
- Existing rewards/loyalty members

### Scenarios in this layer

| Scenario | Core idea | Best for | Target audience |
| --- | --- | --- | --- |
| **5. Team app banner / in-app campaign card** | Logged-in fan taps an in-app card and goes directly to reward/purchase/wallet. | Low-friction conversion. | Existing app users. |
| **6. Ticketing / mobile-ticket identity activation** | Fan enters through mobile tickets or Account Manager; token offer uses Ticketmaster/team identity. | Strong identity matching and game-day relevance. | Ticket holders, STMs, PSL owners. |
| **7. Member / loyalty hub activation** | Fan discovers wallet inside existing benefits, rewards, or member hub. | High-value fan segmentation. | STMs, premium members, existing loyalty users. |
| **8. Team-specific quests / ongoing engagement** | Wallet becomes part of team loyalty loop after onboarding. | Retention. | Existing wallet users and engaged fans. |

## Scenario 5 — Team app banner / in-app campaign card

### Core idea

The fan is already in the app. The banner should move them directly into the token/reward experience.

Example card:

> **Get Panthers Tokens**
> 

> Buy in, unlock your tier, and claim today’s reward.
> 

or:

> **Own the game with [Team] Tokens**
> 

> Earn points, rewards, and game-day boosts.
> 

### Happy path

```
Fan opens team app
→ Sees token/reward banner
→ Taps banner
→ Team app passes identity to NFL Fan Token system
→ User lands on team-specific purchase or wallet screen
→ Wallet matched/created silently
→ Purchase / top-up / claim flow
→ Team dashboard
```

### What the fan sees

If first-time user:

> “Get [Team] Tokens and unlock today’s reward.”
> 

If returning user:

> “You’re 12 tokens from Gold.”
> 

> “Game-day boost active.”
> 

> “Reward available.”
> 

### Backend / system logic

Team app should pass:

```
team_user_id
Ticketmaster account id, if available
email / phone, if permissioned
STM / PSL / premium status, if available
team affiliation
campaign source
app session
```

NFL Fan Token system should:

```
match existing wallet
create wallet if missing
attach team context
load reward / boost / eligibility
route to purchase or dashboard
```

### Edge cases

- User logged into app but missing phone/email → ask only for missing field
- App user not Ticketmaster-linked → allow wallet, later prompt to link ticket account
- Offer already claimed → show top-up state
- Feature unavailable in old app version → fallback to mobile web
- Team app session expired → quick login

## Scenario 6 — Ticketing / mobile-ticket identity activation

### Core idea

Ticketing is the most important identity bridge because Ticketmaster / Account Manager appears across the pilot teams.

The wallet offer should appear when a user is already doing a game-day task:

```
Opening mobile ticket
Adding ticket to wallet
Entering stadium
Viewing game-day guide
Managing tickets
Transferring ticket
```

### Best for

- Ticket holders
- Season Ticket Members
- Game-day conversion
- Identity matching
- Attendance-based rewards

### Target users

- Fans with tickets
- STMs
- PSL owners
- Premium seat holders
- Corporate ticket recipients
- Mobile-ticket users

### Happy path

```
Fan opens team app for tickets
→ Ticketmaster / Account Manager identity exists
→ Token reward/boost offer appears
→ Fan taps
→ Identity is passed to NFL Fan Token system
→ Wallet matched/created
→ Reward/purchase flow opens
→ Attendance or ticket status can inform points/boost eligibility
```

### Example copy

> **Turn today’s game into rewards**
> 

> Get [Team] Tokens and earn points while you’re here.
> 

or:

> **Ticket holder boost unlocked**
> 

> Buy [Team] Tokens today and earn bonus points.
> 

### Edge cases

- Ticket transferred → identify current ticket holder where possible
- Corporate ticket → incomplete identity
- User has ticket but no team app login
- Ticketmaster login exists but app profile missing
- Attendance verification delayed
- Ticket scanned but wallet not yet created

## Scenario 7 — Member / loyalty hub activation

### Core idea

Existing team member spaces are natural wallet entry points:

- Dolphins Member HQ / mobile wallet
- Eagles STM Hub
- 49ers member benefits / Faithful-style rewards
- Panthers PSL/Silver Club/perks
- Patriots STM/waitlist/member code benefits

The wallet should feel like an extension of benefits.

### Best for

- High-value fans
- Existing loyalty users
- STMs / PSL owners
- Premium members
- Fans already trained to use discounts and perks

### Target users

- Members
- Season Ticket Members
- PSL owners
- Waitlist users
- Premium seating users
- Fan club members

### Happy path

```
Fan opens member hub / benefits page
→ Sees token benefit card
→ Taps
→ Identity and membership status are passed
→ Wallet loads
→ User sees member-specific reward, boost, or tier advantage
→ Purchases or claims
```

### Example copy

> **Member-only token boost**
> 

> Your [Team] membership unlocks bonus points today.
> 

or:

> **Unlock more from your membership**
> 

> Get [Team] Tokens to access raffles, rewards, and game-day perks.
> 

### Edge cases

- Membership status cannot be verified
- User is logged in but not recognized as STM/PSL
- Partner benefits require third-party account
- Discount code identity differs from ticketing identity
- User has multiple account identities

## Scenario 8 — Team-specific quests / ongoing engagement

### Core idea

After acquisition, the wallet becomes the team’s repeat engagement surface.

The fan should always see:

- what they have,
- what they earned,
- what their team relationship is,
- what to do next.

### Happy path

```
Fan opens team wallet
→ Sees team dashboard
→ Opens Ways to Earn
→ Completes quests
→ Points update
→ Tier progresses
→ Rewards unlock
```

### Example quests

#### Dolphins

- Use mobile wallet at concessions
- Buy merch through Member HQ
- Attend home game
- Add payment method
- Transfer/resell/donate tickets

#### Eagles

- Complete STM profile
- Choose favorite player
- Attend game
- Use partner offer
- Join family/Kids Club experience

#### 49ers

- Attend game/event
- Shop team store
- Digital/social engagement
- Fan club participation
- Earn “yards”-style rewards

#### Panthers

- Use Panthers app at game
- Purchase food
- Join predictive game
- Complete responsibility pledge
- Use PSL/Silver Club perk

#### Patriots

- Use ProShop member code
- Attend STM event
- Use partner offer
- Join waitlist / member activity

### Edge cases

- Quest locked by tier
- Quest requires external validation
- Points pending
- Quest expired
- No quests configured
- User completes action outside wallet and expects credit

---

# Layer 3 — NFL-level / standard wallet acquisition

## Core idea

This is the neutral, league-level path.

It is useful when there is no team campaign, no team app context, and no reward-first entry.

The main NFL Fan Wallet onboarding is already described in the current NFL User Flows, so it does not need to be repeated in detail here.

### Best for

- General NFL app users
- [NFL.com](http://NFL.com) visitors
- Users outside stadium context
- Users without a pilot team app
- Fans coming from broad league-level marketing
- Users who want to browse/select a team manually

### Target users

- General NFL fans
- Fans outside the five pilot markets
- Fans whose team is not yet supported
- Users not entering from a specific campaign
- Users who intentionally search for NFL Fan Wallet

### Scenarios in this layer

| Scenario | Core idea | Best for | Target audience |
| --- | --- | --- | --- |
| **9. Main NFL app / NFL Fan Wallet onboarding** | Neutral League flow: create account, buy tokens, detect/select team, pledge, unlock team skin. Already documented in NFL User Flows. | Standard fallback. | General NFL audience. |
| **10. Unsupported-team / waitlist path** | Fan selects a non-pilot team; system offers waitlist or pilot-team selection. | Managing pilot limitations. | Fans of non-pilot teams. |
| **11. Manual team selection / location fallback** | User selects from available teams if no team context exists or location is denied. | Neutral onboarding resilience. | Users outside campaign context. |

## Scenario 9 — Main NFL app / NFL Fan Wallet onboarding

Already described in the main NFL User Flows.

Mention only:

```
Neutral NFL Wallet
→ Create account / sign in
→ Buy tokens
→ Detect or choose team
→ Pledge
→ Unlock team skin
→ Team dashboard
```

This should remain the fallback or lower-frequency path, not the hero acquisition path.

---

## Scenario 10 — Unsupported-team / waitlist path

### Core idea

Only five pilot teams are supported. If a user chooses another team, the product should not dead-end.

### Happy path

```
User searches unsupported team
→ System says team is not available yet
→ User can:
   join waitlist 
   choose an available pilot team
   continue with neutral NFL wallet if allowed
```

### Suggested copy

> “[Team] isn’t available yet.”
> 

> Signal your support to [Team]! 
Join the list and we’ll let you know when your team launches.
> 

### Edge cases

- User refuses to choose pilot team
- User joins waitlist but later enters team QR
- User’s NFL favorite team is unsupported
- User is physically in a pilot stadium but supports unsupported team

## Scenario 11 — Manual team selection / location fallback

### Core idea

This is the resilience path when the system cannot infer team context.

### Use when

- No `team_id` in campaign
- Location denied
- Location ambiguous
- User wants a different team
- User is outside a pilot market
- Favorite team unavailable

### Happy path

```
No team context
→ Ask for location or team choice
→ User selects team
→ Continue to purchase / pledge
```

### Edge cases

- Multiple teams in region
- Location denied
- Team unavailable
- Team data fails to load
- User changes team before pledge

---

# Consolidated routing architecture

The system should route users according to acquisition context and identity confidence.

```
ENTRY
- Team QR
- Website banner
- Digital promo link
- Team app banner
- Ticketing / mobile ticket
- Member hub
- Referral link
- NFL app / NFL Wallet

↓

ACQUISITION LAYER
1. Team-context reward-first
2. Team-app logged-in fan
3. NFL-level standard flow

↓

CONTEXT CHECK
- Is team_id present?
- Is reward_id present?
- Is boost active?
- Is app installed?
- Is user logged in?
- Is Ticketmaster/team identity available?
- Does NFL Fan Token wallet already exist?
- Is user returning?
- Is user eligible for member/ticket/reward benefits?

↓

IDENTITY
A. Logged-in team app user → pass credentials
B. Ticketmaster / Account Manager user → match identity
C. No app → mobile web passkey/email/phone
D. Existing NFL wallet → sign in/match
E. New user → register minimal profile + silent wallet creation

↓

ACTIVATION
- Reward-first purchase
- Team preselected from campaign/app
- Wallet created/matched
- Tokens attached/pledged to team
- Reward / boost / points unlocked
- Team dashboard opens

↓

ONGOING ENGAGEMENT
- Claim reward
- Use boost
- Buy more tokens
- Earn points
- Complete quests
- Refer fans
- Enter raffle
- Buy/redeem tickets
- Vote later if eligible
- View activity
```

# Recommended scenario order for mockups / narrative

For presentation and product clarity, I would order the onboarding flows selection like this:

## 1. Hero acquisition flow — reward-first QR

```
Scan team QR
→ Reward landing
→ Quick identity
→ Reward-framed token purchase
→ Wallet created
→ Team attached
→ Reward unlocked
→ Team dashboard
```

This should be the main story.

## 2. Reward + boost variant

```
Scan QR at game
→ Reward landing
→ “3× boost active”
→ Buy & unlock reward
→ Boosted points added
→ Reward voucher
→ Dashboard
```

## 3. Returning fan variant

```
Scan QR / open app
→ Welcome back
→ Today’s reward / boost
→ Top up
→ Tier progress
→ Claim / redeem
```

## 4. Team app logged-in variant

```
Open team app
→ Tap token banner
→ Identity passed
→ Purchase / wallet
→ Dashboard
```

## 5. Ticketing/member variant

```
Open mobile ticket / member hub
→ Ticket/member boost or reward
→ Wallet activation
→ Points/benefits
```

## 6. Main NFL app standard flow

Mention only as already documented.

---

# MVP priority

## Priority 1 — Acquisition must-haves

1. Reward-first QR / promo / website banner  
2. App installed + logged-in deep link  
3. App installed + not logged-in quick login  
4. No-app mobile web reward landing  
5. Team app banner / card  
6. Returning fan reward/top-up  

## Priority 2 — Game-day and payoff must-haves

1. Game-day boost  
2. Reward unlock  
3. Reward redemption / voucher  
4. Team dashboard  
5. Activity / pending states  

## Priority 3 — Retention

1. Quests  
2. Referral  
3. Raffle  
4. Ticket purchase / redeem  
5. Member/ticket-based benefits  

## Priority 4 — Secondary

1. Voting  
2. Multi-team pledge / change team  
3. Unsupported-team waitlist  
4. Advanced tier explanations  

---

# Product recommendation

The product narrative should shift from:

> “Buy NFL tokens and then discover what they do.”
> 

to:

> **“Claim a team reward. Tokens unlock it, keep you earning, and turn into your team wallet.”**
> 

That means the hero flow should be:

```
Reward → identity → purchase → wallet → reward unlocked → points/tier → next action
```

not:

```
Wallet → account → tokens → team → maybe rewards
```

The standard NFL Fan Wallet onboarding still matters, but for the pilot it should be treated as the **fallback / league-level path**, while the highest-converting experience should be **team-context, reward-first, and identity-light**.