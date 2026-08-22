# Rekenan V202.03 — Dual App / One API

- APP 1: `admin/index.html` — Owner/Admin, mempertahankan aplikasi utama.
- APP 2: `user/index.html` — User-only, tanpa Menu Admin dan route Admin.
- API: `CLIENT_V202.03_SERVER_API.gs` tetap satu API.
- URL cache-busting rilis: `?v=2200`.
- APP 2 membersihkan sesi Admin lokal dan memblokir route/fungsi Admin pada UI.
- Backend tetap menjadi otoritas permission; APP 2 tidak dimaksudkan sebagai pengganti validasi server.
