export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const url = req.query.url || '';
  
  let bvid = '';
  const m = url.match(/BV[a-zA-Z0-9]{10}/);
  if (m) bvid = m[0];

  // Always try to get basic info from Bilibili official API
  try {
    const r = await fetch(
      bvid ? 'https://api.bilibili.com/x/web-interface/view?bvid=' + bvid : 'https://api.bilibili.com/x/web-interface/view?' + new URLSearchParams({aid: (url.match(/av(\d+)/i) || ['',''])[1] || ''}),
      { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'Referer': 'https://www.bilibili.com' } }
    );
    const d = await r.json();
    if (d.code === 0 && d.data) {
      const v = d.data;
      return res.json({
        title: v.title,
        pic: v.pic,
        stat: v.stat,
        owner: v.owner,
        video: v.pic ? null : null // return null if we couldn't get download URL from third-party
      });
    }
  } catch(e) {}

  // Fallback: try third-party APIs for download URL
  const tpApis = [
    'https://tenapi.cn/v2/bilibili?url=' + encodeURIComponent(url),
  ];
  for (const api of tpApis) {
    try {
      const r = await fetch(api, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const t = await r.text();
      if (t.startsWith('<')) continue;
      const d = JSON.parse(t);
      if (d.code === 200 && d.data) {
        const v = d.data;
        return res.json({
          title: v.title || '',
          pic: v.cover || v.pic || '',
          video: v.url || v.video || ''
        });
      }
    } catch(e) { continue; }
  }
  res.json({ error: '解析失败，请确认链接有效' });
}
