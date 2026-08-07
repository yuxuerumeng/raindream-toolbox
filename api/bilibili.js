// Vercel Serverless: Bilibili video info proxy
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const url = req.query.url || '';
  let bvid = '';
  const m = url.match(/BV[a-zA-Z0-9]{10}/);
  if (m) bvid = m[0];
  else {
    const am = url.match(/av(\d+)/i);
    if (am) bvid = 'av' + am[1];
  }
  if (!bvid) return res.status(400).json({ error: 'Invalid URL' });
  
  try {
    const fetchUrl = bvid.startsWith('av')
      ? `https://api.bilibili.com/x/web-interface/view?aid=${bvid.slice(2)}`
      : `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`;
    const r = await fetch(fetchUrl, { headers: { Referer: 'https://www.bilibili.com' } });
    const data = await r.json();
    if (data.code !== 0) return res.json(data);
    
    const v = data.data;
    // Get video download URL
    const cid = v.cid;
    const playR = await fetch(
      `https://api.bilibili.com/x/player/playurl?bvid=${bvid}&cid=${cid}&qn=80&fnval=1&fourk=1`,
      { headers: { Referer: 'https://www.bilibili.com' } }
    );
    const playData = await playR.json();
    const durl = playData.data?.durl || [];
    
    res.json({
      title: v.title,
      pic: v.pic,
      duration: v.duration,
      desc: v.desc,
      owner: v.owner,
      stat: v.stat,
      videos: durl.map(d => ({ url: d.url, size: d.size, length: d.length }))
    });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}
