import Posts from '@/components/Posts';
import PostSearch from '@/components/PostSearch';

export default function Blog() {
  return (
    <>
      <h3>Blog page</h3>
      <PostSearch />
      <Posts />
    </>
  );
}
