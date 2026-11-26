/*
  Mock catalog data — static front-end only, no backend/database.
  Edit this file to add/change games, purchase types, and packages.
  Each game can have MULTIPLE purchase types (uid_topup, gift_code,
  game_pass, account_service) to demo the different order flows.
*/
const CATALOG = [
  {
    slug: "roblox",
    name: "Roblox",
    tile: "roblox",
    mark: "R",
    tagline: "Robux top-up for Roblox, delivered to your account or gift card.",
    purchaseTypes: [
      {
        type: "uid_topup",
        label: "UID Top-up",
        fieldLabel: "Roblox Username",
        packages: [
          { id: "rbx-80", label: "80 Robux", price: 95 },
          { id: "rbx-400", label: "400 Robux", price: 450, original: 480 },
          { id: "rbx-800", label: "800 Robux", price: 880, original: 950 },
          { id: "rbx-1700", label: "1700 Robux", price: 1750, original: 1900 }
        ]
      },
      {
        type: "gift_code",
        label: "Gift Code",
        fieldLabel: "Your Email (code delivered here)",
        packages: [
          { id: "rbx-gift-10", label: "$10 Gift Card", price: 1150 },
          { id: "rbx-gift-25", label: "$25 Gift Card", price: 2800 },
          { id: "rbx-gift-50", label: "$50 Gift Card", price: 5500 }
        ]
      }
    ]
  },
  {
    slug: "clash-of-clans",
    name: "Clash of Clans",
    tile: "clash-of-clans",
    mark: "CoC",
    tagline: "Gems top-up for Clash of Clans. Large orders go through a reviewed offer request.",
    purchaseTypes: [
      {
        type: "uid_topup",
        label: "UID Top-up",
        fieldLabel: "Player Tag (e.g. #ABC123)",
        packages: [
          { id: "coc-500", label: "500 Gems", price: 520 },
          { id: "coc-1200", label: "1200 Gems", price: 1180, original: 1250 },
          { id: "coc-2500", label: "2500 Gems", price: 2400, original: 2600 }
        ]
      }
    ]
  },
  {
    slug: "pubg-mobile",
    name: "PUBG Mobile",
    tile: "pubg-mobile",
    mark: "PM",
    tagline: "UC (Unknown Cash) top-up for PUBG Mobile.",
    purchaseTypes: [
      {
        type: "uid_topup",
        label: "UID Top-up",
        fieldLabel: "Character / Player ID",
        packages: [
          { id: "pubg-60", label: "60 UC", price: 110 },
          { id: "pubg-325", label: "325 UC", price: 520, original: 560 },
          { id: "pubg-660", label: "660 UC", price: 990, original: 1050 },
          { id: "pubg-1800", label: "1800 UC", price: 2550, original: 2700 }
        ]
      },
      {
        type: "account_service",
        label: "Account Service",
        fieldLabel: "Describe what you need (rank boost, recovery, etc.)",
        isTextarea: true,
        packages: [
          { id: "pubg-boost", label: "Rank Boost (per tier)", price: 350 },
          { id: "pubg-recovery", label: "Account Recovery Assist", price: 500 }
        ]
      }
    ]
  },
  {
    slug: "call-of-duty-mobile",
    name: "Call of Duty Mobile",
    tile: "call-of-duty-mobile",
    mark: "CM",
    tagline: "CP (COD Points) top-up for Call of Duty Mobile.",
    purchaseTypes: [
      {
        type: "uid_topup",
        label: "UID Top-up",
        fieldLabel: "In-game Open ID",
        packages: [
          { id: "codm-80", label: "80 CP", price: 115 },
          { id: "codm-420", label: "420 CP", price: 540, original: 580 },
          { id: "codm-880", label: "880 CP", price: 1080, original: 1150 }
        ]
      },
      {
        type: "game_pass",
        label: "Game Pass",
        fieldLabel: "Your Email (for delivery confirmation)",
        packages: [
          { id: "codm-weekly", label: "Weekly Supply Pass", price: 150 },
          { id: "codm-monthly", label: "Monthly Supply Pass", price: 550 }
        ]
      }
    ]
  }
];

// Currency symbol used across the site.
const CURRENCY = "৳";
