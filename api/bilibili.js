export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const url = req.query.url || '';
  let bvid = '';
  const m = url.match(/BV[a-zA-Z0-9]{10}/);
  if (m) bvid = m[0];
  else {
    const am = url.match(/av(\d+)/i);
    if (am) bvid = am[0];
  }
  if (!bvid) return res.status(400).json({ error: 'Invalid URL' });
  
  try {
    const isAv = bvid.startsWith('av');
    const fetchUrl = isAv
      ? `https://api.bilibili.com/x/web-interface/view?aid=${bvid.slice(2)}`
      : `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`;
    
    const r = await fetch(fetchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.bilibili.com'
      }
    });
    const data = await r.json();
    if (data.code !== 0) return res.json({ error: data.message || 'Video not found', code: data.code });
    
    const v = data.data;
    const playR = await fetch(
      `https://api.bilibili.com/x/player/playurl?bvid=${isAv ? '' : bvid}&avid=${isAv ? bvid.slice(2) : v.aid}&cid=${v.cid}&qn=80&fnval=1&fourk=1`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Referer': 'https://www.bilibili.com'
        }
      }
    );
    const playData = await playR.json();
    const durl = playData.data?.durl || [];
    
    res.json({
      title: v.title,
      pic: v.pic,
      desc: v.desc,
      owner: v.owner,
      stat: v.stat,
      videos: durl.map(d => ({ url: d.url, size: d.size }))
    });
  } catch(e) {
    res.status(500).json({ error: e.message || 'Server error' });
  }
}
