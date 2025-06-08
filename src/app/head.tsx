export default function Head() {
  return (
    <>
      {/* Preload hero poster to optimize LCP */}
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1500&q=70"
        fetchPriority="high"
      />
    </>
  );
} 