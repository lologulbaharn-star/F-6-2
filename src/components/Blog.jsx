import React from "react";
import b1 from "../assets/images/blog-1.jpg";
import b2 from "../assets/images/blog-2.jpg";
import b3 from "../assets/images/blog-3.jpg";

const Blog = () => {
  const posts = [
    { img: b1, title: "Creating Streamlined Safeguarding Processes with OneRen" },
    { img: b2, title: "What are your safeguarding responsibilities and how can you manage them?" },
    { img: b3, title: "Revamping the Membership Model with Triathlon Australia" }
  ];

  return (
    <section className="container" style={{ padding: '64px 0', textAlign: 'center' }}>
      <h2>Caring is the new marketing</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '40px' }}>
        {posts.map((post, i) => (
          <div key={i} style={{ width: '360px', position: 'relative', marginBottom: '100px' }}>
            <img src={post.img} alt="blog" style={{ width: '100%', borderRadius: '8px' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '25px', right: '25px', background: 'var(--silver)', padding: '16px', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
              <p style={{ fontWeight: '600', color: 'var(--gray-text)', marginBottom: '16px' }}>{post.title}</p>
              <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Readmore →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Blog;