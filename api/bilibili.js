export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const url = req.query.url || '';
  
  try {
    const r = await fetch(`https://api.injahow.cn/bparse/?url=${encodeURIComponent(url)}&type=json`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const d = await r.json();
    if (d.code === 200 && d.data) {
      const v = d.data;
      res.json({
        title: v.title || '',
        pic: v.cover || v.pic || '',
        videos: v.video ? [{ url: v.video, label: '完整视频' }] : [],
        audio: v.audio || ''
      });
    } else {
      res.json({ error: d.msg || '获取失败' });
    }
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}
