class GraphQLService {
  getAll = async () => {
    const query = `{
      portfolioItemCollection {
        items {
          id
          title
          tagline
          client
          role
          slug
          project
          website
          description
          setVisable
          utitlies
          header {
            title
            url
            width
            height
          }
          detail {
            title
            url
            width
            height
          }
          video {
            url
            title
          }
          imagesCollection{
            items {
              title
              url
            }
          }
        }
      }
    }`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify({ query }),
    };

    const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFULL_SPACE_ID}/`;
    const r = await fetch(url, options);
    const json = await r.json();
    return json.data;
  };
}

export default GraphQLService;
