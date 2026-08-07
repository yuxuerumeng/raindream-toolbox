export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const url = req.query.url || '';
  const idMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/);
  if (!idMatch) return res.status(400).json({ error: 'Invalid YouTube URL' });
  const vid = idMatch[1];
  
  try {
    const r = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${vid}&format=json`);
    const info = await r.json();
    res.json({
      id: vid,
      title: info.title,
      author: info.author_name,
      thumbnail: `https://img.youtube.com/vi/${vid}/maxresdefault.jpg`,
      thumbnails: {
        max: `https://img.youtube.com/vi/${vid}/maxresdefault.jpg`,
        hq: `https://img.youtube.com/vi/${vid}/hqdefault.jpg`,
        sd: `https://img.youtube.com/vi/${vid}/sddefault.jpg`,
        mq: `https://img.youtube.com/vi/${vid}/mqdefault.jpg`
      }
    });
  } catch(e) {
    res.status(500).json({ error: 'Failed to fetch video info' });
  }
}
