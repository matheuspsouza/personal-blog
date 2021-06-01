import { postSlugs, postForSlug } from "../../data_posts";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";


function Post({ frontmatter, body }) {
  if (!frontmatter) return <></>;

  // prose added to use Typography styles
  return (
    <Layout pageTitle={frontmatter.title}>
      <div className="w-full">
        <article className="prose max-w-none">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <ReactMarkdown children={body} />
        </article>
      </div>
    </Layout>
  );
}


export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
    },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;