const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const jobs = [
  // Your job objects here...
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Samsung',
    location: 'Pune, Maharastra',
    description: 'We are looking for a skilled Frontend Developer to join our team.',
    workType: 'Full-time',
    logo: 'https://imgs.search.brave.com/sl-7-6rkXoZaD3CbNNl8ltDpC2Ysm9NBtjxBG3bzDHo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzAxL3NhbXN1bmct/bG9nby03LnBuZw', // Placeholder for the logo URL
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Apple',
    location: 'Hydrabad, Telangana',
    description: 'Backend Developer with expertise in Node.js and MongoDB.',
    workType: 'Part-time',
    logo: 'https://imgs.search.brave.com/Qua5zLFRfbdV2I-wfuxPmdvef6uawU8NF6eLeXGAN3I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FwcGxlX2xvZ29f/Z3JleS02MjR4NDAw/LnBuZw', // Placeholder for the logo URL
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Facebook',
    location: 'Bengaluru, Karnataka',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Internship',
    logo: 'https://imgs.search.brave.com/lpRquIfAtN-37jptVFq3qoo5DZLwTcbz4--6Em5_SUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzM0LzUzLzQ3/LzM2MF9GXzgzNDUz/NDcwNV9TMkJTUUJz/Wnk3QzdvTGM4VjI2/OTY0Tk9kWE9NVzRP/dy5qcGc', // Placeholder for the logo URL
  },
  {
    id: 4,
    title: 'Web Developer',
    company: 'Google',
    location: 'Usa, California',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Part-time',
    logo: 'https://imgs.search.brave.com/5dRuBOedlVFn8yCv2UHpQiDQ5CZoQUDGb1h6x3FfpTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzg4LzA3Lzg0/LzM2MF9GXzM4ODA3/ODQ1NF9tS3RiZFhZ/RjljeVFvdkNDVHNq/cUkwZ2JmdTdnQ2NT/cC5qcGc', // Placeholder for the logo URL
  },
  {
    id: 5,
    title: 'Full Stack Developer',
    company: 'Paypal',
    location: 'Canada, Canada',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Full-time',
    logo: 'https://imgs.search.brave.com/aiEb93QPaNiyo_clHhlGlyssjuUUWiwt7Uv5P1fv4Fo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlYmFsYW5jZS5j/b20vdGhtYi9FeU1q/dHZkQ04zTTFIbkg3/aEdxSmp2aW5Vbk09/LzEzMTl4MzIwL2Zp/bHRlcnM6bm9fdXBz/Y2FsZSgpOm1heF9i/eXRlcygxNTAwMDAp/OnN0cmlwX2ljYygp/L1BheV9wYWwtMjZl/YWNmOTE1ZTg4NGZm/MGE5M2NiMmYzNTUy/YjNkZGYuanBn', // Placeholder for the logo URL
  },
  {
    id: 6,
    title: 'Full Stack Developer',
    company: 'Microsoft',
    location: 'Hadapsar, Pune',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Part-time',
    logo: 'https://imgs.search.brave.com/lZtSHU0xcSaZfNN6zHo9A4aLmiNBnFIEpmjesp6VYeA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbWljcm9zb2Z0/L21pY3Jvc29mdF9Q/TkcxMy5wbmc', // Placeholder for the logo URL
  },
  {
    id: 7,
    title: 'Full Stack Developer',
    company: 'Mindstick',
    location: 'Magarpatta, Pune',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Internship',
    logo: 'https://imgs.search.brave.com/rk3mwb5FWvUtrPfqJx8tNhcCoHEM2rePXz_gYw4I508/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTQub3dsZXIuY29t/L2xvZ28vbWluZHN0/aWNrX293bGVyXzIw/MTYwMjI4XzA3Mjkx/Nl9sYXJnZS5qcGc', // Placeholder for the logo URL
  },
  {
    id: 8,
    title: 'Full Stack Developer',
    company: 'Mastercard',
    location: 'Yerwada, Pune',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Internship',
    logo: 'https://imgs.search.brave.com/WXKWcVmUZifsBPqonDDs10weyZdiCl0UnsZBbITTFhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZC5tYXN0ZXJjYXJk/LmNvbS9jb250ZW50/L2RhbS9tY2NvbS9i/cmFuZGNlbnRlci9n/dWlkZWxpbmUtZXho/aWJpdHMvb3B0aW9u/Mi9tY19iY19nZGxf/dmVyc2lvbnNfc3lt/LTFfZW4tZ2xvYmFs/LnBuZw', // Placeholder for the logo URL
  },
  {
    id: 9,
    title: 'Full Stack Developer',
    company: 'Android',
    location: 'Viman nager pune',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Full-time',
    logo: 'https://imgs.search.brave.com/XrzKxgsZEJsXS5Zf5pj-yU3ws91DZTrrnnJLfjgWxsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly85dG81/Z29vZ2xlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2l0ZXMv/NC8yMDIzLzA2L3pv/b20tYW5kcm9pZC1u/ZXctM2QtbG9nby13/b3JkbWFyay5wbmc_/dz0xNjAw', // Placeholder for the logo URL
  }, 
  {
    id: 10,
    title: 'Full Stack Developer',
    company: 'Pintrest',
    location: 'Pimpri, Pune',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Part-time',
    logo: 'https://imgs.search.brave.com/yMx-R1Sxs7FDvVvDEGc6fjAKFVgMGPPXJXp9zz1jDsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC8ycHl4OHJ3/dXZ6NngvNnJpcGRN/RzNGVVFuSkNFdU1P/azVNSy8xNjIzYWE0/ZjIwNWM4Y2ZmZThk/MTE5MTZiZGIyNjI4/Ny9QcmVzc0Fzc2V0/c19CcmFuZC5wbmc_/Zm09d2VicCZxPTg1', // Placeholder for the logo URL
  },
  {
    id: 11,
    title: 'Full Stack Developer',
    company: 'Shadi.com',
    location: 'Mumbai, India',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Full-time',
    logo: 'https://imgs.search.brave.com/hRxnsvFWbFcwl7cDoDvBvrS93j1UsP3-FKvaOanEVKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMS5h/d3NzdGF0aWMuY29t/L2FwYWMvY3VzdG9t/ZXItcmVmZXJlbmNl/cy1sb2dvcy0oQDF4/LS0tQDJ4KS9TaGFh/ZGlfbG9nb0AyeC5j/MjEzYTE3ZDBkODg1/YWMyNTc0YTQwNjAy/MWNjMzZlY2M0MWYy/ZmYyLnBuZw', // Placeholder for the logo URL
  },
  {
    id: 12,
    title: 'Full Stack Developer',
    company: 'Boat',
    location: 'Navi Mumbai, India',
    description: 'Full Stack Developer experienced with MERN stack.',
    workType: 'Internship',
    logo: 'https://imgs.search.brave.com/5ZsRk-9KdbYoBDnptwGdvfe35QpoaDwUManY2Q9SJ5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMjAt/MDgtdC1ib2F0LWxv/Z28tNi5wbmc', // Placeholder for the logo URL
  }, 
];

// Welcome endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Job Listings API');
});


app.get('/api/jobs', (req, res) => {
  const search = req.query.search || ''; 
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || jobs.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
 
  let filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);
  
  // Response structure
  res.json({
    total: filteredJobs.length,
    jobs: paginatedJobs,
    currentPage: page,
    totalPages: Math.ceil(filteredJobs.length / limit)
  });
});
app.get('/api/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  const job = jobs.find((j) => j.id === jobId);  
  if (job) {
    return res.json(job);
  } else {
    return res.status(404).json({ message: 'Job not found' });
  }
});
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
